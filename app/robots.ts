import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://silovsolutions.com";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/products", "/contact"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

