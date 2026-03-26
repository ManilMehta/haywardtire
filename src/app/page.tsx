import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/components/LogoImage";

export const metadata: Metadata = {
  title:
    "Hayward Tire | Tires, Brake Repair & Auto Service in Hayward, CA",
  description:
    "Hayward Tire is Hayward's trusted tire shop at 28534 Mission Blvd. New tires for cars, trucks & SUVs, flat tire repair, brake pad replacement, tire installation, wheel balancing & Acima financing. Serving Hayward, Union City, Fremont & the East Bay. Call (510) 470-1162.",
  alternates: { canonical: "https://haywardtire.com" },
  openGraph: {
    title: "Hayward Tire | Tires, Brake Repair & Auto Service in Hayward, CA",
    description:
      "Your trusted neighborhood tire shop in Hayward, CA. New tires, tire repair, brake service, wheel alignment, and Acima financing. Walk-ins welcome.",
    url: "https://haywardtire.com",
  },
};

const services = [
  {
    title: "New Tires",
    description:
      "Wide selection of quality car, truck, and SUV tires from top brands at competitive prices. Find the right tires for your vehicle in Hayward, CA.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="3" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="21" />
        <line x1="3" y1="12" x2="8" y2="12" />
        <line x1="16" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    title: "Tire Repair",
    description:
      "Fast flat tire repairs and puncture fixes in Hayward. Walk-ins welcome — most tire repairs done in under 30 minutes.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.194-.14 1.743" />
      </svg>
    ),
  },
  {
    title: "Brake Service",
    description:
      "Complete brake pad and rotor replacement in Hayward, CA. Keep your vehicle safe with our expert brake repair service.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Tire Installation",
    description:
      "Professional tire mounting, wheel balancing, and alignment services for all tire sizes at our Hayward tire shop.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
];

