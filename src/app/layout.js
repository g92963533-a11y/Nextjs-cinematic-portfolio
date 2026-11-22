import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair", display: "swap" });
const BASE = "https://v0-aquin.vercel.app";

export const viewport = { themeColor: "#090b0d", width: "device-width", initialScale: 1 };

export const metadata = {
  metadataBase: new URL(BASE),
  title: { default: "Aquin Anil — Independent Developer", template: "%s | Aquin Anil" },
  description: "Aquin Anil is a student developer from Kerala, India exploring software, artificial intelligence, cybersecurity, and the web.",
  keywords: ["Aquin Anil", "student developer", "web development", "artificial intelligence", "cybersecurity", "Kerala developer"],
  authors: [{ name: "Aquin Anil", url: BASE }],
  creator: "Aquin Anil",
  openGraph: { type: "website", locale: "en_IN", url: BASE, siteName: "Aquin Anil — Independent Developer", title: "Aquin Anil — Independent Developer", description: "Building digital experiences with technology and curiosity." },
  twitter: { card: "summary", title: "Aquin Anil — Independent Developer", description: "Building digital experiences with technology and curiosity.", images: [profile.avatar] },
  robots: { index: true, follow: true },
  alternates: { canonical: BASE },
  category: "portfolio",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aquin Anil",
  url: BASE,
  jobTitle: "Student Developer",
  description: "A student, developer, and technology enthusiast exploring software, artificial intelligence, cybersecurity, and the web.",
  sameAs: ["https://github.com/aquinanil79-web", "https://www.linkedin.com/in/aquin-anil/"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} /></head>
      <body>{children}<Analytics /></body>
    </html>
  );
}
