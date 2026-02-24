"use client";

import React from "react";
import { useMemo, useState } from "react";
import Image from "next/image";
import FAQ from "@/components/faq";

type Locale = "en" | "pt";

type Copy = {
  nav: { about: string; partners: string; contact: string };
  cta: { primary: string; secondary: string };
  hero: { badge: string; title: string; subtitle: string };
  metrics: { value: string; label: string }[];
  aboutTitle: string;
  presentationTitle: string;
  presentationParagraphs: string[];
  objectivesTitle: string;
  objectives: string[];
  missionTitle: string;
  mission: string;
  visionTitle: string;
  vision: string;
  partnersTitle: string;
  partners: string[];
  warehouse: string;
  therapeuticTitle: string;
  therapeuticIntro: string;
  therapeuticAreas: string[];
  capabilitiesTitle: string;
  capabilities: { title: string; description: string }[];
  qualityTitle: string;
  qualityIntro: string;
  qualityHighlightsTitle: string;
  qualityHighlights: string[];
  faqTitle: string;
  faqIntro: string;
  faqs: { question: string; answer: string }[];
  contactTitle: string;
  contactIntro: string;
  form: { fullName: string; email: string; message: string; submit: string };
  mapTitle: string;
  mapIntro: string;
  addressLabel: string;
  emailLabel: string;
  phoneLabel: string;
  footer: string;
};

