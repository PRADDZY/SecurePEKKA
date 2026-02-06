const tiers = [
  {
    name: 'Starter',
    price: '$299',
    desc: 'For pre-seed builders who want launch confidence.',
    points: ['Surface-level app review', 'Dependency and secret checks', '48-hour turnaround'],
    cta: 'Start Starter'
  },
  {
    name: 'Launch',
    price: '$799',
    desc: 'Most popular for teams shipping in the next 30 days.',
    points: ['Targeted pentest and auth deep-dive', 'Prioritized fix plan', '1 retest included'],
    cta: 'Choose Launch',
    featured: true
  },
  {
    name: 'Growth',
    price: '$1,999',
    desc: 'For post-launch products with active customer data.',
    points: ['Expanded API + infra assessment', 'Collaborative threat review', 'Monthly advisory check-in'],
    cta: 'Talk to SecurePEKKA'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-wrap">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">PRICING</p>
        <h2 className="section-title">Founder-friendly plans with clear scope.</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-xl2 border p-6 ${
                tier.featured
                  ? 'border-neon/60 bg-gradient-to-b from-[#0f1d25] to-panel shadow-neon'
                  : 'border-border/80 bg-panel/55'
              }`}
            >
              <div className="text-sm font-semibold text-neon">{tier.name}</div>
              <div className="mt-4 text-3xl font-semibold text-text">{tier.price}</div>
              <p className="mt-3 text-sm leading-6 text-muted">{tier.desc}</p>
              <ul className="mt-5 grid gap-2 text-sm text-slate-300">
                {tier.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-6 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  tier.featured
                    ? 'bg-neon text-[#03241d] hover:opacity-90'
                    : 'border border-border bg-[#101826] text-text hover:border-neon/50'
                }`}
              >
                {tier.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

