'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <button
              type="button"
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="text-base font-semibold text-slate-900">{item.question}</span>
              <span className="text-brand-600">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <p id={`faq-panel-${index}`} className="mt-3 text-sm leading-6 text-slate-600">
                {item.answer}
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}
