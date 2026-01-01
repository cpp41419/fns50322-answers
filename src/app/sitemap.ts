import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://answers.fns50322.com.au";

  const categories = [
    "getting-started",
    "licensing-requirements",
    "course-structure",
    "costs-funding",
    "credit-assessment",
    "loan-products",
    "state-licensing",
    "career-pathways",
  ];

  const states = ["nsw", "vic", "qld", "wa", "sa", "tas", "nt", "act"];

  const topics = [
    "fnsinc511",
    "fnscrd501",
    "fnsfmb512",
    "bsbpef501",
    "fnsfmk515",
    "fnsfmb513",
  ];

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/questions`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/quiz`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/states`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/search`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/submit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  // Category pages
  categories.forEach((cat) => {
    routes.push({
      url: `${baseUrl}/questions/${cat}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // State pages
  states.forEach((state) => {
    routes.push({
      url: `${baseUrl}/states/${state}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Topic/Module pages
  topics.forEach((topic) => {
    routes.push({
      url: `${baseUrl}/topics/${topic}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  return routes;
}
