import { GlassContainer, StatCard } from './ui/Glass';

const trend = [74.8, 76.1, 78.9, 79.4, 82.2, 84.6, 88.1, 90.3, 92.4];

const topRisks = [
  { id: 'CVE-2026-1142', label: 'Broken access control in billing mutation', level: 'Critical', cvss: '9.1' },
  { id: 'SPK-AUTH-22', label: 'Weak PKCE verifier validation in callback', level: 'High', cvss: '8.3' },
  { id: 'SPK-DEP-07', label: 'Known vulnerable markdown parser transitive', level: 'Medium', cvss: '6.5' }
];

const queue = [
  { task: 'Patch callback verifier guard', owner: 'Backend', eta: '2h', progress: 78 },
  { task: 'Rotate leaked test token', owner: 'Platform', eta: '45m', progress: 92 },
  { task: 'Pin parser to patched release', owner: 'Web', eta: '3h', progress: 41 }
];

export default function InsightsPanel() {
  const points = trend
    .map((value, index) => {
      const x = 14 + index * 30;
      const y = 104 - (value - 72) * 2.7;
      return `${x},${Math.max(10, y)}`;
    })
    .join(' ');

  return (
    <section id="product" className="section pt-3">
      <div className="container">
        <GlassContainer className="rounded-[2rem] px-5 py-8 md:px-8 md:py-10">
          <h2 className="section-title">Meet Actionable Security Insights</h2>
          <p className="section-subtitle">Prioritized findings your team can fix fast without security theater.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <StatCard title="Security Score">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-4xl font-semibold tracking-[-0.03em] text-white">92.4%</p>
                  <p className="mt-1 text-xs text-slate-400">Past 9 scan runs | P95 confidence</p>
                </div>
                <span className="rounded-full border border-[#64f3cf]/35 bg-[#64f3cf]/10 px-2 py-1 text-xs text-[#9ff7e0]">
                  +7.6 this week
                </span>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-2">
                <svg viewBox="0 0 280 110" className="h-[110px] w-full">
                  <polyline points={points} fill="none" stroke="#64f3cf" strokeWidth="2.5" strokeLinejoin="round" />
                  <polyline points={`14,106 ${points} 254,106`} fill="url(#areaFill)" stroke="none" />
                  <defs>
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#64f3cf" stopOpacity="0.34" />
                      <stop offset="100%" stopColor="#64f3cf" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </StatCard>

            <StatCard title="Top Risks">
              <ul className="grid gap-2">
                {topRisks.map((risk) => (
                  <li key={risk.id} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{risk.id}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-200">{risk.label}</p>
                      </div>
                      <div className="text-right">
                        <span className={`rounded-full px-2 py-1 text-[10px] ${
                          risk.level === 'Critical'
                            ? 'bg-red-500/20 text-red-300'
                            : risk.level === 'High'
                              ? 'bg-amber-500/20 text-amber-300'
                              : 'bg-sky-500/20 text-sky-300'
                        }`}>
                          {risk.level}
                        </span>
                        <p className="mt-1 text-[10px] text-slate-500">CVSS {risk.cvss}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </StatCard>

            <StatCard title="Attack Surface">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Public Endpoints</p>
                  <p className="mt-1 text-2xl font-semibold text-white">187</p>
                  <p className="text-xs text-slate-400">+12 from last release</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Internet-facing assets</p>
                  <p className="mt-1 text-2xl font-semibold text-white">34</p>
                  <p className="text-xs text-slate-400">3 misconfig candidates</p>
                </div>
              </div>
              <div className="mt-3 rounded-xl border border-white/10 bg-black/25 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-slate-500">
                  <span>Severity Distribution</span>
                  <span>last run</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="flex h-full w-full">
                    <span className="h-full w-[18%] bg-red-400/80" />
                    <span className="h-full w-[33%] bg-amber-300/80" />
                    <span className="h-full w-[49%] bg-sky-300/70" />
                  </div>
                </div>
              </div>
            </StatCard>

            <StatCard title="Fix Queue">
              <div className="grid gap-3">
                {queue.map((item) => (
                  <div key={item.task} className="rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs text-slate-200">{item.task}</p>
                      <p className="text-[10px] text-slate-500">{item.eta}</p>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                      <span>{item.owner}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[#64f3cf]" style={{ width: `${item.progress}%` }} />
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
