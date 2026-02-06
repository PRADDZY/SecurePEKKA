export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} SecurePEKKA</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Product</a>
          <a href="#" className="hover:text-white">Resources</a>
          <a href="#" className="hover:text-white">Company</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
