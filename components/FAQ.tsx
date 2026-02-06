'use client';

import { useState } from 'react';

const items = [
  {
    q: 'What do you need from us to begin?',
    a: 'A staging URL or production endpoint, architecture context, and a contact for clarifications.'
  },
  {
    q: 'Do you work with early-stage products?',
    a: 'Yes. SecurePEKKA is built for startup teams that need practical, right-sized security.'
  },
  {
    q: 'How soon do we get a report?',
    a: 'Most engagements deliver initial findings within 48-72 hours depending on scope.'
  },
  {
    q: 'Can you retest fixes before launch?',
    a: 'Yes. Launch plan includes one retest round so teams can verify remediation with confidence.'
  },
  {
    q: 'Are there long-term contracts?',
    a: 'No long-term contract required. Scope and pricing are set per engagement or monthly advisory.'
  }
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="docs" className="section-wrap pt-0">
      <div className="mx-auto max-w-4xl px-6">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Straight answers for fast-moving teams.</h2>

        <div className="mt-8 grid gap-3">
          {items.map((item, i) => {
            const isOpen = active === i;
            return (
              <article key={item.q} className="rounded-xl2 border border-border/80 bg-panel/60">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setActive(isOpen ? null : i)}
                >
                  <span className="text-sm font-medium text-text">{item.q}</span>
                  <span className="text-neon">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-6 text-muted">{item.a}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
