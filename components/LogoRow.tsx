const logos = ['PROTOCOIL', 'STACKNOVA', 'LUMENPAY', 'AEROBYTE', 'MINTCAST', 'ZENTRIC'];

export default function LogoRow() {
  return (
    <section className="section pt-2">
      <div className="container">
        <div className="surface grid grid-cols-2 gap-2 p-3 md:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-white/5 py-4 text-center text-[11px] font-semibold tracking-[0.18em] text-slate-500"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

