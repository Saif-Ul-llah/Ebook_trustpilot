import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://reviews.thebooksauthors.com"),
  title: "The Book Authors Reviews",
  description:
    "Read customer reviews, ratings, and service feedback for The Book Authors.",
  icons: {
    icon: [
      {
        url: "/star-icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "The Book Authors Reviews",
    description: "Customer service reviews for The Book Authors.",
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
