import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloneTube by MPDEV",
  description: "A clone of YouTube built with Next.js",
  keywords: [
    "YouTube",
    "Clone",
    "Next.js",
    "MPDEV",
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Web Development",
    "Tailwind CSS",
    "API Youtube",
    "YouTube API",
  ],
  authors: [{ name: "MPDEV", url: "https://pawlowskimichal.pl/" }],
  icons: {
    icon: "/yt-logo.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pl">
      <body className="bg-neutral-800 text-gray-900 overflow-hidden w-screen h-screen">
        {children}
      </body>
    </html>
  );
}
