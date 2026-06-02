import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reviews.nobleinkstudios.com"),
  title: "Noble Ink Studios Reviews",
  description:
    "Read customer reviews, ratings, and service feedback for Noble Ink Studios.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Noble Ink Studios Reviews",
    description: "Customer service reviews for Noble Ink Studios.",
    images: ["/brand/og-social-1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
