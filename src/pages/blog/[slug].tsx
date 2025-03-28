import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import MainLayout from "../_layouts";

interface BlogPostProps {
  post: {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    category: string;
    content: any;
  };
}

export default function BlogPost({ post }: BlogPostProps) {
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
              <div className="mb-4">
                <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
                {post.title}
              </h1>
              <div className="text-secondary-200">{post.date}</div>
            </motion.div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 prose prose-lg max-w-none font-sans">
                  <div className="prose-headings:font-heading prose-h1:font-heading prose-h2:font-heading prose-h3:font-heading prose-h4:font-heading prose-h5:font-heading prose-h6:font-heading prose-p:text-secondary-600 prose-strong:text-secondary-900 prose-strong:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                    <MDXRemote
                      {...post.content}
                      components={{
                        h1: (props) => (
                          <h1
                            className="text-3xl font-heading font-bold mb-6"
                            {...props}
                          />
                        ),
                        h2: (props) => (
                          <h2
                            className="text-2xl font-heading font-bold mb-4"
                            {...props}
                          />
                        ),
                        h3: (props) => (
                          <h3
                            className="text-xl font-heading font-bold mb-3"
                            {...props}
                          />
                        ),
                        p: (props) => (
                          <p className="mb-4 text-secondary-600" {...props} />
                        ),
                        ul: (props) => (
                          <ul className="list-disc pl-6 mb-4" {...props} />
                        ),
                        ol: (props) => (
                          <ol className="list-decimal pl-6 mb-4" {...props} />
                        ),
                        li: (props) => (
                          <li className="mb-2 text-secondary-600" {...props} />
                        ),
                        a: (props) => (
                          <a
                            className="text-primary hover:underline"
                            {...props}
                          />
                        ),
                        strong: (props) => (
                          <strong
                            className="font-semibold text-secondary-900"
                            {...props}
                          />
                        ),
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
