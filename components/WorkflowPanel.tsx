import { GlassContainer } from './ui/Glass';

const chips = ['SAST', 'DAST', 'SCA', 'Secrets', 'Cloud', 'Web'];

export default function WorkflowPanel() {
  return (
    <section id="solutions" className="section pt-3">
      <div className="container">
        <GlassContainer className="rounded-[2rem] px-5 py-8 md:px-8 md:py-10">
          <span id="features" className="sr-only">
            Features
          </span>
          <h2 className="section-title">Launch-ready in 3 steps</h2>
          <p className="section-subtitle">Connect, scan, and ship with clear remediation sequence.</p>

          <div className="mt-9 grid items-center gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-3">
              {['Scan', 'Review', 'Retest'].map((item, idx) => (
                <article key={item} className="glass-card rounded-2xl px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Phase 0{idx + 1}</p>
                  <p className="mt-1 text-base font-semibold text-white">{item}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    {idx === 0 && 'Targeted checks run across auth, API, and deploy surface.'}
                    {idx === 1 && 'Security team validates exploitability and ranks impact.'}
                    {idx === 2 && 'You patch quickly and get immediate launch confidence.'}
                  </p>
                </article>
              ))}
            </div>

            <div className="relative mx-auto grid h-[320px] w-[320px] place-items-center rounded-full border border-white/10 bg-black/20">
              <div className="absolute inset-4 rounded-full border border-white/10" />
              <div className="absolute inset-2 rounded-full border border-[#64f3cf]/40 [mask-image:conic-gradient(black_0_280deg,transparent_280deg_360deg)]" />
              <div className="absolute inset-[28%] grid place-items-center rounded-full border border-white/10 bg-[#0f1722]/90">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Step 01</p>
                <p className="mt-2 text-2xl font-semibold text-white">Scan</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
                {chip}
              </span>
            ))}
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
