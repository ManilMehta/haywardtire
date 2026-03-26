import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tire Financing – Acima Lease-to-Own",
  description:
    "Get the tires you need now with Acima lease-to-own financing at Hayward Tire. No credit check required, instant approval, flexible payments. Apply online or in-store at 28534 Mission Blvd, Hayward, CA.",
  keywords: [
    "tire financing hayward",
    "acima leasing tires",
    "no credit check tires",
    "lease to own tires hayward",
    "tire financing no credit",
    "acima hayward tire",
    "buy tires no credit",
    "tire payment plan hayward ca",
  ],
  alternates: { canonical: "https://haywardtire.com/financing" },
  openGraph: {
    title: "Tire Financing – No Credit Check | Hayward Tire",
    description:
      "Acima lease-to-own financing for tires at Hayward Tire. No credit needed, instant approval, flexible payments. Apply now.",
    url: "https://haywardtire.com/financing",
  },
};

export default function FinancingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
