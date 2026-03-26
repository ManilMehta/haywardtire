"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            Contact <span className="text-primary">Hayward Tire</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question, need a tire quote, or want to schedule brake
            service? Get in touch with our Hayward, CA tire shop — we&apos;re
            here to help.
          </p>
        </div>
      </section>

      <section className="bg-white py-16" aria-label="Contact form and business information">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-green-500 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold text-green-800">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-green-700">
                    Thanks for reaching out. We&apos;ll get back to you as soon as
                    possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="(510) 555-0123"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell us what you need — tire size, service type, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-dark mb-6">
                  Visit Our Hayward Tire Shop
                </h2>
                <div className="space-y-5" itemScope itemType="https://schema.org/TireShop">
                  <meta itemProp="name" content="Hayward Tire" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <h3 className="font-semibold text-dark">Address</h3>
                      <p className="text-gray-500 text-sm">
                        <span itemProp="streetAddress">28534 Mission Blvd</span>
                        <br />
                        <span itemProp="addressLocality">Hayward</span>,{" "}
                        <span itemProp="addressRegion">CA</span>{" "}
                        <span itemProp="postalCode">94544</span>
                      </p>
                      <a
                        href="https://www.google.com/maps/place/28534+Mission+Blvd,+Hayward,+CA+94544"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm font-medium text-primary hover:underline"
                      >
                        Get Directions &rarr;
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">Phone</h3>
                      <a
                        href="tel:+15104701162"
                        className="text-gray-500 text-sm hover:text-primary"
                        itemProp="telephone"
                      >
                        (510) 470-1162
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">Hours</h3>
                      <div className="text-sm text-gray-500 space-y-0.5">
                        <p className="text-primary font-medium">
                          Monday: Closed
                        </p>
                        <p>Tuesday – Saturday: 9:00 AM – 6:00 PM</p>
                        <p>Sunday: 11:00 AM – 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2!2d-122.0654!3d37.6466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjg1MzQgTWlzc2lvbiBCbHZkLCBIYXl3YXJkLCBDQSA5NDU0NA!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hayward Tire location at 28534 Mission Blvd, Hayward, CA 94544"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="bg-[#F9FAFB] py-12" aria-label="Service area">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">Areas We Serve</h2>
          <p className="text-gray-500 leading-relaxed">
            Hayward Tire proudly serves customers from across the East Bay Area,
            including <strong>Hayward</strong>, <strong>Union City</strong>,{" "}
            <strong>Fremont</strong>, <strong>San Leandro</strong>,{" "}
            <strong>Castro Valley</strong>, <strong>Newark</strong>,{" "}
            <strong>San Lorenzo</strong>, and <strong>Milpitas</strong>. Whether
            you need new tires, a flat repair, brake service, or tire financing,
            our tire shop on Mission Blvd is easy to reach from anywhere in the
            94544, 94541, 94536, 94538, and 94587 zip codes.
          </p>
        </div>
      </section>
    </>
  );
}
