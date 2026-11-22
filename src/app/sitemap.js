const BASE = "https://v0-aquin.vercel.app";

export default function sitemap() {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
