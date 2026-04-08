import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Terminal — SSH Terminal for iPhone",
  description:
    "AI Terminal is a powerful SSH terminal app for iPhone. Connect to your Mac from your pocket. Full ANSI color support, QR code scanner, command snippets, and multiple themes. Zero data collection.",
  keywords: [
    "SSH terminal iPhone",
    "iOS SSH client",
    "terminal app iOS",
    "SSH client iPhone",
    "Mac remote terminal",
    "iPhone SSH app",
    "AI Terminal",
    "mobile terminal emulator",
  ],
  authors: [{ name: "AI Terminal" }],
  creator: "AI Terminal",
  publisher: "AI Terminal",
  openGraph: {
    title: "AI Terminal — SSH Terminal for iPhone",
    description:
      "Connect to your Mac from your pocket. Full SSH terminal emulator with ANSI colors, QR scanner, command snippets, and zero data collection.",
    url: "https://aiterminal.app",
    siteName: "AI Terminal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Terminal — SSH Terminal for iPhone",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Terminal — SSH Terminal for iPhone",
    description:
      "Connect to your Mac from your pocket. Full SSH terminal with ANSI colors, QR scanner, zero data collection.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aiterminal.app",
  },
  other: {
    "apple-itunes-app": "app-id=0000000000",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Terminal",
  description:
    "AI Terminal is a powerful SSH terminal app for iPhone. Connect to your Mac from your pocket with full ANSI color support, QR code scanner, command snippets, and zero data collection.",
  operatingSystem: "iOS 17.0+",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Developer Tools",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "AI Terminal",
    url: "https://aiterminal.app",
  },
  screenshot: "https://aiterminal.app/og-image.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#E0E0E0] font-mono antialiased">
        <div className="crt-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
