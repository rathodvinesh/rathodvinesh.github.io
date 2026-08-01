import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Vinesh Rathod | Fullstack Software Engineer Portfolio",
  description: "Senior Fullstack Software Engineer specializing in Next.js, React, TypeScript, System Architecture, and Cloud Engineering.",
  keywords: ["Software Engineer", "Fullstack Developer", "Next.js", "React", "TypeScript", "Vinesh Rathod", "Portfolio"],
  authors: [{ name: "Vinesh Rathod" }],
  openGraph: {
    title: "Vinesh Rathod | Software Developer Portfolio 2.0",
    description: "High-performance web apps, distributed systems, and modern UI engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${firaCode.variable}`}>
      <body className="bg-[#030303] text-[#e4ded7] font-sans min-h-screen flex flex-col antialiased selection:bg-[#e4ded7] selection:text-[#030303]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

