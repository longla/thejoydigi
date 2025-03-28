import Head from "next/head";

interface MetaDataProps {
  title?: string;
  description?: string;
  image?: string;
}

export const DefaultMetaData: React.FC<MetaDataProps> = ({
  title = "TheJoyDigi - IT Solutions for Business",
  description = "Transform your business with innovative IT solutions. We provide web development, mobile apps, cloud solutions, and IT consulting services.",
  image = "/images/og-image.jpg",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://thejoydigi.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://thejoydigi.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

type BlogPostMetaDataProps = {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  hasCoverImage: boolean;
};

export function BlogPostMetaData({
  title,
  description,
  date,
  author,
  slug,
  hasCoverImage,
}: BlogPostMetaDataProps) {
  const imageUrl = hasCoverImage
    ? `https://www.ruhrohretreat.com/posts/${slug}/cover.jpg`
    : "https://www.ruhrohretreat.com/ruhrohretreat-social.jpg";

  const fullTitle = `${title} - Ruh-Roh Retreat Blog`;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta property="article:published_time" content={date} />
      <meta property="article:author" content={author} />
      <meta property="article:section" content="Pet Care Blog" />
      <meta
        property="article:tag"
        content="pet care, pet boarding, dog boarding, cat boarding, luxury pet care"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:url"
        content={`https://www.ruhrohretreat.com/blog/${slug}`}
      />
      <meta property="og:site_name" content="Ruh-Roh Retreat" />
      <meta property="article:published_time" content={date} />
      <meta property="article:author" content={author} />
      <meta property="article:section" content="Pet Care Blog" />
      <meta
        property="article:tag"
        content="pet care, pet boarding, dog boarding, cat boarding, luxury pet care"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@ruhrohretreat" />

      {/* Additional SEO Meta Tags */}
      <meta
        name="keywords"
        content="pet care, pet boarding, dog boarding, cat boarding, luxury pet care, ${title.toLowerCase()}"
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href={`https://www.ruhrohretreat.com/blog/${slug}`}
      />

      {/* Schema.org markup for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: description,
            image: imageUrl,
            datePublished: date,
            dateModified: date,
            author: {
              "@type": "Person",
              name: author,
            },
            publisher: {
              "@type": "Organization",
              name: "Ruh-Roh Retreat",
              logo: {
                "@type": "ImageObject",
                url: "https://www.ruhrohretreat.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.ruhrohretreat.com/blog/${slug}`,
            },
          }),
        }}
      />
    </Head>
  );
}
