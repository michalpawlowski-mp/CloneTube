import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CloneTube by MPDEV",
  description: "A clone of YouTube built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="bg-neutral-800 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
