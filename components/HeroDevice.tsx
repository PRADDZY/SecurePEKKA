import Navbar from './Navbar';
import TrustRow from './TrustRow';
import { GlassContainer } from './ui/Glass';
import NodeLabel from './ui/NodeLabel';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroDevice() {
  return (
    <section className="section pb-7 pt-8">
      <div className="container">
        <GlassContainer className="rounded-[2.2rem] border border-[var(--stroke-strong)] px-4 py-5 md:px-8 md:py-7">
          <Navbar />

          <div className="relative mt-14 text-center md:mt-20">
            <div className="pointer-events-none absolute left-1/2 top-[-40px] h-64 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#64f3cf]/0 via-[#64f3cf]/40 to-[#64f3cf]/0" />
            <div className="pointer-events-none absolute left-[48%] top-[-20px] h-56 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="pointer-events-none absolute left-[52%] top-[-26px] h-52 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#131a26]/70 px-4 py-1.5 text-xs text-slate-300">
              Unlock your release safety
              <ArrowIcon />
            </span>

            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              One-click for Secure <span className="bg-gradient-to-r from-[#e7fbf4] to-[#91f3d8] bg-clip-text text-transparent">Defense</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              Affordable audits and pentesting for startups shipping in the vibecoding era.
            </p>

            <div className="mt-9 flex justify-center gap-3">
              <a href="#pricing" className="pill-btn btn-primary">
                Get Started
              </a>
              <a href="#product" className="pill-btn btn-secondary">
                Discover More
              </a>
            </div>

            <NodeLabel label="Auth Review" className="left-4 top-6" />
            <NodeLabel label="API Hardening" className="right-5 top-8" />
            <NodeLabel label="Dependency Risk" className="left-0 top-28" />
            <NodeLabel label="Cloud Misconfigs" className="right-[-8px] top-32" />
            <NodeLabel label="Launch Check" className="left-10 bottom-28" />
            <NodeLabel label="Incident Readiness" className="right-8 bottom-24" />

            <div className="absolute bottom-0 left-0 hidden items-center gap-2 rounded-full border border-white/15 bg-[#0e141f]/72 px-3 py-2 text-xs text-slate-300 md:inline-flex">
              <ChevronDown />
              scroll down
            </div>
          </div>

          <TrustRow />
        </GlassContainer>
      </div>
    </section>
  );
}
