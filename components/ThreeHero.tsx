'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeonBars() {
  const group = useRef<THREE.Group>(null);

  const bars = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        x: -1.6 + (i % 13) * 0.26,
        z: -1.2 + Math.floor(i / 13) * 1.2,
        h: 0.9 + Math.random() * 1.6,
        speed: 0.22 + Math.random() * 0.5
      })),
    []
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;

    group.current.children.forEach((child, i) => {
      const spec = bars[i];
      child.position.y = Math.sin(t * spec.speed + i * 0.52) * 0.13;
      child.scale.y = 0.92 + Math.abs(Math.sin(t * (spec.speed + 0.14) + i)) * 0.58;
    });
  });

  return (
    <group ref={group}>
      {bars.map((bar, i) => (
        <mesh key={i} position={[bar.x, 0, bar.z]}>
          <boxGeometry args={[0.06, bar.h, 0.06]} />
          <meshStandardMaterial
            color={i % 4 === 0 ? '#5d96ff' : '#26efbe'}
            emissive={i % 4 === 0 ? '#3368cc' : '#12ae8e'}
            emissiveIntensity={1.05}
            metalness={0.2}
            roughness={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0.2, 1.2, 4.1], fov: 50 }} dpr={[1, 1.4]}>
        <color attach="background" args={['#060a12']} />
        <ambientLight intensity={0.16} />
        <pointLight color="#24e5b7" position={[0.2, 2, 1.8]} intensity={18} distance={6} />
        <pointLight color="#6f8fff" position={[2.2, 1.2, -2]} intensity={7} distance={7} />
        <NeonBars />
      </Canvas>
    </div>
  );
}

