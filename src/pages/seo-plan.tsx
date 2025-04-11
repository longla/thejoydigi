import { BlogPostSEO } from "@/components/seo";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";

// Configure marked for tables and other markdown features
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown (includes tables)
  breaks: true,
});

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
        className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-ul:list-disc prose-ul:text-gray-600
          prose-ol:list-decimal prose-ol:text-gray-600
          prose-li:my-1
          prose-table:min-w-full prose-table:border prose-table:border-gray-200 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
          prose-thead:bg-gray-50
          prose-th:px-6 prose-th:py-3 prose-th:text-left prose-th:text-xs prose-th:font-medium prose-th:text-gray-500 prose-th:uppercase prose-th:tracking-wider prose-th:border-b prose-th:border-gray-200
          prose-td:px-6 prose-td:py-4 prose-td:text-sm prose-td:text-gray-900 prose-td:border-b prose-td:border-gray-200
          prose-tr:border-b prose-tr:border-gray-200 prose-tr:last:border-b-0
          prose-tbody:divide-y prose-tbody:divide-gray-200
          prose-blockquote:border-l-4 prose-blockquote:border-gray-200 prose-blockquote:pl-4 prose-blockquote:italic
          prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-em:text-gray-600 prose-em:italic"
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
