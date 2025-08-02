// app/metadata.ts
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shivanshu Dwivedi | Portfolio",
  description: "Software Engineer & Machine Learning Engineer",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", type: "image/png" },
  },
};