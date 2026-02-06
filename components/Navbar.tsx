'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Docs', href: '#docs' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Company', href: '#company' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-3 md:p-4">
      <nav
        className={`container flex items-center justify-between rounded-full border px-4 py-3 transition-all md:px-6 ${
          scrolled ? 'border-white/15 bg-[#0a1019]/86 shadow-[0_8px_34px_rgba(0,0,0,0.28)] backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[#5ce3c4]/70 text-[11px] text-[#70f5d2]">
            SP
          </span>
          SecurePEKKA
        </a>

        <ul className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#" className="text-sm text-slate-300 transition hover:text-white">
            Community
          </a>
          <a href="#" className="text-sm text-slate-300 transition hover:text-white">
            Log in
          </a>
          <a href="#" className="btn-primary">
            Sign up
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-sm text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? 'X' : '||'}
        </button>
      </nav>

      {open && (
        <div className="container mt-2 rounded-3xl border border-white/15 bg-[#0a1019]/95 p-5 lg:hidden">
          <div className="grid gap-3 text-sm">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-300 hover:text-white">
                {link.label}
              </a>
            ))}
            <div className="soft-divider my-1" />
            <a href="#" className="text-slate-300 hover:text-white">
              Community (Discord)
            </a>
            <a href="#" className="text-slate-300 hover:text-white">
              Log in
            </a>
            <a href="#" className="btn-primary mt-1">
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
