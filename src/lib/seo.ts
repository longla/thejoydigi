import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: "%s | The Joy Digi",
  defaultTitle: "The Joy Digi – A Digital Studio for Visionary Brands",
  description:
    "The Joy Digi helps visionary brands grow through purposeful design, custom technology, and clear strategy—delivering clean, growth‑focused websites, web apps, and digital consulting.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "The Joy Digi – A Digital Studio for Visionary Brands",
    url: "https://thejoydigi.com/",
    siteName: "The Joy Digi",
    description:
      "The Joy Digi helps visionary brands grow through purposeful design, custom technology, and clear strategy—delivering clean, growth‑focused websites, web apps, and digital consulting.",
    images: [
      {
        url: "https://thejoydigi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Joy Digi – A Digital Studio for Visionary Brands",
      },
    ],
  },
  twitter: {
    handle: "@thejoydigi",
    site: "@thejoydigi",
    title: "The Joy Digi – A Digital Studio for Visionary Brands",
    description:
      "The Joy Digi helps visionary brands grow through purposeful design, custom technology, and clear strategy—delivering clean, growth‑focused websites, web apps, and digital consulting.",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
    {
      name: "author",
      content: "The Joy Digi",
    },
  ],
};
