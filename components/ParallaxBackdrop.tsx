'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxBackdrop() {
  const layerA = useRef<HTMLDivElement>(null);
  const layerB = useRef<HTMLDivElement>(null);
  const layerC = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let ticking = false;

    const update = () => {
      const y = window.scrollY || 0;
      if (layerA.current) {
        layerA.current.style.transform = `translate3d(0, ${y * -0.06}px, 0)`;
      }
      if (layerB.current) {
        layerB.current.style.transform = `translate3d(0, ${y * -0.1}px, 0)`;
      }
      if (layerC.current) {
        layerC.current.style.transform = `translate3d(0, ${y * -0.14}px, 0)`;
      }
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
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={layerA}
        className="absolute -left-28 top-[14vh] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(150,168,207,0.2),transparent_68%)] blur-2xl"
      />
      <div
        ref={layerB}
        className="absolute right-[-90px] top-[8vh] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(100,243,207,0.24),transparent_66%)] blur-3xl"
      />
      <div
        ref={layerC}
        className="absolute left-1/2 top-[36vh] h-[28rem] w-[3px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#82f7db]/25 to-transparent"
      />
    </div>
  );
}
