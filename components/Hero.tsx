import ThreeHero from './ThreeHero';

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-14 md:grid-cols-[1.05fr_0.95fr] md:pb-20">
        <div className="relative z-10">
          <p className="eyebrow">SECUREPEKKA • SECURITY FOR STARTUPS</p>
          <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold leading-tight text-text md:text-6xl">
            Ship faster, safely - security built for vibecoding teams.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
            Affordable security audits, pentesting, and launch checks with actionable fixes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="rounded-full bg-neon px-6 py-3 text-sm font-semibold text-[#03241d] transition hover:opacity-90"
            >
              Get started
            </a>
            <a
              href="#docs"
              className="rounded-full border border-border bg-panel px-6 py-3 text-sm font-semibold text-text transition hover:border-neon/60"
            >
              Read the docs
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">No enterprise sales. Clear scope. Founder-friendly.</p>
        </div>

        <div className="relative min-h-[360px] rounded-xl2 border border-border/80 bg-panel/40 md:min-h-[470px]">
          <ThreeHero />
        </div>
      </div>
    </section>
  );
}

