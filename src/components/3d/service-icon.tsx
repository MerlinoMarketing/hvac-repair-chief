// @ts-nocheck
"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ---------- Icon geometry builders ---------- */

function WrenchIcon({ hovered }: { hovered: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useServiceIconAnimation(ref, hovered);

  return (
    <group ref={ref}>
      {/* Handle */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.15, 0.8, 0.1]} />
        <meshStandardMaterial color="oklch(0.62 0.04 200)" metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.5, 0.25, 0.1]} />
        <meshStandardMaterial color="oklch(0.66 0.12 60)" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Jaw notch */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.15, 0.12, 0.12]} />
        <meshStandardMaterial color="oklch(0.62 0.04 200)" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

function ThermometerIcon3D({ hovered }: { hovered: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useServiceIconAnimation(ref, hovered);

  return (
    <group ref={ref}>
      {/* Stem */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.9, 12]} />
        <meshStandardMaterial color="oklch(0.62 0.04 200)" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Bulb */}
      <mesh position={[0, -0.35, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="oklch(0.66 0.12 60)" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Mercury fill */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 0.6, 8]} />
        <meshStandardMaterial color="#e05050" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
}

function FlameIcon3D({ hovered }: { hovered: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useServiceIconAnimation(ref, hovered);

  return (
    <group ref={ref}>
      {/* Outer flame */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.35, 1.0, 8]} />
        <meshStandardMaterial color="oklch(0.66 0.12 60)" metalness={0.4} roughness={0.5} />
      </mesh>
      {/* Inner flame */}
      <mesh position={[0, -0.1, 0]}>
        <coneGeometry args={[0.18, 0.6, 8]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.3} roughness={0.6} />
      </mesh>
    </group>
  );
}

function FanIcon3D({ hovered }: { hovered: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useServiceIconAnimation(ref, hovered);

  return (
    <group ref={ref}>
      {/* Hub */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
        <meshStandardMaterial color="oklch(0.62 0.04 200)" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Blades */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} rotation={[0, (i * Math.PI) / 2, Math.PI / 2]} position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.02, 0.15]} />
          <meshStandardMaterial color="oklch(0.66 0.12 60)" metalness={0.7} roughness={0.25} />
        </mesh>
      ))}
    </group>
  );
}

function GaugeIcon3D({ hovered }: { hovered: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useServiceIconAnimation(ref, hovered);

  return (
    <group ref={ref}>
      {/* Gauge face */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.06, 8, 32]} />
        <meshStandardMaterial color="oklch(0.62 0.04 200)" metalness={0.7} roughness={0.25} />
      </mesh>
      {/* Needle */}
      <mesh position={[0.1, 0.15, 0]} rotation={[0, 0, -0.6]}>
        <boxGeometry args={[0.04, 0.35, 0.03]} />
        <meshStandardMaterial color="oklch(0.66 0.12 60)" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Center pivot */}
      <mesh>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="oklch(0.66 0.12 60)" metalness={0.85} roughness={0.15} />
      </mesh>
    </group>
  );
}

function SirenIcon3D({ hovered }: { hovered: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useServiceIconAnimation(ref, hovered);

  return (
    <group ref={ref}>
      {/* Base */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.6, 0.15, 0.4]} />
        <meshStandardMaterial color="oklch(0.62 0.04 200)" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Light dome */}
      <mesh position={[0, 0.05, 0]}>
        <sphereGeometry args={[0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#ef4444" metalness={0.5} roughness={0.3} emissive="#ef4444" emissiveIntensity={0.3} />
      </mesh>
      {/* Top beacon */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 0.15, 12]} />
        <meshStandardMaterial color="oklch(0.66 0.12 60)" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

/* ---------- Shared animation hook ---------- */
function useServiceIconAnimation(
  ref: React.RefObject<THREE.Group | null>,
  hovered: boolean
) {
  const targetRotation = useRef(0);

  useFrame((state, delta) => {
    if (!ref.current) return;

    if (hovered) {
      targetRotation.current += delta * 10; // fast spin
    } else {
      // Idle oscillation: 5 degrees
      targetRotation.current = Math.sin(state.clock.elapsedTime * 1.5) * (5 * Math.PI / 180);
    }

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      hovered ? targetRotation.current : targetRotation.current,
      hovered ? 0.3 : 0.1
    );
  });
}

/* ---------- Icon map ---------- */
const iconComponents: Record<string, React.ComponentType<{ hovered: boolean }>> = {
  snowflake: WrenchIcon,      // AC Repair
  thermometer: ThermometerIcon3D, // Installation
  flame: FlameIcon3D,         // Heating
  wind: FanIcon3D,            // Duct
  calendar: GaugeIcon3D,      // Maintenance
  siren: SirenIcon3D,         // Emergency
};

/* ---------- Fallback ---------- */
function IconFallback({ icon }: { icon: string }) {
  const labels: Record<string, string> = {
    snowflake: "AC",
    thermometer: "Install",
    flame: "Heat",
    wind: "Duct",
    calendar: "Maint",
    siren: "24/7",
  };
  return (
    <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-[oklch(0.62_0.04_200/0.15)] to-[oklch(0.66_0.12_60/0.15)]">
      <span className="text-xs font-bold text-gray-500">{labels[icon] ?? icon}</span>
    </div>
  );
}

/* ---------- Export ---------- */
export function ServiceIcon3D({ icon }: { icon: string }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = iconComponents[icon];

  if (!IconComponent) {
    return <IconFallback icon={icon} />;
  }

  return (
    <div
      className="h-[150px] w-[150px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Suspense fallback={<IconFallback icon={icon} />}>
        <Canvas
          camera={{ position: [0, 0, 2.5], fov: 35 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 4, 5]} intensity={1.0} />
          <IconComponent hovered={hovered} />
        </Canvas>
      </Suspense>
    </div>
  );
}
