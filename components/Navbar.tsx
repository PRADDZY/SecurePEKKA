const links = ['Home', 'Product', 'Solutions', 'Features', 'Pricing', 'FAQ'];

function NavbarPill({ label }: { label: string }) {
  return (
    <a
      href={label === 'Home' ? '#' : `#${label.toLowerCase()}`}
      className="inline-flex rounded-full px-3 py-1.5 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white"
    >
      {label}
    </a>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M12 3.2L5.4 6v5.7c0 4.3 2.9 7.8 6.6 9.1 3.7-1.3 6.6-4.8 6.6-9.1V6L12 3.2z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0f141d]/70 px-3 py-1.5 text-xs font-semibold tracking-[0.08em] text-slate-200">
        <ShieldIcon />
        SecurePEKKA
      </a>

      <nav className="rounded-full border border-white/15 bg-[#101620]/75 px-2 py-1">
        <ul className="flex flex-wrap items-center gap-1">
          {links.map((link) => (
            <li key={link}>
              <NavbarPill label={link} />
            </li>
          ))}
        </ul>
      </nav>

      <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-slate-200 transition hover:text-white">
        Create Account
        <ArrowIcon />
      </a>
    </div>
  );
}
