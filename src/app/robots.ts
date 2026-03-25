import type { MetadataRoute } from "next";

import { brand } from "@/config/brand";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = brand.website.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
