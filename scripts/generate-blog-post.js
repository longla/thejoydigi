#!/usr/bin/env node

import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import fs from "fs/promises";
import inquirer from "inquirer";
import path from "path";
import slugify from "slugify";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../posts");
const PUBLIC_POSTS_DIR = path.join(__dirname, "../public/posts");
const BLOG_LIST_FILE = path.join(__dirname, "../data/blog-posts.json");
const SEO_TOPICS_FILE = path.join(__dirname, "../seo_topics.json");
const TARGET_KEYWORDS_FILE = path.join(__dirname, "../target_keywords.txt");

// Google Gemini API configuration
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Helper function to save base64 image to file
async function saveBase64Image(base64String, outputPath) {
  try {
    // Convert base64 to buffer
    const buffer = Buffer.from(base64String, "base64");
    // Write buffer to file
    await fs.writeFile(outputPath, buffer);
    return true;
  } catch (error) {
    console.error("Error saving image:", error.message);
    return false;
  }
}

// Load and parse target keywords from file
async function loadTargetKeywords() {
  try {
    const data = await fs.readFile(TARGET_KEYWORDS_FILE, "utf8");
    const keywordData = {};
    let currentCategory = "";

    const lines = data.split("\n").filter((line) => line.trim());

    for (const line of lines) {
      if (line.startsWith("##")) {
        // Category header
        currentCategory = line.replace("##", "").trim();
        keywordData[currentCategory] = { main: [], longTail: [] };
      } else if (line.startsWith("- Keywords:")) {
        // Main keywords
        const keywords = line
          .replace("- Keywords:", "")
          .split(",")
          .map((k) => k.trim().replace(/"/g, ""))
          .filter((k) => k);

        if (currentCategory && keywordData[currentCategory]) {
          keywordData[currentCategory].main = keywords;
        }
      } else if (line.startsWith("- Long-Tail Keywords:")) {
        // Long-tail keywords
        const longTailKeywords = line
          .replace("- Long-Tail Keywords:", "")
          .split(",")
          .map((k) => k.trim().replace(/"/g, ""))
          .filter((k) => k);

        if (currentCategory && keywordData[currentCategory]) {
          keywordData[currentCategory].longTail = longTailKeywords;
        }
      }
    }

    return keywordData;
  } catch (error) {
    console.error("Error loading target keywords:", error.message);
    return {};
  }
}

// Get relevant keywords for a specific business category
async function getKeywordsForCategory(category = "") {
  const allKeywords = await loadTargetKeywords();
  const lowerCategory = category.toLowerCase();

  // Determine which keyword category to use based on the blog category
  let keywordCategory = "";

  if (
    lowerCategory.includes("web design") ||
    lowerCategory.includes("website")
  ) {
    keywordCategory = "Website Design & Development";
  } else if (
    lowerCategory.includes("app") ||
    lowerCategory.includes("mobile")
  ) {
    keywordCategory = "Web & Mobile App Development";
  } else if (
    lowerCategory.includes("seo") ||
    lowerCategory.includes("digital marketing") ||
    lowerCategory.includes("marketing")
  ) {
    keywordCategory = "SEO & Digital Marketing";
  } else if (
    lowerCategory.includes("cloud") ||
    lowerCategory.includes("it") ||
    lowerCategory.includes("infrastructure")
  ) {
    keywordCategory = "IT & Cloud Infrastructure";
  } else {
    keywordCategory = "Additional Keywords";
  }

  // Get the keywords for the selected category
  const categoryKeywords = allKeywords[keywordCategory] || {
    main: [],
    longTail: [],
  };

  // Also include general keywords
  const generalKeywords = allKeywords["Additional Keywords"] || {
    main: [],
    longTail: [],
  };

  // Combine category-specific and general keywords
  return {
    main: [...categoryKeywords.main, ...generalKeywords.main],
    longTail: [...categoryKeywords.longTail, ...generalKeywords.longTail],
  };
}

// Load business website categories from JSON file
async function loadBusinessCategories() {
  try {
    const data = await fs.readFile(SEO_TOPICS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading business categories:", error.message);
    return [];
  }
}

// Get highest SEO value business categories
async function getHighValueBusinessCategories() {
  const businessCategories = await loadBusinessCategories();

  // Sort categories by SEO value (very high > high > medium)
  const valueSortOrder = {
    "very high": 3,
    high: 2,
    medium: 1,
  };

  return businessCategories.sort(
    (a, b) => valueSortOrder[b.seo_value] - valueSortOrder[a.seo_value]
  );
}

// Update the generateBlogIdeas function to ensure it returns exactly numPosts ideas
async function generateBlogIdeas(numPosts, existingTitles = []) {
  try {
    const businessCategories = await getHighValueBusinessCategories();
    const allCategories = businessCategories.map((topic) => topic.category);
    const veryHighCategories = businessCategories
      .filter((t) => t.seo_value === "very high")
      .map((t) => t.category);
    const highCategories = businessCategories
      .filter((t) => t.seo_value === "high")
      .map((t) => t.category);

    const selectedCategories = [
      ...veryHighCategories,
      ...highCategories.sort(() => 0.5 - Math.random()).slice(0, 3),
      ...allCategories.sort(() => 0.5 - Math.random()).slice(0, 2),
    ];

    const uniqueSelectedCategories = [...new Set(selectedCategories)];
    const allKeywords = await loadTargetKeywords();
    const mainKeywords = Object.values(allKeywords)
      .flatMap((category) => category.main || [])
      .filter(Boolean);

    // Maximum number of retries
    const maxRetries = 3;
    let blogIdeas = [];
    let retryCount = 0;

    while (blogIdeas.length < numPosts && retryCount < maxRetries) {
      // Calculate how many more posts we need to generate
      const remainingPosts = numPosts - blogIdeas.length;

      // If this is a retry, request more posts than needed to ensure we get enough
      const postsToRequest =
        retryCount > 0 ? remainingPosts * 1.5 : remainingPosts;

      const prompt = `
        Generate a list of EXACTLY ${Math.ceil(
          postsToRequest
        )} unique blog post ideas related to these business website categories: ${uniqueSelectedCategories.join(
        ", "
      )}.
        
        These blog posts will be for a digital services company called "TheJoyDigi" that provides web design, development, and digital marketing services.
        
        Important requirements:
        - You MUST generate EXACTLY ${Math.ceil(postsToRequest)} blog post ideas
        - Focus on the LATEST TRENDS and CURRENT YEAR best practices in each business category
        - Each post should be optimized for SEO to help businesses rank better in search results
        - Include specific mention of current year (${new Date().getFullYear()}) in the titles where appropriate
        - Make the content valuable for businesses looking to improve their digital presence
        - Each post title should incorporate one or more of these target keywords where possible: ${mainKeywords.join(
          ", "
        )}
        - Each post should be unique and different from these existing titles: ${[
          ...existingTitles,
          ...blogIdeas.map((idea) => idea.title),
        ].join(", ")}
        
        For each blog post, provide:
        - A catchy, SEO-optimized title that mentions the current year where appropriate and includes target keywords
        - A brief description (2-3 sentences) that includes key SEO terms
        - The primary business category it belongs to (from the list provided)
        
        Return the response as a JSON array with objects containing 'title', 'description', and 'category' fields.
        The JSON array MUST contain EXACTLY ${Math.ceil(postsToRequest)} items.
        Do not include any other text or formatting, markdown code blocks, or backticks.
      `;

      try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const cleanResponse = response
          .text()
          .replace(/^```json\n?|\n?```$/g, "")
          .trim();

        console.log(`Attempt ${retryCount + 1}: Generating blog ideas...`);

        const newIdeas = JSON.parse(cleanResponse);

        // Filter out duplicates based on title
        const uniqueNewIdeas = newIdeas.filter(
          (newIdea) =>
            !blogIdeas.some(
              (existingIdea) =>
                existingIdea.title.toLowerCase() === newIdea.title.toLowerCase()
            )
        );

        // Add the unique new ideas to our collection
        blogIdeas = [...blogIdeas, ...uniqueNewIdeas];

        // Trim to the exact number needed
        if (blogIdeas.length > numPosts) {
          blogIdeas = blogIdeas.slice(0, numPosts);
        }

        // If we have enough ideas, break out of the loop
        if (blogIdeas.length >= numPosts) {
          break;
        }

        retryCount++;
      } catch (error) {
        console.error(
          `Error in generation attempt ${retryCount + 1}:`,
          error.message
        );
        retryCount++;
      }
    }

    // Check if we got enough blog ideas
    if (blogIdeas.length < numPosts) {
      console.warn(
        `Warning: Could only generate ${blogIdeas.length}/${numPosts} blog post ideas after ${maxRetries} attempts.`
      );
    }

    // Add additional metadata to each blog idea
    const blogPosts = blogIdeas.map((post) => ({
      ...post,
      status: "pending",
      date: null,
      slug: slugify(post.title, { lower: true, strict: true }),
      hasImage: false,
      business_category: post.category || uniqueSelectedCategories[0],
    }));

    return blogPosts;
  } catch (error) {
    console.error("Error generating blog ideas:", error.message);
    throw error;
  }
}

async function loadOrGenerateBlogList() {
  try {
    // Create data directory if it doesn't exist
    const dataDir = path.dirname(BLOG_LIST_FILE);
    await fs.mkdir(dataDir, { recursive: true });

    // Try to load existing blog list
    try {
      const data = await fs.readFile(BLOG_LIST_FILE, "utf8");
      return JSON.parse(data);
    } catch (error) {
      // If file doesn't exist or is invalid, ask user for number of posts and generate new ideas
      const { numPosts } = await inquirer.prompt([
        {
          type: "number",
          name: "numPosts",
          message: "How many blog post ideas would you like to generate?",
          default: 10,
          validate: (input) => {
            const num = parseInt(input);
            if (isNaN(num) || num < 1) {
              return "Please enter a valid number greater than 0";
            }
            return true;
          },
        },
      ]);
      console.log(`Generating ${numPosts} blog post ideas...`);
      const blogPosts = await generateBlogIdeas(numPosts);
      await fs.writeFile(BLOG_LIST_FILE, JSON.stringify(blogPosts, null, 2));
      return blogPosts;
    }
  } catch (error) {
    console.error("Error loading/generating blog list:", error.message);
    throw error;
  }
}

// Check if a post with a particular slug already exists as an MD file
async function checkExistingFiles(slug) {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    await fs.access(filePath);
    return true; // File exists
  } catch (error) {
    return false; // File doesn't exist
  }
}

async function generateBlogPost(blogMeta) {
  try {
    // Check if the title mentions TheJoyDigi directly
    const mentionsCompany = blogMeta.title.toLowerCase().includes("thejoydigi");

    // Get the current year for latest trends references
    const currentYear = new Date().getFullYear();

    // Get relevant target keywords for this business category
    const targetKeywords = await getKeywordsForCategory(
      blogMeta.business_category
    );

    // Determine the content format based on the title and category
    let contentFormat = "general";
    if (
      blogMeta.title.toLowerCase().includes("guide") ||
      blogMeta.title.toLowerCase().includes("tips") ||
      blogMeta.title.toLowerCase().includes("how to")
    ) {
      contentFormat = "tips";
    } else if (
      blogMeta.title.toLowerCase().includes("vs") ||
      blogMeta.title.toLowerCase().includes("comparison")
    ) {
      contentFormat = "comparison";
    } else if (
      blogMeta.title.toLowerCase().includes("trends") ||
      blogMeta.title.toLowerCase().includes(currentYear.toString())
    ) {
      contentFormat = "trends";
    }

    // Format keywords for the prompt
    const mainKeywordsStr = targetKeywords.main.map((k) => `"${k}"`).join(", ");
    const longTailKeywordsStr = targetKeywords.longTail
      .map((k) => `"${k}"`)
      .join(", ");

    // Base prompt
    let promptBase = `
      Create a blog post ${
        mentionsCompany
          ? "for thejoydigi.com"
          : `about ${blogMeta.business_category || "digital services"}`
      }.
      ${
        !mentionsCompany
          ? "The blog is from thejoydigi.com, a premium digital services company providing web design, development, and digital marketing solutions."
          : ""
      }
      
      Important: 
      - Return ONLY the blog post content in Markdown format
      - Do NOT include any frontmatter, metadata, or YAML headers
      - Do NOT include the title or any heading that repeats the title
      - Start directly with the first paragraph or subheading
      - Focus on LATEST TRENDS from ${currentYear} and current best practices
      - Include relevant statistics and data points from the current year where possible
      - Ensure the content is highly SEO-optimized with relevant keywords naturally incorporated
      - Write for businesses looking to improve their online presence
      
      Target SEO Keywords to include naturally throughout the content:
      - Main Keywords: ${mainKeywordsStr}
      - Long-Tail Keywords: ${longTailKeywordsStr}
      
      IMPORTANT: Incorporate these keywords naturally throughout the post. Include main keywords 2-3 times each and at least 2 long-tail keywords where they fit naturally. Use variations of keywords where appropriate.
      
      Use this metadata for context only: 
      - Title: "${blogMeta.title}"
      - Description: "${blogMeta.description}"
      - Business Category: "${blogMeta.business_category || "Digital Services"}"
      - Date: "${blogMeta.date}"
      
      Write in a professional, authoritative tone that establishes expertise
    `;

    // Add specific content guidance based on format
    if (contentFormat === "tips") {
      promptBase += `, and include 8-10 actionable tips related to the topic, focusing on ${currentYear} best practices for businesses.`;
      if (mentionsCompany) {
        promptBase += ` Integrate TheJoyDigi services naturally where relevant, but ensure the tips are useful for all businesses.`;
      } else {
        promptBase += ` You may mention professional digital services 2-3 times as potential solutions, but most tips should be useful for all businesses.`;
      }
    } else if (contentFormat === "comparison") {
      promptBase += ` and objectively compare different approaches or solutions, discussing pros and cons of each based on the latest industry standards.`;
      if (mentionsCompany) {
        promptBase += ` Include TheJoyDigi as one of the solutions, highlighting the benefits of professional digital services without being overly promotional.`;
      } else {
        promptBase += ` You may briefly mention professional digital service providers as one potential solution near the end of the article.`;
      }
    } else if (contentFormat === "trends") {
      promptBase += `. Focus heavily on ${currentYear} trends, recent developments, and emerging technologies in this space.`;
      promptBase += ` Include specific predictions for the industry and actionable advice for businesses to stay ahead of the curve.`;
      if (mentionsCompany) {
        promptBase += ` Naturally incorporate TheJoyDigi's services where relevant to these trends.`;
      }
    } else {
      promptBase += `. Focus on providing value and solving business digital presence problems with current solutions.`;
      if (mentionsCompany) {
        promptBase += ` Naturally incorporate TheJoyDigi services where relevant.`;
      } else {
        promptBase += ` Only mention professional digital services briefly (1-2 times) if it naturally fits the content.`;
      }
    }

    // Add closing guidance
    promptBase += `
      The content should be:
      - Educational and informative first, promotional second (if at all)
      - Around 1200-1500 words to provide comprehensive value
      - Include relevant subheadings for easy scanning
      - Include specific, actionable advice that business readers can implement
      - End with a conclusion that summarizes the key points
      - Highly SEO-optimized with the provided target keywords naturally incorporated throughout
      - Reference current ${currentYear} data, tools, and practices for businesses
      
      IMPORTANT: Make sure to naturally include the target keywords throughout the post, especially in headings, introductory paragraphs, and conclusion.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(promptBase);
    const response = await result.response;
    const content = response.text();

    // Remove markdown code block wrapper if present
    const cleanContent = content.replace(/^```markdown\n?|\n?```$/g, "").trim();

    return cleanContent;
  } catch (error) {
    console.error("Error generating blog content:", error.message);
    throw error;
  }
}

// Helper function to get a random image from the blog images folder
async function getRandomBlogImage() {
  try {
    const blogImagesDir = path.join(__dirname, "../public/images/blog");
    const files = await fs.readdir(blogImagesDir);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));
    if (imageFiles.length === 0) {
      console.error("No images found in the blog images directory");
      return null;
    }
    const randomImage =
      imageFiles[Math.floor(Math.random() * imageFiles.length)];
    return `/images/blog/${randomImage}`;
  } catch (error) {
    console.error("Error getting random blog image:", error.message);
    return null;
  }
}

// Helper function to get image path based on SEO topic slug
async function getImageForTopic(topicSlug) {
  try {
    const blogImagesDir = path.join(__dirname, "../public/images/blog");
    const files = await fs.readdir(blogImagesDir);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    // First try to find exact match
    const exactMatch = imageFiles.find((file) =>
      file.toLowerCase().startsWith(topicSlug.toLowerCase())
    );

    if (exactMatch) {
      return `/images/blog/${exactMatch}`;
    }

    // If no exact match, get a random image
    return await getRandomBlogImage();
  } catch (error) {
    console.error("Error getting image for topic:", error.message);
    return await getRandomBlogImage();
  }
}

async function updateBlogStatus(selectedPost, hasGeneratedImage = false) {
  try {
    const blogPosts = await loadOrGenerateBlogList();
    const updatedPosts = blogPosts.map((post) => {
      if (post.slug === selectedPost.slug) {
        return {
          ...post,
          status: "completed",
          date: selectedPost.date,
          hasImage: post.hasImage || hasGeneratedImage, // Update image status if image was generated
        };
      }
      return post;
    });

    await fs.writeFile(BLOG_LIST_FILE, JSON.stringify(updatedPosts, null, 2));
  } catch (error) {
    console.error("Error updating blog status:", error.message);
  }
}

async function createBlogPost() {
  try {
    // Ensure directories exist
    await fs.mkdir(POSTS_DIR, { recursive: true });
    await fs.mkdir(PUBLIC_POSTS_DIR, { recursive: true });

    // Load or generate blog list
    const blogPosts = await loadOrGenerateBlogList();

    // Get existing blog post files to filter out posts that already exist
    const existingFiles = [];
    for (const post of blogPosts) {
      if (await checkExistingFiles(post.slug)) {
        existingFiles.push(post.slug);
        // If file exists but status is pending, update to completed
        if (post.status === "pending") {
          post.status = "completed";
          post.date = post.date || new Date().toISOString().split("T")[0];
          await updateBlogStatus(post);
        }
      }
    }

    if (existingFiles.length > 0) {
      console.log(
        `Found ${existingFiles.length} blog posts already created as files but marked as pending in JSON. Updated their status.`
      );
    }

    // Filter for posts that are pending and don't have files already
    const pendingPosts = blogPosts.filter(
      (post) => post.status === "pending" && !existingFiles.includes(post.slug)
    );

    if (pendingPosts.length === 0) {
      const { numPosts } = await inquirer.prompt([
        {
          type: "number",
          name: "numPosts",
          message:
            "All posts completed. How many new blog post ideas would you like to generate?",
          default: 10,
          validate: (input) => {
            const num = parseInt(input);
            if (isNaN(num) || num < 1) {
              return "Please enter a valid number greater than 0";
            }
            return true;
          },
        },
      ]);

      // Get all existing titles to avoid duplicates
      const existingTitles = blogPosts.map((post) => post.title);
      console.log(`Generating ${numPosts} new blog post ideas...`);
      const newPosts = await generateBlogIdeas(numPosts, existingTitles);

      // Merge new posts with existing ones
      const mergedPosts = [...blogPosts, ...newPosts];
      await fs.writeFile(BLOG_LIST_FILE, JSON.stringify(mergedPosts, null, 2));
      return createBlogPost();
    }

    // Ask if user wants to generate all pending posts or select one
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: `Found ${pendingPosts.length} pending blog posts. What would you like to do?`,
        choices: [
          { name: "Generate all pending blog posts", value: "all" },
          { name: "Select a single blog post to generate", value: "single" },
          { name: "Generate new blog post ideas", value: "new" },
          { name: "Filter by business category", value: "filter" },
        ],
      },
    ]);

    if (action === "filter") {
      // Get all unique categories from pending posts
      const categories = [
        ...new Set(
          pendingPosts.map((post) => post.business_category).filter(Boolean)
        ),
      ];

      if (categories.length === 0) {
        console.log(
          "No business categories found in pending posts. Generating new posts with categories..."
        );
        return createBlogPost();
      }

      const { selectedCategory } = await inquirer.prompt([
        {
          type: "list",
          name: "selectedCategory",
          message: "Select a business category to filter by:",
          choices: [...categories, "All Categories"],
        },
      ]);

      if (selectedCategory === "All Categories") {
        return createBlogPost();
      }

      // Filter posts by selected category
      const filteredPosts = pendingPosts.filter(
        (post) => post.business_category === selectedCategory
      );

      if (filteredPosts.length === 0) {
        console.log(`No pending posts found in category: ${selectedCategory}`);
        return createBlogPost();
      }

      const { selectedPost } = await inquirer.prompt([
        {
          type: "list",
          name: "selectedPost",
          message: `Select a blog post from category "${selectedCategory}" to generate:`,
          choices: filteredPosts.map((post) => ({
            name: post.title,
            value: post,
          })),
        },
      ]);

      // Continue with blog post generation for the selected post
      await generateSingleBlogPost(selectedPost);
      return;
    }

    if (action === "new") {
      const { numPosts } = await inquirer.prompt([
        {
          type: "number",
          name: "numPosts",
          message: "How many new blog post ideas would you like to generate?",
          default: 5,
          validate: (input) => {
            const num = parseInt(input);
            if (isNaN(num) || num < 1) {
              return "Please enter a valid number greater than 0";
            }
            return true;
          },
        },
      ]);

      // Get all existing titles to avoid duplicates
      const existingTitles = blogPosts.map((post) => post.title);
      console.log(`Generating ${numPosts} new blog post ideas...`);
      const newPosts = await generateBlogIdeas(numPosts, existingTitles);

      // Merge new posts with existing ones
      const mergedPosts = [...blogPosts, ...newPosts];
      await fs.writeFile(BLOG_LIST_FILE, JSON.stringify(mergedPosts, null, 2));
      return createBlogPost();
    }

    if (action === "all") {
      console.log(`\nGenerating ${pendingPosts.length} blog posts...\n`);

      let successCount = 0;
      let errorCount = 0;

      for (let i = 0; i < pendingPosts.length; i++) {
        const post = pendingPosts[i];
        console.log(
          `Processing post ${i + 1}/${pendingPosts.length}: ${post.title}`
        );

        // Skip if file already exists
        if (await checkExistingFiles(post.slug)) {
          console.log(`Skipping existing post: ${post.title}`);
          // Update its status in the JSON
          post.status = "completed";
          post.date = post.date || new Date().toISOString().split("T")[0];

          // Check if cover image exists
          const coverImagePath = path.join(
            path.join(PUBLIC_POSTS_DIR, post.slug),
            "cover.jpg"
          );
          let hasImage = false;
          try {
            await fs.access(coverImagePath);
            hasImage = true;
          } catch (error) {
            // Image doesn't exist
          }

          await updateBlogStatus(post, hasImage);
          continue;
        }

        try {
          // Generate the blog post
          await generateSingleBlogPost(post);
          successCount++;
        } catch (error) {
          console.error(
            `Error generating post "${post.title}":`,
            error.message
          );
          errorCount++;
        }
      }

      console.log("\nBlog post generation complete!");
      console.log(`Successfully generated: ${successCount} posts`);
      if (errorCount > 0) {
        console.log(`Failed to generate: ${errorCount} posts`);
      }
      return;
    }

    // Let user select a blog post to create
    const { selectedPost } = await inquirer.prompt([
      {
        type: "list",
        name: "selectedPost",
        message: "Select a blog post to create:",
        choices: pendingPosts.map((post) => ({
          name: `${post.title}${
            post.business_category ? ` (${post.business_category})` : ""
          }`,
          value: post,
        })),
      },
    ]);

    // Generate the selected blog post
    await generateSingleBlogPost(selectedPost);
  } catch (error) {
    console.error("Error creating blog post:", error.message);
    process.exit(1);
  }
}

// Function to generate a single blog post
async function generateSingleBlogPost(post) {
  try {
    // Check if file already exists
    if (await checkExistingFiles(post.slug)) {
      console.log(
        `File for '${post.title}' already exists. Skipping generation.`
      );
      // Update its status in the JSON
      post.status = "completed";
      post.date = post.date || new Date().toISOString().split("T")[0];
      await updateBlogStatus(post, true);
      return;
    }

    // Add current date
    post.date = new Date().toISOString().split("T")[0];

    // Generate slug from title
    const slug = post.slug;
    const fileName = `${slug}.md`;
    const filePath = path.join(POSTS_DIR, fileName);

    // Get relevant target keywords to reference
    const targetKeywords = await getKeywordsForCategory(post.business_category);

    // Generate blog content
    console.log(`\nGenerating content for: ${post.title}`);
    if (post.business_category) {
      console.log(`Business Category: ${post.business_category}`);
    }
    console.log(`Target Keywords: ${targetKeywords.main.join(", ")}`);

    const content = await generateBlogPost(post);

    // Get image path based on SEO topic
    const imagePath = await getImageForTopic(
      post.business_category.toLowerCase().replace(/\s+/g, "-")
    );
    console.log(`Using image: ${imagePath}`);

    // Add frontmatter to content with full-size image settings
    const frontmatter = `---
title: "${post.title}"
description: "${post.description}"
date: "${post.date}"${
      post.business_category ? `\ncategory: "${post.business_category}"` : ""
    }${imagePath ? `\ncoverImage: "${imagePath}"` : ""}
imageStyle: "full-width"
imageHeight: "auto"
imageWidth: "100%"
imageObjectFit: "cover"
keywords: ${JSON.stringify([
      ...targetKeywords.main,
      ...targetKeywords.longTail.slice(0, 3),
    ])}
---

`;

    // Write the blog post file with frontmatter and content
    await fs.writeFile(filePath, frontmatter + content, "utf8");

    // Update blog status
    await updateBlogStatus(post, true);

    console.log(`Blog post created: ${filePath}`);
  } catch (error) {
    console.error(`Error generating blog post "${post.title}":`, error.message);
  }
}

// Run the script
createBlogPost();
