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
    <section id="docs" className="section pt-0">
      <div className="container max-w-4xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Straight answers for fast-moving teams.</h2>

        <div className="mt-8 grid gap-3">
          {items.map((item, i) => {
            const isOpen = active === i;
            return (
              <article key={item.q} className="surface">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setActive(isOpen ? null : i)}
                >
                  <span className="text-sm font-medium text-white">{item.q}</span>
                  <span className="text-[#66f3d2]">{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && <p className="body-muted px-5 pb-5 text-sm">{item.a}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

