'use client';

import { useState } from 'react';

const items = [
  {
    q: 'How quickly can SecurePEKKA start?',
    a: 'Most startup scopes start within 24 to 48 hours after receiving access details.'
  },
  {
    q: 'Do you include manual pentesting?',
    a: 'Yes. Automated checks are combined with focused manual testing on critical flows.'
  },
  {
    q: 'Can we use this before a product launch?',
    a: 'Yes. The launch package is explicitly designed for pre-release hardening and confidence.'
  },
  {
    q: 'Do we get fix guidance or just findings?',
    a: 'Every issue includes remediation guidance with priority and expected effort.'
  },
  {
    q: 'Do you support follow-up validation?',
    a: 'Yes. Launch and Growth include retest rounds for patched findings.'
  },
  {
    q: 'Any long-term contract required?',
    a: 'No. Plans are engagement-based with optional monthly continuity.'
  }
];

function FAQAccordion({
  q,
  a,
  open,
  onToggle
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="glass-card rounded-2xl">
      <button className="flex w-full items-center justify-between px-4 py-4 text-left" onClick={onToggle}>
        <span className="text-sm font-medium text-white">{q}</span>
        <span className="text-[#97f7df]">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="px-4 pb-4 text-sm leading-7 text-slate-400">{a}</p>}
    </article>
  );
}

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="section pt-1">
      <div className="container max-w-4xl">
        <h2 className="section-title">FAQ</h2>
        <p className="section-subtitle">Direct answers for engineering teams that ship fast.</p>
        <div className="mt-8 grid gap-3">
          {items.map((item, idx) => (
            <FAQAccordion
              key={item.q}
              q={item.q}
              a={item.a}
              open={active === idx}
              onToggle={() => setActive(active === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
