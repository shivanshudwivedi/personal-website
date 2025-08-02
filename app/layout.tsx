import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivanshu Dwivedi | Software Engineer",
  description: "Software Engineer & Machine Learning Engineer with expertise in building highly scalable products.",
  metadataBase: new URL("https://achyutkatiyar.com"),
  
  // Basic metadata
  applicationName: "Shivanshu Dwivedi Portfolio",
  authors: [{ name: "Shivanshu Dwivedi" }],
  keywords: ["Software Engineer", "Yaaro", "Entrepreneur", "Python", "Machine Learning"],
  
  openGraph: {
    type: "website",
    url: "https://shivanshudwivedi.vercel.app",
    title: "Shivanshu Dwivedi | Software Engineer",
    description: "Software Engineer & Machine Learning Engineer with expertise in building highly scalable products.",
    siteName: "Shivanshu Dwivedi",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivanshu Dwivedi - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://shivanshudwivedi.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}