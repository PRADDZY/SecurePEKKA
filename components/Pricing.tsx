const tiers = [
  {
    name: 'Starter',
    price: '$299',
    details: ['Surface audit', 'Dependency checks', 'Summary report'],
    cta: 'Start Starter'
  },
  {
    name: 'Launch',
    price: '$799',
    details: ['Targeted pentest', 'Auth and API review', 'One retest included'],
    cta: 'Choose Launch',
    featured: true
  },
  {
    name: 'Growth',
    price: '$1,999',
    details: ['Extended surface scope', 'Cloud checks', 'Monthly advisory'],
    cta: 'Talk to team'
  }
];

function PricingCard({
  name,
  price,
  details,
  cta,
  featured
}: {
  name: string;
  price: string;
  details: string[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <article className={`rounded-3xl border p-6 ${
      featured
        ? 'border-[#64f3cf]/55 bg-gradient-to-b from-[#121f2a] to-[#0e131d] shadow-[0_24px_60px_rgba(7,24,21,0.35)]'
        : 'border-white/15 bg-[#101620]/65'
    }`}>
      <p className="text-sm font-semibold text-[#9ff7e0]">{name}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{price}</p>
      <ul className="mt-4 grid gap-2 text-sm text-slate-300">
        {details.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
      <button className={`mt-6 w-full rounded-full px-4 py-2.5 text-sm font-semibold ${
        featured ? 'bg-[#64f3cf] text-[#061a15]' : 'border border-white/20 bg-[#131c28] text-white'
      }`}>
        {cta}
      </button>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="section-title">Pricing built for startup velocity</h2>
        <p className="section-subtitle">Simple plans with clear boundaries and no enterprise sales cycle.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
