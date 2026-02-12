import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Silov Solutions | Power Electronics & Renewable Energy Systems",
  description:
    "Silov Solutions designs and builds advanced power electronics, renewable energy systems, and EV ecosystem solutions for engineering and B2B partners in India and worldwide.",
  keywords: [
    "power electronics",
    "renewable energy",
    "EV charging",
    "solar PV emulator",
    "wind energy",
    "grid sync inverter",
    "smart data logger",
    "engineering solutions",
  ],
  authors: [{ name: "Silov Solutions" }],
  creator: "Silov Solutions",
  publisher: "Silov Solutions",
  metadataBase: new URL("https://silovsolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://silovsolutions.com",
    title: "Silov Solutions | Power Electronics & Renewable Energy Systems",
    description:
      "Power electronics, grid-tied inverters, solar and wind emulators, smart data loggers, and EV charging ecosystem solutions for global engineering and B2B partners.",
    siteName: "Silov Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silov Solutions | Power Electronics & Renewable Energy Systems",
    description:
      "Power electronics, renewable energy systems, and EV ecosystem solutions for engineering and B2B customers.",
  },
  alternates: {
    canonical: "https://silovsolutions.com",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-icon-precomposed.png",
      },
    ],
  },
  manifest: "/manifest.json",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Silov Solutions Pvt. Ltd.",
    url: "https://silovsolutions.com",
    logo:
      "https://silovsolutions.com/Silovhome/screenshot-2025-02-06-at-11.52.04a-am-AwvD2bRZelspa1GG.avif",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Technology Business Incubation Unit (TBIU), 2nd Floor, Synergy Building, IIT Delhi",
      addressLocality: "New Delhi",
      postalCode: "110016",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-85273-32502",
        contactType: "sales",
        email: "silov.solutions@gmail.com",
        areaServed: ["IN", "US", "EU"],
        availableLanguage: ["en"],
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
