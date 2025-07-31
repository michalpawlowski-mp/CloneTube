import type { Metadata } from "next";
import "./globals.css";
import Nav from "./Navigation/Nav";
import Header from "./Header/Header";

export const metadata: Metadata = {
  title: "CloneTube by MPDEV",
  description: "A clone of YouTube built with Next.js",
  keywords: ["YouTube", "Clone", "Next.js", "MPDEV", "React", "JavaScript", "Web Development", "Tailwind CSS"],
  authors: [{ name: "MPDEV", url: "https://pawlowskimichal.pl/" }],
  icons: {
    icon: "/yt-logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="bg-neutral-800 text-gray-900 overflow-hidden">
        <Header />
        <div className="flex flex-col lg:flex-row">
          <Nav />
          <main className="lg:w-10/12 h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
