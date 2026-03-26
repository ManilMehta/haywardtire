import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tire Coupons & Deals",
  description:
    "Save on new tires, brake service, and flat tire repair at Hayward Tire in Hayward, CA. View our latest coupons and special offers. Visit us at 28534 Mission Blvd or call (510) 470-1162.",
  alternates: { canonical: "https://haywardtire.com/coupons" },
  openGraph: {
    title: "Tire Coupons & Deals | Hayward Tire – Hayward, CA",
    description:
      "Current tire deals, brake service discounts, and flat repair coupons at Hayward Tire on Mission Blvd.",
    url: "https://haywardtire.com/coupons",
  },
};

export default function CouponsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
