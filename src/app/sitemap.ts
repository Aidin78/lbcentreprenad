import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/tjanster/", priority: 0.9 },
    ...services.flatMap((s) =>
      s.detail ? [{ path: s.detail.path, priority: 0.8 }] : [],
    ),
    { path: "/projekt/", priority: 0.7 },
    { path: "/om-oss/", priority: 0.6 },
    { path: "/kontakt/", priority: 0.8 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
