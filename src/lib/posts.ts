import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  category: string;
  content: any;
}

// Server-side functions
export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        // Extract excerpt from content if not provided in frontmatter
        const excerpt = data.excerpt || content.slice(0, 150) + "...";

        // Serialize MDX content
        const mdxSource = await serialize(content);

        return {
          slug,
          title: data.title || "Untitled Post",
          excerpt,
          date: data.date || new Date().toISOString(),
          coverImage: data.coverImage || "/images/blog-default.jpg",
          category: data.category || "Technology",
          content: mdxSource,
        };
      })
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Extract excerpt from content if not provided in frontmatter
    const excerpt = data.excerpt || content.slice(0, 150) + "...";

    // Serialize MDX content
    const mdxSource = await serialize(content);

    return {
      slug,
      title: data.title || "Untitled Post",
      excerpt,
      date: data.date || new Date().toISOString(),
      coverImage: data.coverImage || "/images/blog-default.jpg",
      category: data.category || "Technology",
      content: mdxSource,
    };
  } catch (error) {
    return null;
  }
}

// Client-side helper functions
export function getPostSlugFromPath(path: string): string {
  return path.split("/").pop()?.replace(/\.md$/, "") || "";
}

export async function getRelatedPosts(
  slug: string,
  category: string,
  limit: number = 3
): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, limit);
}
