import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google"; // CHANGED: Elegant Fonts
import "./globals.css";

// 1. Elegant Serif for Headlines
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// 2. Minimal Sans for Body
const lato = Lato({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hipcastle | Wear Your Ambition",
  description: "Growth deserves comfort. Built for builders.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-white text-stone-900 antialiased selection:bg-stone-200 selection:text-black">
        {children}
      </body>
    </html>
  );
}