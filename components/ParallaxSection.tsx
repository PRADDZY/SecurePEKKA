'use client';

import { ReactNode, useEffect, useRef } from 'react';

type ParallaxSectionProps = {
  children: ReactNode;
  intensity?: number;
  className?: string;
};

export default function ParallaxSection({
  children,
  intensity = 28,
  className = ''
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let ticking = false;

    const update = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = (viewport - rect.top) / (viewport + rect.height);
      const centered = progress - 0.5;

      const y = -centered * intensity;
      const scale = 0.985 + (1 - Math.min(1, Math.abs(centered) * 2)) * 0.015;

      element.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
      element.style.opacity = `${Math.max(0.72, 1 - Math.abs(centered) * 0.22)}`;

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: 'transform, opacity',
        transformOrigin: 'center top',
        transition: 'transform 140ms linear, opacity 220ms ease-out'
      }}
    >
      {children}
    </div>
  );
}
