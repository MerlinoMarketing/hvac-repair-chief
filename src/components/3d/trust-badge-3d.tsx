// @ts-nocheck
"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

/* ---------- Shield shape via ExtrudeGeometry ---------- */
function createShieldShape(): THREE.Shape {
  const shape = new THREE.Shape();

  // Shield outline
  shape.moveTo(0, 1.0);
  shape.lineTo(0.7, 0.7);
  shape.lineTo(0.8, 0.2);
  shape.quadraticCurveTo(0.8, -0.4, 0.4, -0.8);
  shape.quadraticCurveTo(0.1, -1.05, 0, -1.1);
  shape.quadraticCurveTo(-0.1, -1.05, -0.4, -0.8);
  shape.quadraticCurveTo(-0.8, -0.4, -0.8, 0.2);
  shape.lineTo(-0.7, 0.7);
  shape.lineTo(0, 1.0);

  return shape;
}

const shieldShape = createShieldShape();
const extrudeSettings: THREE.ExtrudeGeometryOptions = {
  depth: 0.15,
  bevelEnabled: true,
  bevelThickness: 0.03,
  bevelSize: 0.03,
  bevelSegments: 4,
};

/* ---------- Badge mesh ---------- */
function ShieldBadge({
  label,
  hovered,
}: {
  label: string;
  hovered: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetScale = useRef(1);
  const targetRotY = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Target values
    targetScale.current = hovered ? 1.05 : 1.0;
    const idleOsc = Math.sin(state.clock.elapsedTime * 1.2) * (3 * Math.PI / 180);
    targetRotY.current = hovered
      ? (15 * Math.PI) / 180
      : idleOsc;

    // Lerp
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotY.current,
      delta * 4
    );
    const s = THREE.MathUtils.lerp(
      meshRef.current.scale.x,
      targetScale.current,
      delta * 6
    );
    meshRef.current.scale.set(s, s, s);
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, -0.075]}>
        <extrudeGeometry args={[shieldShape, extrudeSettings]} />
        <meshPhysicalMaterial
          color="oklch(0.66 0.12 60)"
          metalness={0.9}
          roughness={0.15}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
        />
      </mesh>
      <Html center position={[0, -0.05, 0.15]} distanceFactor={3} style={{ pointerEvents: "none" }}>
        <div className="max-w-[80px] text-center text-[9px] font-bold leading-tight text-gray-900/80">
          {label}
        </div>
      </Html>
    </group>
  );
}

/* ---------- Fallback ---------- */
function BadgeFallback({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-[oklch(0.66_0.12_60/0.2)] to-[oklch(0.66_0.12_60/0.1)]">
      <span className="text-[10px] font-bold text-gray-600">{label}</span>
    </div>
  );
}

/* ---------- Export ---------- */
export function TrustBadge3D({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-[100px] w-[90px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Suspense fallback={<BadgeFallback label={label} />}>
        <Canvas
          camera={{ position: [0, 0, 3], fov: 30 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 5, 5]} intensity={1.2} />
          <directionalLight position={[-2, 3, -1]} intensity={0.3} />
          <ShieldBadge label={label} hovered={hovered} />
        </Canvas>
      </Suspense>
    </div>
  );
}
