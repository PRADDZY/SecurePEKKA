import { ReactNode } from 'react';

type GlassContainerProps = {
  children: ReactNode;
  className?: string;
};

export function GlassContainer({ children, className = '' }: GlassContainerProps) {
  return (
    <section className={`glass-card reveal relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(100,243,207,0.08),transparent_35%)]" />
      <div className="relative">{children}</div>
    </section>
  );
}

type StatCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function StatCard({ title, children, className = '' }: StatCardProps) {
  return (
    <article className={`glass-card rounded-2xl p-5 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">{title}</p>
      <div className="mt-4">{children}</div>
    </article>
  );
}
