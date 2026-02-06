const columns = {
  Product: ['Overview', 'Pricing', 'Changelog'],
  Resources: ['Docs', 'Security Playbook', 'Status'],
  Company: ['About', 'Careers', 'Contact']
};

export default function Footer() {
  return (
    <footer id="company" className="border-t border-border/80 pb-10 pt-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-4">
        <div>
          <p className="font-semibold text-text">SecurePEKKA</p>
          <p className="mt-3 text-sm text-muted">Security built for startup teams that ship fast.</p>
          <a href="mailto:contact@securepekka.com" className="mt-3 block text-sm text-neon">
            contact@securepekka.com
          </a>
        </div>

        {Object.entries(columns).map(([key, links]) => (
          <div key={key}>
            <p className="text-sm font-semibold text-text">{key}</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-text">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-border/70 px-6 pt-5 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} SecurePEKKA</span>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">DPA</a>
        </div>
      </div>
    </footer>
  );
}
