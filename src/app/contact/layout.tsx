import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Hayward Tire Shop",
  description:
    "Contact Hayward Tire at (510) 470-1162 or visit us at 28534 Mission Blvd, Hayward, CA 94544. Get directions, request a tire quote, or schedule brake service. Open Mon–Sat 9AM–6PM, Sun 11AM–4PM.",
  alternates: { canonical: "https://haywardtire.com/contact" },
  openGraph: {
    title: "Contact Hayward Tire | Tire Shop in Hayward, CA",
    description:
      "Visit our tire shop at 28534 Mission Blvd, Hayward, CA 94544 or call (510) 470-1162 for tire quotes, brake service, and more.",
    url: "https://haywardtire.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
