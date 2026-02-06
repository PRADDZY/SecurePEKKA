import Image from 'next/image';

const trust = [
  { name: 'Vercel', src: '/logos/vercel.svg' },
  { name: 'Loom', src: '/logos/loom.svg' },
  { name: 'Cash App', src: '/logos/cashapp.svg' },
  { name: 'Loops', src: '/logos/loops.png' },
  { name: 'Zapier', src: '/logos/zapier.svg' },
  { name: 'Raycast', src: '/logos/raycast.svg' }
];

export default function TrustRow() {
  return (
    <div className="mt-14 border-t border-white/10 pt-5">
      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Trusted by startup teams</p>

      <div className="trust-ribbon mt-4">
        <div className="trust-track">
          {[...trust, ...trust].map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2"
            >
              <Image src={item.src} alt={item.name} width={16} height={16} className="h-4 w-4 object-contain opacity-90" />
              <span className="text-xs text-slate-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
