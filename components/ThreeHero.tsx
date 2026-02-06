'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeonBars() {
  const group = useRef<THREE.Group>(null);

  const bars = useMemo(
    () =>
      Array.from({ length: 34 }).map((_, i) => ({
        x: -2 + (i % 17) * 0.25,
        z: -1.6 + Math.floor(i / 17) * 1.4,
        h: 0.8 + Math.random() * 1.9,
        speed: 0.4 + Math.random() * 0.8
      })),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;

    group.current.children.forEach((child, i) => {
      const spec = bars[i];
      child.position.y = Math.sin(t * spec.speed + i * 0.45) * 0.22;
      child.scale.y = 0.8 + Math.abs(Math.sin(t * (spec.speed + 0.2) + i)) * 0.8;
    });
  });

  return (
    <group ref={group}>
      {bars.map((bar, i) => (
        <mesh key={i} position={[bar.x, 0, bar.z]}>
          <boxGeometry args={[0.08, bar.h, 0.08]} />
          <meshStandardMaterial color={i % 3 === 0 ? '#3afcff' : '#2dfdc5'} emissive="#1ee4bd" emissiveIntensity={1.1} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0.1, 1.5, 4.2], fov: 54 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#05070c']} />
        <ambientLight intensity={0.2} />
        <pointLight color="#2dfdc5" position={[0, 2, 2]} intensity={22} distance={6.2} />
        <pointLight color="#4e8fff" position={[2, 1, -2]} intensity={10} distance={7} />
        <NeonBars />
      </Canvas>
    </div>
  );
}

