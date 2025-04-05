import Head from "next/head";

interface MetaDataProps {
  title?: string;
  description?: string;
  image?: string;
}

export const DefaultMetaData: React.FC<MetaDataProps> = ({
  title = "TheJoyDigi – Elevating Digital Experiences",
  description = "Empowering businesses with cutting-edge digital solutions that drive growth and enhance user experiences. Expert website design, mobile app development, SEO services, and technical SEO implementation.",
  image = "/long-digital-partner-websites-apps-seo-the-joy-digi-rectangle.png",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="website design, web development, mobile app development, SEO services, digital marketing, technical SEO, digital analytics, progressive web apps, cloud infrastructure, responsive design, cross-platform apps, social media optimization, user experience design, content marketing, GDPR compliance"
      />
      <meta name="author" content="TheJoyDigi" />
      <meta
        name="copyright"
        content="© 2024 TheJoyDigi. All rights reserved."
      />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://thejoydigi.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="/long-digital-partner-websites-apps-seo-the-joy-digi-rectangle.png"
      />
      <meta property="og:site_name" content="TheJoyDigi" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://thejoydigi.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="/long-digital-partner-websites-apps-seo-the-joy-digi-square.png"
      />
      <meta name="twitter:creator" content="@thejoydigi" />

      {/* Instagram */}
      <meta
        property="instagram:image"
        content="/long-digital-partner-websites-apps-seo-the-joy-digi-square.png"
      />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J24K88CVVT"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J24K88CVVT');
          `,
        }}
      />
      {/* End Google Analytics */}

      {/* Microsoft Clarity */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qwx9hqufpk");
          `,
        }}
      />
      {/* End Microsoft Clarity */}
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
    ? `https://www.thejoydigi.com/posts/${slug}/cover.jpg`
    : "https://www.thejoydigi.com/about-image.jpeg";

  const fullTitle = `${title} - TheJoyDigi Blog`;
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
      <meta property="article:section" content="Digital Solutions Blog" />
      <meta
        property="article:tag"
        content="web development, digital transformation, mobile apps, user experience, technical SEO"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:url"
        content={`https://www.thejoydigi.com/blog/${slug}`}
      />
      <meta property="og:site_name" content="TheJoyDigi" />
      <meta property="article:published_time" content={date} />
      <meta property="article:author" content={author} />
      <meta property="article:section" content="Digital Solutions Blog" />
      <meta
        property="article:tag"
        content="web development, digital transformation, mobile apps, user experience, technical SEO"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@thejoydigi" />

      {/* Additional SEO Meta Tags */}
      <meta
        name="keywords"
        content="website design, web development, mobile app development, progressive web apps, technical SEO, digital analytics, ${title.toLowerCase()}"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://www.thejoydigi.com/blog/${slug}`} />

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
              name: "TheJoyDigi",
              logo: {
                "@type": "ImageObject",
                url: "https://www.thejoydigi.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.thejoydigi.com/blog/${slug}`,
            },
          }),
        }}
      />
    </Head>
  );
}
