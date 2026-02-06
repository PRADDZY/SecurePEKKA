const features = [
  'AI-assisted scanning',
  'Auth & API hardening',
  'Dependency risk review',
  'Production-grade reports'
];

export default function Features() {
  return (
    <section id="product" className="section-wrap">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">WHY SECUREPEKKA</p>
          <h2 className="section-title">Security for the ship-first era.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            Practical protection without security theater.
          </p>
        </div>

        <ul className="grid gap-4">
          {features.map((feature) => (
            <li
              key={feature}
              className="rounded-xl2 border border-border/80 bg-panel/60 px-5 py-4 text-sm text-text shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
