const trust = ['Vercel', 'Loom', 'Cash App', 'Loops', 'Zapier', 'Raycast'];

export default function TrustRow() {
  return (
    <div className="mt-14 border-t border-white/10 pt-5">
      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Trusted by startup teams</p>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-400 md:grid-cols-6">
        {trust.map((item) => (
          <div key={item} className="rounded-full border border-white/10 bg-white/[0.02] px-2 py-2">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
