import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Grow - Social Media Agency",
  description: "Converted Next.js app from social-media-10.html"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
