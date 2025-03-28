import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import BlogCard from "../../components/blog/blog-card";
import { getAllPosts } from "../../lib/posts";
import MainLayout from "../_layouts";

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
    <MainLayout>
      <div className="min-h-screen bg-secondary-50">
        {/* Hero Section */}
        <section className="bg-gradient-dark text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                TheJoyDigi Blog
              </h1>
              <p className="text-xl text-secondary-200 max-w-2xl mx-auto">
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
    </MainLayout>
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
