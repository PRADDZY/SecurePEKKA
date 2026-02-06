const columns = {
  Product: ['Overview', 'Pricing', 'Changelog'],
  Resources: ['Docs', 'Security Playbook', 'Status'],
  Company: ['About', 'Careers', 'Contact']
};

export default function Footer() {
  return (
    <footer id="company" className="border-t border-white/10 pb-10 pt-12">
      <div className="container grid gap-8 md:grid-cols-4">
        <div>
          <p className="font-semibold text-white">SecurePEKKA</p>
          <p className="body-muted mt-3 text-sm">Security built for startup teams that ship fast.</p>
          <a href="mailto:contact@securepekka.com" className="mt-3 block text-sm text-[#71f6d8]">
            contact@securepekka.com
          </a>
        </div>

        {Object.entries(columns).map(([key, links]) => (
          <div key={key}>
            <p className="text-sm font-semibold text-white">{key}</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-400">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs text-slate-500">
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
