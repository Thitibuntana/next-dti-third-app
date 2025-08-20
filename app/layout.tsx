import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Money Share Calculator",
  description: "Web for calculating money shares",
  keywords: [
    "money",
    "share",
    "calculator",
    "finance",
    "budgeting",
    "personal finance",
    "expense sharing",
    "cost splitting",
    "financial planning",
    "money management",
    "group expenses",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prompt.className}>{children}</body>
    </html>
  );
}