const reviews = [
  {
    name: "Vrushali N.",
    rating: 5,
    text: "5 stars each — for easy walk-in service, low flat charge for tire puncture repair, what a value, and polite customer service. This location has been serving customers for decades and they still do a great job!",
    date: "Recent",
  },
  {
    name: "Steffie F.",
    rating: 5,
    text: "We had to come in unexpectedly after running over a screw and ending up with a completely flat tire. It was late on a Saturday when most tire shops are about to close, so we were really stressed. They got us taken care of quickly!",
    date: "Recent",
  },
  {
    name: "Oakland N.",
    rating: 5,
    text: "Responded immediately, same day service with the tire brand and size options I requested, installed on arrival and we were back on the road in less than 30 minutes.",
    date: "Recent",
  },
  {
    name: "Vanessa M.",
    rating: 5,
    text: "Hayward Tire was able to replace and reinstall new tires in a timely manner, very last minute, for an affordable price!",
    date: "Recent",
  },
  {
    name: "Mary A.",
    rating: 5,
    text: "I needed to get my brake pads and rotors changed, and I knew it was going to be pricey. Hayward Tire gave me a fair quote and did excellent work. Highly recommend!",
    date: "Recent",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-accent" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark overflow-hidden" aria-label="Hayward Tire hero">
        <div className="absolute inset-0 bg-linear-to-br from-dark via-dark-light to-dark opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Open Tue–Sat 9AM–6PM, Sun 11AM–4PM
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Trusted
                <span className="text-primary"> Tire Shop</span>
                <br />
                in Hayward, CA
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400 max-w-xl">
                Quality tires, expert flat tire repairs, and affordable brake
                service on Mission Blvd in Hayward. Walk-ins welcome — most
                services done in under 30 minutes. Proudly serving Hayward,
                Union City, Fremont, San Leandro, and the entire East Bay.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+15104701162"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
                  aria-label="Call Hayward Tire at (510) 470-1162"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Now
                </a>
                <Link
                  href="/coupons"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent px-8 py-4 text-base font-bold text-accent transition-all hover:bg-accent hover:text-dark"
                >
                  View Coupons
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/20 to-accent/20 blur-3xl" />
                <div className="relative flex items-center justify-center h-full">
                  <LogoImage
                    width={400}
                    height={400}
                    className="rounded-2xl object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20" aria-label="Tire and auto services in Hayward">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              Tire &amp; Auto Services in Hayward, CA
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              From new tire sales to brake repair — everything your vehicle
              needs, all in one place on Mission Blvd
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-gray-200 p-8 text-center transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-dark">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info Banner */}
      <section className="bg-primary py-12" aria-label="Hayward Tire location and hours">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 text-center text-white sm:grid-cols-3">
            <address className="not-italic">
              <svg className="mx-auto h-10 w-10 mb-3 opacity-80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="text-xl font-bold">Visit Us</h3>
              <p className="mt-1 text-white/80">
                28534 Mission Blvd
                <br />
                Hayward, CA 94544
              </p>
            </address>
            <div>
              <svg className="mx-auto h-10 w-10 mb-3 opacity-80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold">Hours</h3>
              <p className="mt-1 text-white/80">
                Tue–Sat: 9:00 AM – 6:00 PM
                <br />
                Sun: 11:00 AM – 4:00 PM | Mon: Closed
              </p>
            </div>
            <div>
              <svg className="mx-auto h-10 w-10 mb-3 opacity-80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className="mt-1 text-white/80">
                <a href="tel:+15104701162" className="hover:underline">
                  (510) 470-1162
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#F9FAFB] py-20" aria-label="Customer reviews for Hayward Tire">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              What Our Hayward Customers Say
            </h2>
            <div className="mt-3 flex items-center justify-center gap-2">
              <StarRating rating={5} />
              <span className="text-lg text-gray-500">
                4.7 / 5 based on customer reviews
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review, idx) => (
              <article
                key={idx}
                className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100"
                itemScope
                itemType="https://schema.org/Review"
              >
                <StarRating rating={review.rating} />
                <p className="mt-4 text-gray-600 leading-relaxed text-sm" itemProp="reviewBody">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-dark" itemProp="author">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {reviews.slice(3).map((review, idx) => (
              <article
                key={idx}
                className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100"
                itemScope
                itemType="https://schema.org/Review"
              >
                <StarRating rating={review.rating} />
                <p className="mt-4 text-gray-600 leading-relaxed text-sm" itemProp="reviewBody">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-dark" itemProp="author">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About / Welcome Section */}
      <section className="bg-white py-20" aria-label="About Hayward Tire">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-dark sm:text-4xl">
                Welcome to Hayward Tire
              </h2>
              <div className="mt-6 text-gray-600 leading-relaxed space-y-4">
                <p>
                  Thank you for choosing Hayward Tire — your neighborhood tire
                  shop at 28534 Mission Blvd in Hayward, California. We&apos;ve
                  been proudly serving the Hayward community and surrounding
                  East Bay cities including Union City, Fremont, San Leandro,
                  Castro Valley, and Newark with quality tires, expert auto
                  repair, and honest service.
                </p>
                <p>
                  Looking for new tires in Hayward, CA? We carry a wide
                  selection of passenger car tires, SUV tires, and light truck
                  tires at affordable prices. Need a flat tire fixed? We offer
                  fast walk-in tire repair — most punctures are patched and
                  ready to go in under 30 minutes.
                </p>
                <p>
                  We also specialize in brake pad and rotor replacement, tire
                  installation, wheel balancing, and alignment services. Plus,
                  with our Acima lease-to-own financing, you can get the tires
                  and services you need today with no credit check required.
                  Check out our{" "}
                  <Link href="/coupons" className="text-primary font-semibold hover:underline">
                    coupons page
                  </Link>{" "}
                  for the latest deals, or visit our{" "}
                  <Link href="/financing" className="text-primary font-semibold hover:underline">
                    financing page
                  </Link>{" "}
                  to apply with Acima.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl h-[500px]">
              <Image
                src="/tire.png"
                alt="Custom wheels and tires at Hayward Tire shop in Hayward, CA"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark py-16" aria-label="Contact Hayward Tire">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need New Tires in Hayward? We&apos;ve Got You Covered.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Stop by our tire shop on Mission Blvd today or give us a call.
            Walk-ins are always welcome!
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+15104701162"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark"
            >
              Call (510) 470-1162
            </a>
            <Link
              href="/financing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-dark shadow-lg transition-all hover:bg-accent-light"
            >
              Explore Financing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
