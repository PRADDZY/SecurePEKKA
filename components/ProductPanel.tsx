const findings = [
  { title: 'JWT secret entropy below policy', severity: 'HIGH' },
  { title: 'Open redirect on OAuth callback', severity: 'MEDIUM' },
  { title: 'Outdated transitive package', severity: 'LOW' }
];

export default function ProductPanel() {
  return (
    <section id="solutions" className="section pt-0">
      <div className="container">
        <div className="surface-strong p-4 md:p-7">
          <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-[#070d16] p-5">
              <div className="mb-4 flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
              <p className="font-mono text-sm text-slate-300">$ npm install securepekka</p>
              <p className="mt-3 font-mono text-sm text-[#36edc3]">+ securepekka@1.4.0</p>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-slate-500">Scan stream</p>
              <p className="mt-2 font-mono text-xs text-slate-400">Running auth checks...</p>
              <p className="mt-1 font-mono text-xs text-slate-400">Inspecting API handlers...</p>
              <p className="mt-1 font-mono text-xs text-slate-400">Assembling remediation report...</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#090f1a] p-5">
              <p className="text-sm font-semibold text-white">Findings</p>
              <ul className="mt-4 grid gap-3">
                {findings.map((item) => (
                  <li key={item.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-slate-200">{item.title}</span>
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-semibold tracking-wide ${
                          item.severity === 'HIGH'
                            ? 'bg-red-500/25 text-red-300'
                            : item.severity === 'MEDIUM'
                              ? 'bg-amber-500/25 text-amber-300'
                              : 'bg-emerald-500/25 text-emerald-300'
                        }`}
                      >
                        {item.severity}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

