const features = [
  'AI-assisted scanning',
  'Auth & API hardening',
  'Dependency risk review',
  'Production-grade reports'
];

export default function Features() {
  return (
    <section id="product" className="section">
      <div className="container grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">WHY SECUREPEKKA</p>
          <h2 className="section-title">Security for the ship-first era.</h2>
          <p className="body-muted mt-4 max-w-xl text-base">Practical protection without security theater.</p>
        </div>

        <ul className="grid gap-3">
          {features.map((feature, i) => (
            <li
              key={feature}
              className="surface flex items-center justify-between px-5 py-4 text-sm text-white"
            >
              <span>{feature}</span>
              <span className="text-xs tracking-[0.14em] text-slate-400">0{i + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

