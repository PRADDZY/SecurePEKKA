'use client';

import { useEffect, useMemo, useState } from 'react';
import { GlassContainer } from './ui/Glass';

const chips = ['SAST', 'DAST', 'SCA', 'Secrets', 'Cloud', 'Web'];

const steps = [
  {
    id: 'scan',
    title: 'Scan',
    subtitle: 'Phase 01',
    percent: 33,
    eta: '12m',
    blurb: 'Discover attack paths across auth, API, and cloud edges.',
    metrics: { endpoints: 187, findings: 41, confidence: 86 },
    events: [
      'Inventory graph built from 187 external routes',
      'Secret scanner attached to CI artifacts',
      'Auth boundary checks completed'
    ]
  },
  {
    id: 'review',
    title: 'Review',
    subtitle: 'Phase 02',
    percent: 68,
    eta: '7m',
    blurb: 'Validate exploitability and rank impact by business criticality.',
    metrics: { endpoints: 187, findings: 17, confidence: 92 },
    events: [
      'Privilege escalation chain reproduced',
      'CVSS and exploitability scoring finalized',
      'Patch order generated for engineering'
    ]
  },
  {
    id: 'retest',
    title: 'Retest',
    subtitle: 'Phase 03',
    percent: 94,
    eta: '3m',
    blurb: 'Verify fixes, rerun risk checks, and clear launch gate.',
    metrics: { endpoints: 187, findings: 3, confidence: 98 },
    events: [
      'Regression suite finished on patched build',
      'High-severity chain no longer reproducible',
      'Launch gate switched to GREEN'
    ]
  }
];

function formatClock(index: number) {
  const min = 9 + index;
  return `09:${min.toString().padStart(2, '0')}`;
}

export default function WorkflowPanel() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [tick, setTick] = useState(0);

  const step = steps[active];
  const circumference = 2 * Math.PI * 98;
  const dashOffset = circumference - (step.percent / 100) * circumference;

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActive((v) => (v + 1) % steps.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [autoplay]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((v) => (v + 1) % 3);
    }, 1250);
    return () => clearInterval(interval);
  }, []);

  const eventRows = useMemo(
    () =>
      step.events.map((event, i) => ({
        event,
        done: i <= tick
      })),
    [step.events, tick]
  );

  return (
    <section id="solutions" className="section pt-3">
      <div className="container">
        <GlassContainer className="rounded-[2rem] px-5 py-8 md:px-8 md:py-10">
          <span id="features" className="sr-only">
            Features
          </span>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Launch-ready in 3 steps</h2>
              <p className="section-subtitle">
                Interactive demo timeline with live status simulation.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActive((v) => (v + steps.length - 1) % steps.length)}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200 hover:bg-white/[0.08]"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => setActive((v) => (v + 1) % steps.length)}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200 hover:bg-white/[0.08]"
              >
                Next
              </button>
              <button
                type="button"
                onClick={() => setAutoplay((v) => !v)}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  autoplay
                    ? 'border-[#64f3cf]/55 bg-[#64f3cf]/15 text-[#9ff7e0]'
                    : 'border-white/15 bg-white/[0.04] text-slate-200'
                }`}
              >
                {autoplay ? 'Autoplay On' : 'Autoplay Off'}
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-card rounded-3xl p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Workflow Timeline</p>
              <div className="mt-4 grid gap-2">
                {steps.map((item, index) => {
                  const selected = active === index;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setAutoplay(false);
                        setActive(index);
                      }}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        selected
                          ? 'border-[#64f3cf]/45 bg-[#11212a]'
                          : 'border-white/10 bg-black/20 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs uppercase tracking-[0.13em] text-slate-500">{item.subtitle}</p>
                        <p className="text-xs text-slate-400">{item.eta}</p>
                      </div>
                      <p className="mt-1 text-base font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{item.blurb}</p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#64f3cf] transition-all duration-500"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="glass-card rounded-3xl p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Simulator Status</p>
                <div className="mt-4 grid items-center gap-3 sm:grid-cols-[240px_1fr]">
                  <div className="relative mx-auto h-[240px] w-[240px]">
                    <svg viewBox="0 0 240 240" className="h-full w-full -rotate-90">
                      <circle cx="120" cy="120" r="98" stroke="rgba(255,255,255,0.12)" strokeWidth="14" fill="none" />
                      <circle
                        cx="120"
                        cy="120"
                        r="98"
                        stroke="#64f3cf"
                        strokeWidth="14"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        className="transition-all duration-700"
                      />
                    </svg>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="text-center">
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                          {step.subtitle}
                        </p>
                        <p className="mt-2 text-3xl font-semibold text-white">{step.title}</p>
                        <p className="mt-1 text-sm text-[#9ff7e0]">{step.percent}% complete</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Findings Remaining</p>
                      <p className="mt-1 text-2xl font-semibold text-white">{step.metrics.findings}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Coverage Confidence</p>
                      <p className="mt-1 text-2xl font-semibold text-white">{step.metrics.confidence}%</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Endpoints Tracked</p>
                      <p className="mt-1 text-2xl font-semibold text-white">{step.metrics.endpoints}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Live Event Stream</p>
                <ul className="mt-3 grid gap-2 text-xs">
                  {eventRows.map((row, i) => (
                    <li
                      key={`${step.id}-${row.event}`}
                      className={`flex items-center justify-between rounded-lg border px-3 py-2 transition ${
                        row.done
                          ? 'border-[#64f3cf]/35 bg-[#10221f] text-[#b4fce8]'
                          : 'border-white/10 bg-black/20 text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${row.done ? 'bg-[#64f3cf]' : 'bg-slate-500'}`} />
                        {row.event}
                      </span>
                      <span className="text-[10px] text-slate-500">{formatClock(i)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
