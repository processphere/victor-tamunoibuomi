import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { content } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(content.siteUrl),
  title: `${content.name} — ${content.role}`,
  description: content.tagline,
  openGraph: {
    title: `${content.name} — ${content.role}`,
    description: content.tagline,
    url: content.siteUrl,
    siteName: content.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${content.name} — ${content.role}`,
    description: content.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}