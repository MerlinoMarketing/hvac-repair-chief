import type { MetadataRoute } from "next";

import { brand } from "@/config/brand";
import { services } from "@/config/services";
import { locations } from "@/config/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = brand.website.replace(/\/$/, "");
  const lastmod = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: lastmod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: lastmod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified: lastmod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: lastmod, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/emergency`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/financing`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/gallery`, lastModified: lastmod, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: lastmod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: lastmod, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastmod,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: lastmod,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
