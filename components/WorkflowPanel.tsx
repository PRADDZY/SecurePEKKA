'use client';

import { useEffect, useMemo, useState } from 'react';
import { GlassContainer } from './ui/Glass';

const chips = ['SAST', 'DAST', 'SCA', 'Secrets', 'Cloud', 'Web'];

const steps = [
  {
    name: 'Scan',
    subtitle: 'Phase 01',
    description: 'Targeted checks run across auth, API, and deploy surface.',
    completion: 36,
    eta: '12m',
    events: ['Collecting endpoint inventory', 'Mapping auth routes', 'Secrets scanner active']
  },
  {
    name: 'Review',
    subtitle: 'Phase 02',
    description: 'Security team validates exploitability and ranks impact.',
    completion: 71,
    eta: '7m',
    events: ['Reproducing callback flaw', 'Triage on CVE set', 'Impact scoring complete']
  },
  {
    name: 'Retest',
    subtitle: 'Phase 03',
    description: 'You patch quickly and get immediate launch confidence.',
    completion: 92,
    eta: '3m',
    events: ['Patch verification in staging', 'Regression checks passed', 'Launch gate marked green']
  }
];

export default function WorkflowPanel() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const ringStyle = useMemo(() => {
    const degrees = (active.completion / 100) * 360;
    return {
      background: `conic-gradient(#64f3cf ${degrees}deg, rgba(255,255,255,0.08) ${degrees}deg 360deg)`
    };
  }, [active.completion]);

  return (
    <section id="solutions" className="section pt-3">
      <div className="container">
        <GlassContainer className="rounded-[2rem] px-5 py-8 md:px-8 md:py-10">
          <span id="features" className="sr-only">
            Features
          </span>
          <h2 className="section-title">Launch-ready in 3 steps</h2>
          <p className="section-subtitle">Click any step to preview workflow state. It loops automatically for demo mode.</p>

          <div className="mt-9 grid items-center gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-3">
              {steps.map((step, idx) => {
                const selected = idx === activeStep;
                return (
                  <button
                    type="button"
                    key={step.name}
                    onClick={() => setActiveStep(idx)}
                    className={`glass-card rounded-2xl px-4 py-3 text-left transition ${
                      selected ? 'border-[#64f3cf]/45 bg-[#111e2a]/70' : ''
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{step.subtitle}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-base font-semibold text-white">{step.name}</p>
                      <span className="text-xs text-slate-400">{step.eta}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{step.description}</p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[#64f3cf] transition-all duration-500" style={{ width: `${step.completion}%` }} />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-4">
              <div className="relative mx-auto grid h-[320px] w-[320px] place-items-center rounded-full border border-white/10 bg-black/20">
                <div className="absolute inset-3 rounded-full p-[10px]" style={ringStyle}>
                  <div className="h-full w-full rounded-full bg-[#0f1722]" />
                </div>
                <div className="absolute inset-[28%] grid place-items-center rounded-full border border-white/10 bg-[#0f1722]/95">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Step 0{activeStep + 1}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{active.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{active.completion}% complete</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Live Activity Feed</p>
                <ul className="mt-3 grid gap-2 text-xs text-slate-300">
                  {active.events.map((event) => (
                    <li key={event} className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-2.5 py-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#64f3cf]" />
                      {event}
                    </li>
                  ))}
                </ul>
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
