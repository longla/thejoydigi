import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage: string;
  category: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
  coverImage,
  category,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48">
          <Image src={coverImage} alt={title} fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="text-sm text-secondary-500 mb-2">{date}</div>
          <h2 className="text-xl font-heading font-semibold text-secondary-900 mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-secondary-600 line-clamp-3">{excerpt}</p>
        </div>
      </Link>
    </motion.article>
  );
}
