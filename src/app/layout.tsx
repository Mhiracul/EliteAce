import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add more meta tags as needed */}
        <meta name="theme-color" content="#ffffff" />
        {/* Include your custom metadata */}
        <title>EliteAndAce Properties</title>
        <meta
          name="description"
          content="To be a Leading Real Estate Agent in Sub Saharan Africa"
        />
        {/* Add more meta tags based on your requirements */}
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
