const BASE = "https://v0-aquin.vercel.app";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
