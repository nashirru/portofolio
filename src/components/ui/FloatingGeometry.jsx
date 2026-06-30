/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * FloatingGeometry — Decorative 3D geometric shapes for section ambiance.
 *
 * Renders a semi-transparent torus knot or icosahedron that floats
 * and rotates slowly. Sits behind content as atmospheric decoration,
 * complementing the aurora blobs with actual 3D geometry.
 *
 * Props:
 *   - type: 'torusKnot' | 'icosahedron' (default 'torusKnot')
 *   - color: string (default '#06B6D4')
 *   - opacity: number 0-1 (default 0.15)
 *   - wireframe: boolean (default true)
 *   - speed: number (default 0.2)
 *   - position: [x, y, z] (default [0, 0, -5])
 *   - scale: number (default 1.5)
 */

// ---------- Inner 3D shape ----------
function GeometryShape({
  type = 'torusKnot',
  color = '#06B6D4',
  opacity = 0.15,
  wireframe = true,
  speed = 0.2,
}) {
  const meshRef = useRef();
  const initialY = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Slow rotation on all axes
    meshRef.current.rotation.x += delta * speed * 0.3;
    meshRef.current.rotation.y += delta * speed * 0.5;
    meshRef.current.rotation.z += delta * speed * 0.2;

    // Gentle floating bob using sine wave
    const t = state.clock.elapsedTime;
    meshRef.current.position.y = initialY.current + Math.sin(t * 0.4) * 0.3;
    meshRef.current.position.x = Math.sin(t * 0.2) * 0.2;
  });

  const geometry = (() => {
    switch (type) {
      case 'icosahedron':
        return <icosahedronGeometry args={[1.2, 0]} />;
      case 'torusKnot':
      default:
        return <torusKnotGeometry args={[1, 0.4, 100, 16]} />;
    }
  })();

  return (
    <mesh ref={meshRef}>
      {geometry}
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={opacity}
        wireframe={wireframe}
        metalness={0.3}
        roughness={0.8}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// ---------- Public wrapper ----------
export default function FloatingGeometry({
  type = 'torusKnot',
  color = '#06B6D4',
  opacity = 0.15,
  wireframe = true,
  speed = 0.2,
  position = [0, 0, -5],
  scale = 1.5,
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
        style={{ background: 'transparent' }}
      >
        <group position={position} scale={scale}>
          <GeometryShape
            type={type}
            color={color}
            opacity={opacity}
            wireframe={wireframe}
            speed={speed}
          />
        </group>
      </Canvas>
    </div>
  );
}
