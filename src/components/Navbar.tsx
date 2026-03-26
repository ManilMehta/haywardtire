"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/coupons", label: "Coupons" },
  { href: "/financing", label: "Financing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-dark sticky top-0 z-50 shadow-lg">
      <div className="mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex h-20 sm:h-28 lg:h-48 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 sm:gap-5 lg:gap-8 shrink-0">
            <Image
              src="/logo.png"
              alt="Hayward Tire"
              width={160}
              height={160}
              className="rounded h-12 w-12 sm:h-20 sm:w-20 lg:h-[160px] lg:w-[160px] object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-2xl lg:text-4xl font-bold text-white tracking-wide">
                HAYWARD TIRE
              </span>
              <span className="text-[10px] sm:text-xs lg:text-base text-accent tracking-widest uppercase hidden sm:block">
                Quality Service Since Day One
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-8 py-4 rounded-lg text-lg font-semibold transition-colors ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-gray-300 hover:text-white hover:bg-dark-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15104701162"
              className="ml-8 flex items-center gap-3 rounded-full bg-primary px-12 py-4 text-lg font-bold text-white transition-colors hover:bg-primary-dark"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              (510) 470-1162
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden rounded-md p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7 sm:h-9 sm:w-9"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-dark-light bg-dark pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-4 text-base font-semibold transition-colors ${
                pathname === link.href
                  ? "bg-primary text-white"
                  : "text-gray-300 hover:text-white hover:bg-dark-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+15104701162"
            className="mx-4 mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Call (510) 470-1162
          </a>
        </div>
      )}
    </nav>
  );
}
