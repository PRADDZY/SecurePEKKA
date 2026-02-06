type NodeLabelProps = {
  label: string;
  className: string;
};

export default function NodeLabel({ label, className }: NodeLabelProps) {
  return (
    <div className={`absolute hidden items-center gap-2 md:flex ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#64f3cf]" />
      <span className="text-[11px] tracking-[0.08em] text-slate-400">{label}</span>
      <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#64f3cf]/60 to-transparent" />
    </div>
  );
}
