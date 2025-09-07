import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teapot Studio",
  description: "We craft simple, affordable assets to empower indie devs. ",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
