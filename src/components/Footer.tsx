import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Business Info */}
          <div itemScope itemType="https://schema.org/TireShop">
            <h3 className="text-lg font-bold text-white mb-4" itemProp="name">
              Hayward Tire
            </h3>
            <div className="space-y-2 text-sm">
              <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span>
                    <span itemProp="streetAddress">28534 Mission Blvd</span>,{" "}
                    <span itemProp="addressLocality">Hayward</span>,{" "}
                    <span itemProp="addressRegion">CA</span>{" "}
                    <span itemProp="postalCode">94544</span>
                  </span>
                </p>
              </address>
              <p className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <a href="tel:+15104701162" className="hover:text-white" itemProp="telephone">
                  (510) 470-1162
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Hours</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Monday</span>
                <span className="text-primary font-medium">Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday – Saturday</span>
                <span className="text-white">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">11:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>New Tire Sales</li>
              <li>Flat Tire Repair</li>
              <li>Brake Pad &amp; Rotor Replacement</li>
              <li>Tire Installation &amp; Mounting</li>
              <li>Wheel Balancing &amp; Alignment</li>
              <li>
                <Link href="/financing" className="text-accent hover:text-accent-light transition-colors">
                  Acima Financing
                </Link>
              </li>
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/coupons" className="hover:text-white transition-colors">
                  Coupons &amp; Deals
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-white transition-colors">
                  Financing Options
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Areas Served */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>
            Proudly serving <strong>Hayward</strong>, Union City, Fremont, San
            Leandro, Castro Valley, Newark, San Lorenzo &amp; the East Bay Area
          </p>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hayward Tire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
