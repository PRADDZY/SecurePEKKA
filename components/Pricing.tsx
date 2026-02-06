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
    <section id="pricing" className="section">
      <div className="container">
        <p className="eyebrow">PRICING</p>
        <h2 className="section-title">Founder-friendly plans with clear scope.</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`p-6 ${
                tier.featured
                  ? 'surface-strong border-[#52e8c5]/40 shadow-[0_0_0_1px_rgba(26,242,190,0.32),0_14px_38px_rgba(10,33,28,0.44)]'
                  : 'surface'
              }`}
            >
              <div className="text-sm font-semibold text-[#74f3d5]">{tier.name}</div>
              <div className="mt-4 text-3xl font-semibold text-white">{tier.price}</div>
              <p className="body-muted mt-3 text-sm">{tier.desc}</p>
              <ul className="mt-5 grid gap-2 text-sm text-slate-300">
                {tier.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-6 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  tier.featured
                    ? 'bg-[#1af2be] text-[#042018] hover:opacity-90'
                    : 'border border-white/20 bg-[#0d1524] text-white hover:border-[#5ff0cd]/50'
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
