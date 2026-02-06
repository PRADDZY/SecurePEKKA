import { GlassContainer, StatCard } from './ui/Glass';

const risks = [
  { label: 'Broken access control on billing endpoints', level: 'Critical' },
  { label: 'Session fixation gap in login callback', level: 'High' },
  { label: 'Outdated package chain in build stack', level: 'Medium' }
];

export default function InsightsPanel() {
  return (
    <section id="product" className="section pt-3">
      <div className="container">
        <GlassContainer className="rounded-[2rem] px-5 py-8 md:px-8 md:py-10">
          <h2 className="section-title">Meet Actionable Security Insights</h2>
          <p className="section-subtitle">
            Prioritized findings your team can fix fast without security theater.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <StatCard title="Security Score">
              <div className="flex items-end justify-between">
                <p className="text-4xl font-semibold tracking-[-0.03em] text-white">92.4%</p>
                <span className="rounded-full border border-[#64f3cf]/30 bg-[#64f3cf]/10 px-2 py-1 text-xs text-[#9ff7e0]">
                  +2.3
                </span>
              </div>
              <div className="mt-4 flex items-end gap-1">
                {[18, 22, 16, 28, 25, 35, 31, 40].map((h, i) => (
                  <span key={i} className="w-2 rounded-full bg-gradient-to-t from-[#64f3cf]/20 to-[#64f3cf]/75" style={{ height: `${h}px` }} />
                ))}
              </div>
            </StatCard>

            <StatCard title="Top Risks">
              <ul className="grid gap-2">
                {risks.map((risk) => (
                  <li key={risk.label} className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                    <span className="text-xs leading-5 text-slate-300">{risk.label}</span>
                    <span className={`rounded-full px-2 py-1 text-[10px] ${
                      risk.level === 'Critical'
                        ? 'bg-red-500/20 text-red-300'
                        : risk.level === 'High'
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-sky-500/20 text-sky-300'
                    }`}>
                      {risk.level}
                    </span>
                  </li>
                ))}
              </ul>
            </StatCard>

            <StatCard title="Attack Surface">
              <div className="relative h-28 rounded-xl border border-white/10 bg-black/25 p-3">
                <div className="absolute inset-x-3 top-1/2 h-px bg-white/10" />
                <div className="absolute inset-y-3 left-1/2 w-px bg-white/10" />
                <svg viewBox="0 0 260 100" className="h-full w-full">
                  <path d="M10 78 C45 20, 82 86, 124 48 S210 26, 250 54" stroke="#64f3cf" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </StatCard>

            <StatCard title="Fix Queue">
              <div className="grid gap-3">
                {['Patch auth callback guard', 'Rotate exposed staging token', 'Pin transitive parser dependency'].map((item, idx) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                    <p className="text-xs text-slate-300">{item}</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[#64f3cf]" style={{ width: `${75 - idx * 20}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </StatCard>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