const copy: Record<Locale, Copy> = {
  en: {
    nav: { about: "About", partners: "Brands", contact: "Contact" },
    cta: { primary: "Learn more", secondary: "Contact us" },
    hero: {
      badge: "Pharmaceutical distribution in Mozambique",
      title:
        "EMS PHARMA LDA has delivered trusted pharmaceutical products since 2012",
      subtitle:
        "We distribute pharmaceuticals, cosmetics, consumables, hygiene, and cleaning products to pharmacies, hospitals, and clinics in Maputo, Beira, Nampula, Inhambane, Pemba, and Tete.",
    },
    metrics: [
      { value: "2012", label: "Operating since" },
      { value: "2", label: "Shareholders" },
      { value: "20+", label: "Years management market experience" },
      { value: "6", label: "Mozambican provinces actively served" },
    ],
    aboutTitle: "About EMS PHARMA LDA",
    presentationTitle: "Presentation Letter",
    presentationParagraphs: [
      "Introducing EMS PHARMA LDA, a company with two shareholders and over a decade of service in healthcare distribution.",
      "Our management team has more than 20 years of experience in the Mozambican pharmaceutical market and maintains strong relationships with procurement managers across major pharmacies, clinics, and hospitals.",
      "With this market knowledge and network, we are confident in our ability to drive strong, sustainable growth in product sales for our partners.",
    ],
    objectivesTitle: "Objectives",
    objectives: [
      "Perseverance",
      "Quality",
      "Total satisfaction of internal and external clients",
      "Growth",
      "Profitability",
      "Administering the present while building a better future",
      "Recognition of collaborators and all stakeholders",
      "Strategic projection",
    ],
    missionTitle: "Mission",
    mission:
      "To deliver logistics and distribution excellence with speed, reliability, and service quality, while maintaining lasting relationships with clients and collaborators based on ethics, trust, mutual respect, and professionalism.",
    visionTitle: "Vision",
    vision:
      "To maintain leadership in Mozambique and expand into new Southern African markets, strengthening EMS PHARMA's image and presence with clients and suppliers.",
    partnersTitle: "Key supplier and brand relationships",
    partners: [
      "South Africa: Incolabs, Incobrands, Bennetts, Nutriwomen, Nativa, GM Pharmaceuticals",
      "Portugal: Esbelt, Targetway Pharmaceuticals, Tecnimede",
      "Spain: Medel",
      "Quality-focused brands currently commercialized: Esbelt, Star Balm, Bennetts, Nutriwomen, PIC, Chicco, Medel",
    ],
    warehouse:
      "Our distribution footprint supports reliable supply to pharmacies, hospitals, and clinics across major Mozambican cities.",
    therapeuticTitle: "Product Categories",
    therapeuticIntro:
      "Our portfolio covers essential healthcare and personal care segments required by retail and institutional buyers.",
    therapeuticAreas: [
      "Pharmaceutical products",
      "Cosmetic products",
      "Medical consumables",
      "Hygiene products",
      "Cleaning products",
      "Specialized partner-brand products",
    ],
    capabilitiesTitle: "Core Capabilities",
    capabilities: [
      {
        title: "National Distribution Execution",
        description:
          "Reliable delivery operations supporting pharmacies, clinics, and hospitals across key provinces in Mozambique.",
      },
      {
        title: "Supplier Relationship Management",
        description:
          "Long-standing relationships with procurement stakeholders and international suppliers to ensure continuity of supply.",
      },
      {
        title: "Quality-Focused Portfolio Management",
        description:
          "Commercialization of established brands that meet strict quality standards and market expectations.",
      },
      {
        title: "Market Expansion Support",
        description:
          "Strategic planning to scale product presence in Mozambique and broader Southern African markets.",
      },
    ],
    qualityTitle: "Quality & Compliance",
    qualityIntro:
      "EMS PHARMA prioritizes strict product quality standards and disciplined partner selection to protect patient and customer confidence.",
    qualityHighlightsTitle: "Quality priorities",
    qualityHighlights: [
      "Maintain strict quality standards for all distributed brands",
      "Sustain ethical and professional conduct with clients and collaborators",
      "Continuously improve distribution speed and service reliability",
    ],
    faqTitle: "Frequently Asked Questions",
    faqIntro: "Quick answers for customers and partners.",
    faqs: [
      {
        question: "Do you support nationwide distribution in Mozambique?",
        answer:
          "Yes. We actively supply Maputo, Beira, Nampula, Inhambane, Pemba, and Tete.",
      },
      {
        question: "Do you work with international manufacturers?",
        answer:
          "Yes. We maintain supplier relationships in South Africa, Portugal, and Spain.",
      },
      {
        question: "Can I request product and pricing information?",
        answer:
          "Yes. Contact us by phone or visit our Maputo office for support.",
      },
    ],
    contactTitle: "Partner with EMS PHARMA",
    contactIntro:
      "We welcome partnerships with suppliers and healthcare buyers seeking dependable distribution and long-term market growth.",
    form: {
      fullName: "Full name",
      email: "Work email",
      message: "Message",
      submit: "Submit inquiry",
    },
    mapTitle: "Contact Us",
    mapIntro: "Visit us or call our team.",
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Cell",
    footer: "Call us on +258 84 305 2440 to learn more",
  },
  pt: {
    nav: { about: "Sobre", partners: "Marcas", contact: "Contacto" },
    cta: { primary: "Saiba mais", secondary: "Fale connosco" },
    hero: {
      badge: "Distribuição farmacêutica em Moçambique",
      title:
        "A EMS PHARMA LDA distribui produtos farmacêuticos de confiança desde 2012",
      subtitle:
        "Distribuímos produtos farmacêuticos, cosméticos, consumíveis, higiene e limpeza para farmácias, hospitais e clínicas em Maputo, Beira, Nampula, Inhambane, Pemba e Tete.",
    },
    metrics: [
      { value: "2012", label: "Em operação desde" },
      { value: "2", label: "Sócios" },
      { value: "20+", label: "Anos de experiência da gestão" },
      { value: "6", label: "Províncias servidas ativamente" },
    ],
    aboutTitle: "Sobre a EMS PHARMA LDA",
    presentationTitle: "Carta de Apresentação",
    presentationParagraphs: [
      "Apresentamos a EMS PHARMA LDA, uma empresa com dois sócios e mais de uma década de atuação na distribuição de produtos de saúde.",
      "A nossa equipa de gestão possui mais de 20 anos de experiência no mercado farmacêutico moçambicano e mantém fortes relações com responsáveis de compras de grandes farmácias, clínicas e hospitais.",
      "Com este conhecimento de mercado e rede de contactos, estamos confiantes na nossa capacidade de impulsionar um crescimento forte e sustentável das vendas dos produtos dos nossos parceiros.",
    ],
    objectivesTitle: "Objetivos",
    objectives: [
      "Perseverança",
      "Qualidade",
      "Satisfação total dos clientes internos e externos",
      "Crescimento",
      "Rentabilidade",
      "Administrar bem o presente enquanto criamos um futuro melhor",
      "Reconhecimento dos colaboradores e de todas as partes interessadas",
      "Projeção estratégica",
    ],
    missionTitle: "Missão",
    mission:
      "Ser excelente na logística e distribuição, oferecendo rapidez e excelência no serviço ao cliente e garantindo relações duradouras com clientes e colaboradores, baseadas em ética, confiança, cumplicidade e profissionalismo mútuo.",
    visionTitle: "Visão",
    vision:
      "Manter a liderança em Moçambique e conquistar novos mercados na África Austral, fortalecendo a imagem e a presença da EMS PHARMA junto de clientes e fornecedores.",
    partnersTitle: "Principais relações com fornecedores e marcas",
    partners: [
      "África do Sul: Incolabs, Incobrands, Bennetts, Nutriwomen, Nativa, GM Pharmaceuticals",
      "Portugal: Esbelt, Targetway Pharmaceuticals, Tecnimede",
      "Espanha: Medel",
      "Marcas com elevados padrões de qualidade atualmente comercializadas: Esbelt, Star Balm, Bennetts, Nutriwomen, PIC, Chicco, Medel",
    ],
    warehouse:
      "A nossa cobertura de distribuição suporta o abastecimento fiável de farmácias, hospitais e clínicas nas principais cidades de Moçambique.",
    therapeuticTitle: "Categorias de Produto",
    therapeuticIntro:
      "O nosso portefólio cobre segmentos essenciais de saúde e cuidados pessoais para clientes de retalho e institucionais.",
    therapeuticAreas: [
      "Produtos farmacêuticos",
      "Produtos cosméticos",
      "Consumíveis médicos",
      "Produtos de higiene",
      "Produtos de limpeza",
      "Produtos especializados de marcas parceiras",
    ],
    capabilitiesTitle: "Capacidades Principais",
    capabilities: [
      {
        title: "Execução de Distribuição Nacional",
        description:
          "Operações de entrega fiáveis para farmácias, clínicas e hospitais nas principais províncias de Moçambique.",
      },
      {
        title: "Gestão de Relações com Fornecedores",
        description:
          "Relações de longo prazo com decisores de compras e fornecedores internacionais para assegurar continuidade de abastecimento.",
      },
      {
        title: "Gestão de Portefólio com Foco na Qualidade",
        description:
          "Comercialização de marcas reconhecidas que cumprem padrões rigorosos de qualidade e expectativas do mercado.",
      },
      {
        title: "Suporte à Expansão de Mercado",
        description:
          "Planeamento estratégico para ampliar a presença dos produtos em Moçambique e em mercados da África Austral.",
      },
    ],
    qualityTitle: "Qualidade e Conformidade",
    qualityIntro:
      "A EMS PHARMA prioriza padrões rigorosos de qualidade dos produtos e seleção disciplinada de parceiros para proteger a confiança de pacientes e clientes.",
    qualityHighlightsTitle: "Prioridades de qualidade",
    qualityHighlights: [
      "Manter padrões estritos de qualidade para todas as marcas distribuídas",
      "Sustentar conduta ética e profissional com clientes e colaboradores",
      "Melhorar continuamente a rapidez da distribuição e a fiabilidade do serviço",
    ],
    faqTitle: "Perguntas Frequentes",
    faqIntro: "Respostas rápidas para clientes e parceiros.",
    faqs: [
      {
        question: "Fazem distribuição a nível nacional em Moçambique?",
        answer:
          "Sim. Fornecemos ativamente Maputo, Beira, Nampula, Inhambane, Pemba e Tete.",
      },
      {
        question: "Trabalham com fabricantes internacionais?",
        answer:
          "Sim. Mantemos relações com fornecedores na África do Sul, Portugal e Espanha.",
      },
      {
        question: "Posso solicitar informação sobre produtos e preços?",
        answer:
          "Sim. Contacte-nos por telefone ou visite o nosso escritório em Maputo.",
      },
    ],
    contactTitle: "Seja parceiro da EMS PHARMA",
    contactIntro:
      "Valorizamos parcerias com fornecedores e compradores de saúde que procuram distribuição fiável e crescimento sustentável no mercado.",
    form: {
      fullName: "Nome completo",
      email: "Email profissional",
      message: "Mensagem",
      submit: "Enviar pedido",
    },
    mapTitle: "Contate-nos",
    mapIntro: "Visite-nos ou ligue para a nossa equipa.",
    addressLabel: "Morada",
    emailLabel: "Email",
    phoneLabel: "Celular",
    footer: "Ligue para +258 84 305 2440 para saber mais",
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
              width={100}
              height={100}
              priority
            />
          </a>
          <nav aria-label="Primary" className="hidden gap-6 md:flex">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-600">{content.nav.about}</a>
            <a href="#partners" className="text-sm font-medium text-slate-600 hover:text-brand-600">{content.nav.partners}</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-brand-600">{content.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setLocale("en")} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${locale === "en" ? "border-brand-600 bg-brand-600 text-white" : "border-slate-300 text-slate-600"}`}>
              English
            </button>
            <button type="button" onClick={() => setLocale("pt")} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${locale === "pt" ? "border-brand-600 bg-brand-600 text-white" : "border-slate-300 text-slate-600"}`}>
              Português
            </button>
          </div>
        </div>
      </header>

      <section className="section-shell grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800">{content.hero.badge}</span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{content.hero.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">{content.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#about" className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-800">{content.cta.primary}</a>
            <a href="#contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-brand-500 hover:text-brand-600">{content.cta.secondary}</a>
          </div>
          <dl className="grid gap-4 pt-4 sm:grid-cols-2">
            {content.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <dt className="text-sm text-slate-500">{metric.label}</dt>
                <dd className="text-2xl font-bold text-brand-800">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <Image src="/stock/family-happy-bed.webp" alt="EMS Pharma logo" width={900} height={1100} className="h-full w-full object-cover" priority />
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white py-20">
        <div className="section-shell space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">{content.aboutTitle}</h2>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-2xl font-semibold text-slate-900">{content.presentationTitle}</h3>
            <div className="mt-4 space-y-4 text-slate-700">
              {content.presentationParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">{content.objectivesTitle}</h3>
              <ul className="mt-4 space-y-2 text-slate-700">{content.objectives.map((objective) => <li key={objective}>• {objective}</li>)}</ul>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">{content.missionTitle}</h3>
              <p className="mt-4 text-slate-700">{content.mission}</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">{content.visionTitle}</h3>
              <p className="mt-4 text-slate-700">{content.vision}</p>
            </article>
          </div>
        </div>
      </section>
      
      <section id="cover" className="section-shell py-20">
        <Image src="/stock/family-bicycle.webp" alt="Family on a bicycle" width={2000} height={2000} className="h-full w-full object-cover" priority />
      </section>

      <section id="partners" className="section-shell py-20">
        <h2 className="text-3xl font-bold tracking-tight">{content.partnersTitle}</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">{content.partners.map((brand) => <article key={brand} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">{brand}</article>)}</div>
        <p className="mt-8 rounded-xl border border-brand-100 bg-brand-50 p-5 text-brand-900">{content.warehouse}</p>
      </section>

      <section id="categories" className="section-shell py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{content.therapeuticTitle}</h2>
            <p className="mt-3 text-slate-600">{content.therapeuticIntro}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{content.therapeuticAreas.map((area) => <article key={area} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold text-slate-900">{area}</h3></article>)}</div>
      </section>

      <section id="capabilities" className="border-y border-slate-200 bg-white py-20">
        <div className="section-shell">
          <h2 className="text-3xl font-bold tracking-tight">{content.capabilitiesTitle}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">{content.capabilities.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 p-6"><h3 className="text-xl font-semibold text-slate-900">{item.title}</h3><p className="mt-3 text-slate-600">{item.description}</p></article>)}</div>
        </div>
      </section>

      <section id="quality" className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
            <Image src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1100&q=80" alt="Automated pharmaceutical packaging line" width={1000} height={800} className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{content.qualityTitle}</h2>
            <p className="mt-4 text-slate-600">{content.qualityIntro}</p>
            <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-800">{content.qualityHighlightsTitle}</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-800">{content.qualityHighlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-slate-200 bg-white py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{content.faqTitle}</h2>
            <p className="mt-4 text-slate-600">{content.faqIntro}</p>
          </div>
          <FAQ items={content.faqs} />
        </div>
      </section>

      <section id="contact" className="section-shell py-20">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{content.mapTitle}</h2>
            <p className="mt-3 text-slate-600">{content.mapIntro}</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p><span className="font-semibold">{content.phoneLabel}:</span> +258 84 305 2440</p>
              <p><span className="font-semibold">{content.emailLabel}:</span> info@ems-pharma.com</p>
              <p><span className="font-semibold">{content.addressLabel}:</span> Av. 25 de Setembro nr 2400 R/C, Maputo, Moçambique</p>
            </div>
          </div>
          <iframe title="EMS PHARMA Maputo location" src="https://www.google.com/maps?q=Av.+25+de+Setembro+2400,+Maputo,+Mozambique&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-2xl border border-slate-200" />
        </div>
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-800 to-brand-600 p-10 text-white">
          <h2 className="text-3xl font-bold tracking-tight">{content.contactTitle}</h2>
          <p className="mt-3 max-w-3xl text-white/90">{content.contactIntro}</p>
          <form className="mt-8 grid gap-4 sm:grid-cols-2">
            <input type="text" placeholder={content.form.fullName} className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/70" />
            <input type="email" placeholder={content.form.email} className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/70" />
            <textarea placeholder={content.form.message} rows={4} className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 placeholder:text-white/70 sm:col-span-2" />
            <button type="button" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 sm:col-span-2 sm:w-fit text-slate-500">{content.form.submit}</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="section-shell flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EMS Pharma. All rights reserved.</p>
          <p>{content.footer}</p>
        </div>
      </footer>
    </main>
  );
}
