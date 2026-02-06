'use client';

import { useEffect, useMemo, useState } from 'react';
import { GlassContainer } from './ui/Glass';

const chips = ['SAST', 'DAST', 'SCA', 'Secrets', 'Cloud', 'Web'];

const steps = [
  {
    name: 'Scan',
    subtitle: 'Phase 01',
    description: 'Targeted checks run across auth, API, and deploy surface.',
    completion: 34,
    eta: '12m',
    events: ['Enumerating API routes', 'Secret scanners attached', 'Container baseline checks'],
    checks: ['Endpoint inventory', 'Dependency audit', 'Credential exposure']
  },
  {
    name: 'Review',
    subtitle: 'Phase 02',
    description: 'Security team validates exploitability and ranks impact.',
    completion: 72,
    eta: '7m',
    events: ['Reproduced billing privilege flaw', 'Validated callback exploit chain', 'Risk scores generated'],
    checks: ['Exploit verification', 'Business impact mapping', 'Prioritized remediation']
  },
  {
    name: 'Retest',
    subtitle: 'Phase 03',
    description: 'You patch quickly and get immediate launch confidence.',
    completion: 93,
    eta: '3m',
    events: ['Patch set promoted to staging', 'Regression pass complete', 'Launch gate marked green'],
    checks: ['Patch validation', 'Regression checks', 'Sign-off report']
  }
];

function clampIndex(index: number) {
  const total = steps.length;
  return ((index % total) + total) % total;
}

export default function WorkflowPanel() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [progress, setProgress] = useState(steps[0].completion);
  const [eventTick, setEventTick] = useState(0);
  const [runId, setRunId] = useState(1);

  const active = steps[activeStep];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => clampIndex(prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  useEffect(() => {
    const target = active.completion;
    let frame: ReturnType<typeof setInterval> | undefined;
    frame = setInterval(() => {
      setProgress((prev) => {
        const delta = target - prev;
        if (Math.abs(delta) < 1) {
          if (frame) clearInterval(frame);
          return target;
        }
        return prev + Math.sign(delta) * Math.max(1, Math.abs(delta) * 0.2);
      });
    }, 22);
    return () => frame && clearInterval(frame);
  }, [active.completion]);

  useEffect(() => {
    const ticker = setInterval(() => {
      setEventTick((v) => (v + 1) % 3);
    }, 1400);
    return () => clearInterval(ticker);
  }, []);

  const ringStyle = useMemo(() => {
    const degrees = (progress / 100) * 360;
    return {
      background: `conic-gradient(#64f3cf ${degrees}deg, rgba(255,255,255,0.08) ${degrees}deg 360deg)`
    };
  }, [progress]);

  const runSimulation = () => {
    setRunId((id) => id + 1);
    setAutoPlay(false);
    setActiveStep(0);

    window.setTimeout(() => setActiveStep(1), 900);
    window.setTimeout(() => setActiveStep(2), 1800);
  };

  return (
    <section id="solutions" className="section pt-3">
      <div className="container">
        <GlassContainer className="rounded-[2rem] px-5 py-8 md:px-8 md:py-10">
          <span id="features" className="sr-only">
            Features
          </span>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="section-title">Launch-ready in 3 steps</h2>
              <p className="section-subtitle">Real-time demo mode with controls, live activity, and workflow state transitions.</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveStep((p) => clampIndex(p - 1))}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200 hover:bg-white/[0.08]"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => setActiveStep((p) => clampIndex(p + 1))}
                className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200 hover:bg-white/[0.08]"
              >
                Next
              </button>
              <button
                type="button"
                onClick={() => setAutoPlay((v) => !v)}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  autoPlay ? 'border-[#64f3cf]/55 bg-[#64f3cf]/15 text-[#9ff7e0]' : 'border-white/15 bg-white/[0.04] text-slate-200'
                }`}
              >
                {autoPlay ? 'Autoplay On' : 'Autoplay Off'}
              </button>
              <button
                type="button"
                onClick={runSimulation}
                className="rounded-full border border-[#64f3cf]/50 bg-[#101d26] px-3 py-1.5 text-xs text-[#9ff7e0] hover:bg-[#132331]"
              >
                Run Simulation
              </button>
            </div>
          </div>

          <div className="mt-9 grid items-start gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-3">
              {steps.map((step, idx) => {
                const selected = idx === activeStep;
                return (
                  <button
                    type="button"
                    key={step.name}
                    onClick={() => {
                      setAutoPlay(false);
                      setActiveStep(idx);
                    }}
                    className={`glass-card rounded-2xl px-4 py-3 text-left transition ${
                      selected ? 'border-[#64f3cf]/45 bg-[#111e2a]/70 shadow-[0_10px_30px_rgba(0,0,0,0.28)]' : ''
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
                <div className="absolute inset-3 rounded-full p-[10px] transition-all duration-300" style={ringStyle}>
                  <div className="h-full w-full rounded-full bg-[#0f1722]" />
                </div>
                <div className="absolute inset-[28%] grid place-items-center rounded-full border border-white/10 bg-[#0f1722]/95">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Step 0{activeStep + 1}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{active.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{Math.round(progress)}% complete</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Live Activity Feed</p>
                  <p className="text-[10px] text-slate-500">run #{runId}</p>
                </div>
                <ul className="mt-3 grid gap-2 text-xs text-slate-300">
                  {active.events.map((event, idx) => (
                    <li
                      key={`${event}-${runId}`}
                      className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 transition ${
                        idx <= eventTick
                          ? 'border-[#64f3cf]/30 bg-[#0f1f1b] text-[#b9fdea]'
                          : 'border-white/10 bg-black/20 text-slate-300'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${idx <= eventTick ? 'bg-[#64f3cf]' : 'bg-slate-500'}`} />
                      {event}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {active.checks.map((check, idx) => (
                    <div
                      key={`${check}-${runId}`}
                      className={`rounded-md border px-2 py-1.5 text-[10px] ${
                        idx <= eventTick
                          ? 'border-[#64f3cf]/35 bg-[#64f3cf]/10 text-[#a8f9e2]'
                          : 'border-white/10 bg-black/20 text-slate-400'
                      }`}
                    >
                      {check}
                    </div>
                  ))}
                </div>
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
