import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Inter,
  Libre_Baskerville,
  Oswald,
} from "next/font/google";
import "./globals.css";

const displayFont = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const latexFont = Libre_Baskerville({
  variable: "--font-latex",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "TEDxDKU | Disorders of Magnitude",
  description:
    "TEDxDKU annual conference homepage for Disorders of Magnitude.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${latexFont.variable} ${monoFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
