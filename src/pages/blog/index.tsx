import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import BlogCard from "../../components/blog/blog-card";
import { getAllPosts } from "../../lib/posts";
import BlogLayout from "./_layout";

interface BlogIndexProps {
  posts: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    coverImage: string;
    category: string;
  }[];
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <BlogLayout>
      <div className="min-h-screen bg-bgLight">
        {/* Hero Section */}
        <section className="bg-gradient-dark text-textLight py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
                TheJoyDigi Blog
              </h1>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Insights, tips, and industry updates to help your business
                thrive in the digital age
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </BlogLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
