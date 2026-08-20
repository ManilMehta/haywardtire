import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haywardtire.com"),
  title: {
    default:
      "Hayward Tire | Tires, Brake Repair & Auto Service in Hayward, CA",
    template: "%s | Hayward Tire – Hayward, CA",
  },
  description:
    "Hayward Tire is your trusted tire shop on Mission Blvd in Hayward, CA. We offer new tires, flat tire repair, brake service, tire installation, wheel balancing, and Acima lease-to-own financing. Walk-ins welcome — call (510) 470-1162.",
  keywords: [
    "tires hayward ca",
    "tire shop hayward",
    "tire repair hayward",
    "brake repair hayward",
    "auto repair hayward ca",
    "new tires hayward",
    "tire installation hayward",
    "wheel alignment hayward",
    "flat tire repair hayward",
    "brake service hayward ca",
    "affordable tires hayward",
    "tire shop near me hayward",
    "mission blvd tire shop",
    "tire financing no credit check",
    "acima leasing tires hayward",
    "tire coupons hayward",
    "tire shop east bay",
    "tires near me 94544",
    "hayward tire shop",
    "buy tires hayward california",
  ],
  authors: [{ name: "Hayward Tire" }],
  creator: "Hayward Tire",
  publisher: "Hayward Tire",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hayward Tire",
    title: "Hayward Tire | Tires, Brake Repair & Auto Service in Hayward, CA",
    description:
      "Your trusted neighborhood tire shop in Hayward, CA. New tires, tire repair, brake service, and Acima financing available. Walk-ins welcome. Call (510) 470-1162.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Hayward Tire – Tire Shop in Hayward, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hayward Tire | Tires & Auto Service in Hayward, CA",
    description:
      "Affordable tires, expert repairs, brake service & Acima financing in Hayward, CA. Walk-ins welcome. (510) 470-1162.",
    images: ["/logo.png"],
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
    canonical: "https://haywardtire.com",
  },
  category: "Automotive",
};

function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TireShop",
    name: "Hayward Tire",
    image: "https://haywardtire.com/logo.png",
    url: "https://haywardtire.com",
    telephone: "+1-510-470-1162",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "28534 Mission Blvd",
      addressLocality: "Hayward",
      addressRegion: "CA",
      postalCode: "94544",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.6466,
      longitude: -122.0654,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "11",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Vrushali N." },
        datePublished: "2026-01-15",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "5 stars each — for easy walk-in service, low flat charge for tire puncture repair, and polite customer service.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Oakland N." },
        datePublished: "2026-02-10",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Same day service with the tire brand and size options I requested, installed and back on the road in less than 30 minutes.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Vanessa M." },
        datePublished: "2026-03-01",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Hayward Tire was able to replace and reinstall new tires in a timely manner, very last minute, for an affordable price!",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tire & Auto Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New Tire Sales & Installation",
            description:
              "Wide selection of quality tires for cars, trucks, and SUVs. Professional mounting, balancing, and alignment.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flat Tire Repair",
            description:
              "Fast flat tire and puncture repair. Walk-ins welcome, most repairs completed in under 30 minutes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brake Pad & Rotor Replacement",
            description:
              "Complete brake pad and rotor replacement service for all vehicle types.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wheel Balancing & Alignment",
            description:
              "Professional wheel balancing and alignment to extend tire life and improve fuel efficiency.",
          },
        },
      ],
    },
    paymentAccepted: "Cash, Credit Card, Acima Leasing",
    areaServed: [
      { "@type": "City", name: "Hayward" },
      { "@type": "City", name: "Union City" },
      { "@type": "City", name: "Fremont" },
      { "@type": "City", name: "San Leandro" },
      { "@type": "City", name: "Castro Valley" },
      { "@type": "City", name: "Newark" },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessJsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Hayward" />
        <meta name="geo.position" content="37.6466;-122.0654" />
        <meta name="ICBM" content="37.6466, -122.0654" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17586664860"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17586664860');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
