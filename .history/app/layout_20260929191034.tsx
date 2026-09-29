import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// This loads the 'Inter' font, which is standard for modern developer portfolios
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marjia Khatun",
  description: "Computer Science & Engineering Student Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      
        {children}
      
    
  );
}