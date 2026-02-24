"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import FAQ from "@/components/faq";
import {
  capabilities,
  certifications,
  faqs,
  metrics,
  navLinks,
  therapeuticAreas,
} from "@/components/site-data";

type Locale = "en" | "pt";

type Copy = {
  nav: { about: string; partners: string; contact: string };
  cta: { primary: string; secondary: string };
  hero: { badge: string; title: string; subtitle: string };
  aboutTitle: string;
  presentationTitle: string;
  presentationParagraphs: string[];
  partnersTitle: string;
  partners: string[];
  warehouse: string;
  faqTitle: string;
  faqIntro: string;
  faqs: { question: string; answer: string }[];
  mapTitle: string;
  mapIntro: string;
  addressLabel: string;
  phoneLabel: string;
};

const copy: Record<Locale, Copy> = {
  en: {
    nav: { about: "About", partners: "Brands", contact: "Contact" },
    cta: { primary: "Learn more", secondary: "Contact us" },
    hero: {
      badge: "Healthcare distribution in Mozambique",
      title:
        "EMS Pharma delivers trusted health products with quality and accessibility.",
      subtitle:
        "We import, export, store, commercialize, and distribute healthcare products through reliable partnerships and local inventory in Maputo.",
    },
    aboutTitle: "About EMS Property",
    presentationTitle: "Presentation Letter",
    presentationParagraphs: [
      "EMS Property is a company focused on import, export, storage, commercialization, and distribution of products in the healthcare sector and related activities.",
      "We are expanding our scope with the immediate objective of offering the Mozambican population a better range of products with quality and affordable prices.",
    ],
    partnersTitle: "Prestigious brands we represent",
    partners: [
      "AMS — First Aid Kits",
      "STAR BALM — Medicinal balms",
      "VARITEKS — Orthopedic products",
      "MOSQUITNO — Repellent range",
      "ESBELT — Support belts and shape wear",
      "NOPIC — Insect repellent for clothes and fabrics",
      "INCOLABS — Karvol range and sun protection",
      "MEDactive — Aerosol, blood pressure monitor, and thermometer",
      "CHICCO — Childcare",
      "INTERAPOTHEK — Dermocosmetics",
      "BENNETTS — Baby care and more",
    ],
    warehouse:
      "EMS Property has a product range available in our warehouse in Maputo, allowing us to respond quickly to customer needs.",
    faqTitle: "Frequently Asked Questions",
    faqIntro: "Quick answers for customers and partners.",
    faqs: [
      {
        question: "Do you support nationwide distribution in Mozambique?",
        answer: "Yes.",
      },
      {
        question: "Do you work with international manufacturers?",
        answer:
          "Yes. We have commercial partnerships with European and South African manufacturers following strict quality standards.",
      },
      {
        question: "Can I request product and pricing information?",
        answer:
          "Yes. Contact us by phone or visit us at our Maputo office for support.",
      },
    ],
    mapTitle: "Our location",
    mapIntro: "Visit us or call our team.",
    addressLabel: "Address",
    phoneLabel: "Cell",
  },
  pt: {
    nav: { about: "Sobre", partners: "Marcas", contact: "Contacto" },
    cta: { primary: "Saiba mais", secondary: "Fale connosco" },
    hero: {
      badge: "Distribuição de saúde em Moçambique",
      title:
        "A EMS Pharma entrega produtos de saúde com confiança, qualidade e acessibilidade.",
      subtitle:
        "Importamos, exportamos, armazenamos, comercializamos e distribuímos produtos na área da saúde com parcerias sólidas e stock local em Maputo.",
    },
    aboutTitle: "Sobre a EMS Property",
    presentationTitle: "Carta de Apresentação",
    presentationParagraphs: [
      "A EMS Property é uma empresa que tem por objecto a importação, exportação, armazenagem, comercialização e distribuição de produtos na área da saúde e demais actividades conexas.",
      "Estamos alargando o nosso âmbito de intervenção com o objectivo imediato de oferecer a população moçambicana uma melhor oferta de produtos com qualidade e preços acessíveis.",
    ],
    partnersTitle: "Marcas de prestígio que representamos",
    partners: [
      "AMS — Kits de Primeiros Socorros",
      "STAR BALM — Gama de Bálsamos Medicinais",
      "VARITEKS — Produtos Ortopédicos",
      "MOSQUITNO — Gama de Repelentes",
      "ESBELT — Cintas de Contenção e Shape Wear",
      "NOPIC — Repelente de Insectos para Roupas e Tecidos",
      "INCOLABS — Gama Karvol e Protectores Solares",
      "MEDactive — Gama Aerossol, Tensiómetro e Termómetro",
      "CHICCO — Puericultura",
      "INTERAPOTHEK — Dermocosmética",
      "BENNETTS — Cuidados de bebé e outros",
    ],
    warehouse:
      "A EMS Property tem ao seu dispor uma gama de produtos num armazém, localizado em Maputo, para de imediato responder às necessidades dos nossos clientes.",
    faqTitle: "Perguntas Frequentes",
    faqIntro: "Respostas rápidas para clientes e parceiros.",
    faqs: [
      {
        question: "Fazem distribuição a nível nacional em Moçambique?",
        answer: "Sim.",
      },
      {
        question: "Trabalham com fabricantes internacionais?",
        answer:
          "Sim. Temos parcerias comerciais com fabricantes Europeus e Sul-Africanos que seguem padrões rigorosos de qualidade.",
      },
      {
        question: "Posso solicitar informação sobre produtos e preços?",
        answer:
          "Sim. Contacte-nos por telefone ou visite o nosso escritório em Maputo.",
      },
    ],
    mapTitle: "A nossa localização",
    mapIntro: "Visite-nos ou ligue para a nossa equipa.",
    addressLabel: "Morada",
    phoneLabel: "Celular",
  },
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const content = useMemo(() => copy[locale], [locale]);

  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a
            href="#"
            className="flex items-center gap-3 text-lg font-bold tracking-tight text-brand-800"
          >
            <Image
              src="/logo.webp"
              alt="EMS Pharma logo"
              width={32}
              height={32}
              priority
            />
            <span>EMS Pharma</span>
          </a>
          <nav aria-label="Primary" className="hidden gap-6 md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-brand-600"
            >
              {content.nav.about}
            </a>
            <a
              href="#partners"
              className="text-sm font-medium text-slate-600 hover:text-brand-600"
            >
              {content.nav.partners}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-brand-600"
            >
              {content.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                locale === "en"
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-slate-300 text-slate-600"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLocale("pt")}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                locale === "pt"
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-slate-300 text-slate-600"
              }`}
            >
              Português
            </button>
          </div>
        </div>
      </header>

      <section className="section-shell grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800">
            {content.hero.badge}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {content.hero.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#about"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800"
            >
              {content.cta.primary}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-brand-500 hover:text-brand-600"
            >
              {content.cta.secondary}
            </a>
          </div>
          <dl className="grid gap-4 pt-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <dt className="text-sm text-slate-500">{metric.label}</dt>
                <dd className="text-2xl font-bold text-brand-800">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <Image
            src="/logo.webp"
            alt="EMS Pharma logo"
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
            <h2 className="text-3xl font-bold tracking-tight">
              About EMS Pharma
            </h2>
            <p className="mt-4 text-slate-600">
              This section is intentionally structured for your leadership
              message, mission narrative, and strategic differentiators. Replace
              placeholders with company history, market footprint, and growth
              milestones.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Clear governance and corporate responsibility story block</li>
              <li>• Dedicated sustainability and ESG positioning section</li>
              <li>• Investor-ready highlights with modular KPI cards</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((certification) => (
              <div
                key={certification}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-sm text-slate-500">Certification</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {certification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white py-20">
        <div className="section-shell space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            {content.aboutTitle}
          </h2>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-2xl font-semibold text-slate-900">
              {content.presentationTitle}
            </h3>
            <div className="mt-4 space-y-4 text-slate-700">
              {content.presentationParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="partners" className="section-shell py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          {content.partnersTitle}
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {content.partners.map((brand) => (
            <article
              key={brand}
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm"
            >
              {brand}
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-brand-100 bg-brand-50 p-5 text-brand-900">
          {content.warehouse}
        </p>
      </section>

      <section id="therapeutic-areas" className="section-shell py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Therapeutic Areas
            </h2>
            <p className="mt-3 text-slate-600">
              Highlight your therapeutic focus areas and associated product
              families.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {therapeuticAreas.map((area) => (
            <article
              key={area}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{area}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Add pipeline products, approved portfolio details, and clinical
                relevance tailored to your audience.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="capabilities"
        className="border-y border-slate-200 bg-white py-20"
      >
        <div className="section-shell">
          <h2 className="text-3xl font-bold tracking-tight">
            Core Capabilities
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
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
            <h2 className="text-3xl font-bold tracking-tight">
              Quality & Compliance
            </h2>
            <p className="mt-4 text-slate-600">
              Present your quality governance model, audit readiness,
              pharmacovigilance approach, and data integrity controls in this
              section.
            </p>
            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">
                Recommended additions
              </p>
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
            <h2 className="text-3xl font-bold tracking-tight">
              {content.faqTitle}
            </h2>
            <p className="mt-4 text-slate-600">{content.faqIntro}</p>
          </div>
          <FAQ items={content.faqs} />
        </div>
      </section>

      <section id="contact" className="section-shell py-20">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-800 to-brand-600 p-10 text-white">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to personalize this website?
          </h2>
          <p className="mt-3 max-w-3xl text-white/90">
            Replace placeholder text with your corporate narrative, brand
            assets, and product information. The structure is designed to scale
            as your digital presence grows.
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
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {content.mapTitle}
            </h2>
            <p className="mt-3 text-slate-600">{content.mapIntro}</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p>
                <span className="font-semibold">{content.phoneLabel}:</span>{" "}
                +258 84 305 2440
              </p>
              <p>
                <span className="font-semibold">{content.addressLabel}:</span>{" "}
                Av. 25 de Setembro nr 2400 R/C, Maputo, Moçambique
              </p>
            </div>
          </div>
          <iframe
            title="EMS Property Maputo location"
            src="https://www.google.com/maps?q=Av.+25+de+Setembro+2400,+Maputo,+Mozambique&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-2xl border border-slate-200"
          />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="section-shell flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EMS Pharma. All rights reserved.</p>
          <p>Call us on +258 84 305 2440 to learn more</p>
        </div>
      </footer>
    </main>
  );
}
