/* eslint-disable react/no-unknown-property */
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * ParticleField — Subtle 3D particle system for ambient background.
 *
 * Creates a cloud of small glowing particles that slowly rotate
 * and respond to mouse movement. Designed to sit behind the hero
 * section as an atmospheric tech backdrop without competing with
 * the Lanyard card.
 *
 * Props:
 *   - particleCount: number (default 800)
 *   - baseColor: THREE.Color | string (default #06B6D4 — cyan)
 *   - mixColor: THREE.Color | string (default #8B5CF6 — purple)
 *   - opacity: number 0-1 (default 0.4)
 *   - speed: number (default 0.0003)
 *   - mouseInfluence: number (default 0.0005)
 */

// ---------- Inner particle system (rendered inside Canvas) ----------
function ParticleCloud({
  particleCount = 800,
  baseColor = '#06B6D4',
  mixColor = '#8B5CF6',
  opacity = 0.4,
  speed = 0.0003,
  mouseInfluence = 0.0005,
}) {
  const ref = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Track mouse position in normalized coords
  useEffect(() => {
    const handleMouse = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // Build particle geometry once
  const [positions, colors, sizes] = useMemo(() => {
    const count = particleCount;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    const cBase = new THREE.Color(baseColor);
    const cMix = new THREE.Color(mixColor);

    for (let i = 0; i < count; i++) {
      // Distribute in a flattened sphere (more spread on XZ)
      const radius = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4; // flattened Y
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      // Color: lerp between cyan and purple randomly
      const t = Math.random();
      const color = cBase.clone().lerp(cMix, t);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      siz[i] = 0.02 + Math.random() * 0.04;
    }

    return [pos, col, siz];
  }, [particleCount, baseColor, mixColor]);

  // Animate rotation + mouse response
  useFrame((_, delta) => {
    if (!ref.current) return;

    // Slow base rotation on Y
    ref.current.rotation.y += delta * speed * 30;

    // Subtle mouse-driven tilt (parallax)
    const mx = mouse.current.x * mouseInfluence * delta * 60;
    const my = mouse.current.y * mouseInfluence * delta * 60;
    ref.current.rotation.x += my * 0.3;
    ref.current.rotation.z += mx * 0.1;
  });

  const colorAttr = useMemo(() => new THREE.BufferAttribute(colors, 3), [colors]);
  const sizeAttr = useMemo(() => new THREE.BufferAttribute(sizes, 1), [sizes]);

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// ---------- Public wrapper ----------
export default function ParticleField(props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Defer mount slightly so the main UI paints first
    const id = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]} // capped DPR for perf
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
      >
        <ParticleCloud {...props} />
      </Canvas>
    </div>
  );
}
