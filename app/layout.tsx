import type { Metadata, Viewport } from "next";
import { League_Spartan, Manrope } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";

const displayFont = League_Spartan({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: `${siteContent.authorName} | ${siteContent.book.title}`,
  description: siteContent.book.shortDescription,
  keywords: [
    siteContent.authorName,
    siteContent.book.title,
    "National Strategy",
    "Security Policy",
    "Risk Assessment",
    "Governance",
    "Modern Threats"
  ]
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
