import type { Metadata } from "next";
import { Roboto, Quicksand } from "next/font/google";
import { Suspense } from "react";

import "./globals.css";
import { FacebookPixelEvents } from "./components/facebookPixelEvents";

export const metadata: Metadata = {
  title: "WeightHerba Resmi - Website Weight Herba Resmi",
  description: "Website Weight Herba Resmi",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${quicksand.variable}`}>
      <body>
        <FacebookPixelEvents />
        {children}
      </body>
    </html>
  );
}
