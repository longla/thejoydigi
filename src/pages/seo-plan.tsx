import { BlogPostSEO } from "@/components/seo";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";

export default function SEOPlan({ content }: { content: string }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BlogPostSEO
        title="SEO Roadmap"
        description="A practical, step-by-step guide to get thejoydigi.com ranking and attracting the right traffic."
        date={new Date().toISOString()}
        author="TheJoyDigi Team"
        slug="seo-plan"
        hasCoverImage={false}
      />
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src", "content", "seo-plan.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);
  const htmlContent = marked(content);

  return {
    props: {
      content: htmlContent,
    },
  };
}
