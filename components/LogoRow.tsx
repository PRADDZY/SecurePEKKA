const logos = ['PROTOCOIL', 'STACKNOVA', 'LUMENPAY', 'AEROBYTE', 'MINTCAST', 'ZENTRIC'];

export default function LogoRow() {
  return (
    <section className="section-wrap pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-3 rounded-xl2 border border-border/60 bg-panel/25 p-6 md:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-center text-xs font-semibold tracking-[0.16em] text-slate-500 opacity-75"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
