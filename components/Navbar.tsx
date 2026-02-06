'use client';

import { useEffect, useState } from 'react';

const navLinks = ['Product', 'Solutions', 'Docs', 'Pricing', 'Company'];

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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all md:px-6 ${
          scrolled
            ? 'border-border/70 bg-panel/85 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-2 text-sm font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-neon/70 text-neon">
            S
          </span>
          SecurePEKKA
        </a>

        <ul className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="transition hover:text-text">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#" className="text-sm text-muted transition hover:text-text">
            Community
          </a>
          <a href="#" className="text-sm text-muted transition hover:text-text">
            Log in
          </a>
          <a
            href="#"
            className="rounded-full bg-neon px-4 py-2 text-sm font-semibold text-[#03241d] transition hover:opacity-90"
          >
            Sign up
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full border border-border lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-px w-4 bg-text" />
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-panel/95 p-4 lg:hidden">
          <div className="grid gap-3 text-sm">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-muted hover:text-text">
                {link}
              </a>
            ))}
            <hr className="border-border" />
            <a href="#" className="text-muted hover:text-text">
              Community (Discord)
            </a>
            <a href="#" className="text-muted hover:text-text">
              Log in
            </a>
            <a
              href="#"
              className="rounded-full bg-neon px-4 py-2 text-center font-semibold text-[#03241d]"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
