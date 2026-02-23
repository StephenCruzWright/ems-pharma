import Image from 'next/image';
import FAQ from '@/components/faq';
import {
  capabilities,
  certifications,
  faqs,
  metrics,
  navLinks,
  therapeuticAreas
} from '@/components/site-data';

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-brand-800">
            EMS Pharma
          </a>
          <nav aria-label="Primary" className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-slate-600 hover:text-brand-600">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Request a meeting
          </a>
        </div>
      </header>

      <section className="section-shell grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800">
            Pharmaceutical innovation platform
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Build trust-led healthcare experiences with a modern EMS Pharma web foundation.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Use this polished, enterprise-ready website template to showcase your portfolio, quality standards,
            manufacturing capabilities, and patient-centered impact.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#about" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800">
              Explore the platform
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-brand-500 hover:text-brand-600"
            >
              Get in touch
            </a>
          </div>
          <dl className="grid gap-4 pt-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <dt className="text-sm text-slate-500">{metric.label}</dt>
                <dd className="text-2xl font-bold text-brand-800">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1100&q=80"
            alt="Creative Commons-style sample photo of a pharmaceutical scientist analyzing lab samples in a modern cleanroom"
            width={900}
            height={1100}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About EMS Pharma</h2>
            <p className="mt-4 text-slate-600">
              This section is intentionally structured for your leadership message, mission narrative, and strategic
              differentiators. Replace placeholders with company history, market footprint, and growth milestones.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Clear governance and corporate responsibility story block</li>
              <li>• Dedicated sustainability and ESG positioning section</li>
              <li>• Investor-ready highlights with modular KPI cards</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((certification) => (
              <div key={certification} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Certification</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{certification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="therapeutic-areas" className="section-shell py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Therapeutic Areas</h2>
            <p className="mt-3 text-slate-600">Highlight your therapeutic focus areas and associated product families.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {therapeuticAreas.map((area) => (
            <article key={area} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{area}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Add pipeline products, approved portfolio details, and clinical relevance tailored to your audience.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="border-y border-slate-200 bg-white py-20">
        <div className="section-shell">
          <h2 className="text-3xl font-bold tracking-tight">Core Capabilities</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quality" className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1100&q=80"
              alt="Creative Commons-style sample image of automated pharmaceutical packaging line for quality assurance"
              width={1000}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Quality & Compliance</h2>
            <p className="mt-4 text-slate-600">
              Present your quality governance model, audit readiness, pharmacovigilance approach, and data integrity
              controls in this section.
            </p>
            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">Recommended additions</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-800">
                <li>• Downloadable quality policy and code of conduct</li>
                <li>• Manufacturing site map and inspection history</li>
                <li>• Patient safety reporting workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-slate-600">
              Structured FAQ component for procurement teams, healthcare partners, and investors.
            </p>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <section id="contact" className="section-shell py-20">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-800 to-brand-600 p-10 text-white">
          <h2 className="text-3xl font-bold tracking-tight">Ready to personalize this website?</h2>
          <p className="mt-3 max-w-3xl text-white/90">
            Replace placeholder text with your corporate narrative, brand assets, and product information. The structure
            is designed to scale as your digital presence grows.
          </p>
          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full name"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/70"
            />
            <input
              type="email"
              placeholder="Work email"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/70"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/70 sm:col-span-2"
            />
            <button
              type="button"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 sm:col-span-2 sm:w-fit"
            >
              Submit inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="section-shell flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EMS Pharma. All rights reserved.</p>
          <p>Built with Next.js and optimized for Vercel deployment.</p>
        </div>
      </footer>
    </main>
  );
}
