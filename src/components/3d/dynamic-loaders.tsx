"use client";

import dynamic from "next/dynamic";

export const DynamicHeroScene = dynamic(
  () => import("./hero-scene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
);

export const DynamicServiceIcon3D = dynamic(
  () => import("./service-icon").then((mod) => ({ default: mod.ServiceIcon3D })),
  { ssr: false }
);

export const DynamicTrustBadge3D = dynamic(
  () => import("./trust-badge-3d").then((mod) => ({ default: mod.TrustBadge3D })),
  { ssr: false }
);

export const DynamicAirflowParticles = dynamic(
  () => import("./airflow-particles").then((mod) => ({ default: mod.AirflowParticles })),
  { ssr: false }
);
