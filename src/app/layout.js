import { Inter } from "next/font/google";
import "./globals.css";
import { getAllContent } from "@/lib/content";
import { defaults } from "@/lib/defaults";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata() {
  let meta;
  try {
    const dbContent = await getAllContent();
    meta = dbContent.meta || defaults.meta;
  } catch {
    meta = defaults.meta;
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
