import ThreeHero from './ThreeHero';

export default function Hero() {
  return (
    <section className="section pb-10 pt-28 md:pt-36">
      <div className="container grid items-center gap-10 md:grid-cols-[1.06fr_0.94fr]">
        <div className="relative z-10">
          <p className="eyebrow">SECUREPEKKA | SECURITY FOR STARTUPS</p>
          <h1 className="headline">Ship faster, safely. Security built for vibecoding teams.</h1>
          <p className="body-muted mt-6 max-w-xl text-base md:text-lg">
            Affordable security audits, pentesting, and launch checks with actionable fixes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="btn-primary">
              Get started
            </a>
            <a href="#docs" className="btn-secondary">
              Read the docs
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400">No enterprise sales. Clear scope. Founder-friendly.</p>
        </div>

        <div className="surface-strong relative min-h-[350px] overflow-hidden md:min-h-[500px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(26,242,190,0.2),transparent_38%)]" />
          <ThreeHero />
        </div>
      </div>
    </section>
  );
}
