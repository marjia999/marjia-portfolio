import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marjia Khatun | Computer Science & Engineering Student",
  description:
    "Personal portfolio of Marjia Khatun, a Computer Science and Engineering student interested in software development, artificial intelligence, cybersecurity, and research.",
  keywords: [
    "Marjia Khatun",
    "Software Development",
    "Artificial Intelligence",
    "Cybersecurity",
    "Computer Science",
    "BUP",
    "Portfolio",
  ],
  authors: [{ name: "Marjia Khatun" }],
  openGraph: {
    title: "Marjia Khatun | CS & Engineering Student",
    description:
      "Computer Science & Engineering student exploring AI, cybersecurity, and intelligent systems.",
    type: "website",
    locale: "en_US",
    siteName: "Marjia Khatun Portfolio",
    // We will update the URL and Image once you deploy and have a live domain!
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}