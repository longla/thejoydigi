import Head from "next/head";

interface MetaDataProps {
  title?: string;
  description?: string;
  image?: string;
}

export const DefaultMetaData: React.FC<MetaDataProps> = ({
  title = "TheJoyDigi - IT Solutions for Business",
  description = "Transform your business with innovative IT solutions. We provide web development, mobile apps, cloud solutions, and IT consulting services.",
  image = "/about-image.jpeg",
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
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&family=Nunito:wght@400;500;600;700&family=Nunito+Sans:wght@400;500;600;700&display=swap"
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
        content="web development, digital transformation, IT solutions, business technology"
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
        content="web development, digital transformation, IT solutions, business technology"
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
        content="web development, digital transformation, IT solutions, business technology, ${title.toLowerCase()}"
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
