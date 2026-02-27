import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wisehandy.com";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/aboutus`, lastModified: new Date() },
    { url: `${base}/reviews`, lastModified: new Date() },
    { url: `${base}/quoterequest`, lastModified: new Date() },
    { url: `${base}/electrictansferswitchgenerator`, lastModified: new Date() },
  ];
}
