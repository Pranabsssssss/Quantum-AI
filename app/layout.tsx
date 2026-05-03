import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum AI",
  description: "Quantum AI by Team Quantum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/q-logo.svg" />
        <title>Quantum AI</title>
        <meta name="description" content="Talk to your personal AI assistant. Quantum AI by Team Quantum." />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Quantum AI - Your Smart Assistant" />
        <meta property="og:description" content="Talk to your personal AI assistant. Quantum AI by Team Quantum." />
        <meta property="og:image" content="/q-logo.svg" />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
      <link rel="canonical" href="/" />


        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quantum AI - Your Smart Assistant" />
        <meta name="twitter:description" content="Talk to your personal AI assistant. Quantum AI by Team Quantum." />
        <meta name="twitter:image" content="/q-logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between items-center p-4 border-b">
          <h1 className="text-lg font-bold">Quantum AI</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
