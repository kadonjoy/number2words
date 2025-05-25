import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Number to Words Converter",
  description: "Convert numbers to English words instantly",
  keywords: [
    "number to words",
    "number converter",
    "number to text",
    "number in english",
    "numbers in english",
    "convert number to words",
    "number to words converter",
    "number to words online",
    "number to words tool",
    "number to words app",
    "number to words free",
    "number to words generator",
    "number to words service",
    "number to words utility",
    "number in accounts",
    "number in words",
    "number to words for checks",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
