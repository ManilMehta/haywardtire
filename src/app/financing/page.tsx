import Link from "next/link";

const steps = [
  {
    step: "1",
    title: "Apply Online or In-Store",
    description:
      "Fill out a quick application in minutes. No credit score check — approval is based on your income and bank history.",
  },
  {
    step: "2",
    title: "Get Approved",
    description:
      "Most applicants get approved instantly for $300 to $5,000 in lease-to-own shopping power.",
  },
  {
    step: "3",
    title: "Shop & Drive Away",
    description:
      "Choose the tires or service you need. Make a small initial payment and drive away same day.",
  },
  {
    step: "4",
    title: "Flexible Payments",
    description:
      "Set up a payment schedule that matches your payday. Own it when you're done, or return anytime.",
  },
];

const requirements = [
  "Active checking account with at least $750/month income",
  "3 months of income history with your current source",
  "Government-issued photo ID",
  "Social Security Number or Taxpayer ID",
  "Must be 18+ (19+ in AL and NE)",
];

const benefits = [
  {
    title: "No Credit Needed",
    description:
      "Bad credit, no credit, bankruptcy — doesn't matter. Approval is based on your income.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quick Approval",
    description:
      "Apply in minutes and get a decision fast. Most applicants are approved instantly.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Flexible Payments",
    description:
      "Choose a payment schedule based on how often you get paid — weekly, bi-weekly, or monthly.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "No Penalty Returns",
    description:
      "Changed your mind? Return the merchandise in good condition at any time without penalty.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644V14.652" />
      </svg>
    ),
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            Tire Financing in <span className="text-accent">Hayward, CA</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Need new tires but tight on cash? Hayward Tire partners with Acima
            to offer lease-to-own financing with no credit check required. Get
            approved in minutes and drive away same day.
          </p>
          <a
            href="https://apply.acima.com/?app_id=lo&location_guid=loca-7c1c3c41-4092-4e45-a587-ffc570211226&utm_medium=merchant&utm_source=web"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-base font-bold text-dark shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
          >
            Apply with Acima Now
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </section>

      {/* What is Acima */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
                Powered by Acima
              </div>
              <h2 className="text-3xl font-bold text-dark sm:text-4xl">
                What is Acima Leasing?
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Acima is a lease-to-own solution that lets you get the tires and
                auto services you need today, without requiring perfect credit.
                Acima purchases the merchandise from us and leases it to you with
                a clear path to ownership.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                You make affordable lease payments aligned with your payday while
                using the merchandise. The sooner you purchase it, the more you
                save. You can also return items at any time without penalty.
              </p>
              <a
                href="https://apply.acima.com/?app_id=lo&location_guid=loca-7c1c3c41-4092-4e45-a587-ffc570211226&utm_medium=merchant&utm_source=web"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Learn more at Acima.com
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-200 p-6 transition-all hover:border-accent hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-dark">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Get the tires you need in 4 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-black text-white shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-dark text-center mb-8">
              Basic Requirements
            </h2>
            <ul className="space-y-4">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 shrink-0 text-green-500 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Apply online in minutes or visit us in-store. We&apos;ll help you
            through the entire process.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apply.acima.com/?app_id=lo&location_guid=loca-7c1c3c41-4092-4e45-a587-ffc570211226&utm_medium=merchant&utm_source=web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-base font-bold text-dark shadow-lg transition-all hover:bg-accent-light"
            >
              Apply with Acima
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-10 py-4 text-base font-bold text-white transition-all hover:border-white/50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
