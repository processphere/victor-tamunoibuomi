"use client";

import { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useCursor } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

const ACCENT = "#34d399";

export const LOCATIONS = [
  { name: "Harvoxx, Port Harcourt", lat: 4.82, lng: 7.03 },
  { name: "TechTan, Port Harcourt", lat: 4.79, lng: 7.07 },
];

function latLngToVec3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function Marker({
  loc,
}: {
  loc: { name: string; lat: number; lng: number };
}) {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const pos = latLngToVec3(loc.lat, loc.lng, 1.47);

  return (
    <group position={pos}>
      <mesh
        scale={hovered ? 1.7 : 1}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color={hovered ? "#6ee7b7" : ACCENT} />
      </mesh>
      <Html
        center
        distanceFactor={8}
        position={[0, 0.16, 0]}
        style={{ pointerEvents: "none" }}
      >
        <span
          className={`whitespace-nowrap rounded-full border bg-background/90 px-2.5 py-1 font-mono text-[11px] backdrop-blur-sm transition-colors duration-300 ${
            hovered
              ? "border-accent text-accent"
              : "border-white/10 text-zinc-400"
          }`}
        >
          {loc.name.split(",")[0]}
        </span>
      </Html>
    </group>
  );
}

function GlobeScene() {

  const gridPositions = useMemo(() => {
    const pts: number[] = [];
    const r = 1.45;
    const circle = (fn: (t: number) => THREE.Vector3) => {
      for (let i = 0; i < 48; i++) {
        const a = (i / 48) * Math.PI * 2;
        const b = ((i + 1) / 48) * Math.PI * 2;
        const p1 = fn(a);
        const p2 = fn(b);
        pts.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
      }
    };
    for (let lng = 0; lng < 180; lng += 30) {
      const phi = (lng - 90) * (Math.PI / 180);
      circle(
        (t) =>
          new THREE.Vector3(
            r * Math.sin(t) * Math.cos(phi),
            r * Math.cos(t),
            r * Math.sin(t) * Math.sin(phi),
          ),
      );
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const th = lat * (Math.PI / 180);
      circle(
        (t) =>
          new THREE.Vector3(
            r * Math.cos(th) * Math.sin(t),
            r * Math.sin(th),
            r * Math.cos(th) * Math.cos(t),
          ),
      );
    }
    return new Float32Array(pts);
  }, []);

  return (
    <group rotation={[0.4, 0, -0.35]}>
      <mesh>
        <sphereGeometry args={[1.45, 48, 48]} />
        <meshStandardMaterial
          color="#0c0c0c"
          roughness={0.75}
          metalness={0.15}
        />
      </mesh>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[gridPositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.55} />
      </lineSegments>

      {LOCATIONS.map((loc) => {
        const pos = latLngToVec3(loc.lat, loc.lng, 1.47);
        return (
          <group key={loc.name} position={pos}>
            <mesh>
              <sphereGeometry args={[0.035, 16, 16]} />
              <meshBasicMaterial color={ACCENT} />
            </mesh>
            <Html
              center
              distanceFactor={8}
              position={[0, 0.14, 0]}
              style={{ pointerEvents: "none" }}
            >
              <span className="whitespace-nowrap rounded-full border border-accent/30 bg-background/90 px-2.5 py-1 font-mono text-[11px] text-accent backdrop-blur-sm">
                {loc.name.split(",")[0]}
              </span>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export function Globe() {
  const reduce = useReducedMotion();
  return (
    <Canvas
      camera={{ position: [0, 0, 4.3], fov: 45 }}
      dpr={[1, 2]}
      style={{ background: "transparent", touchAction: "none" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 4]} intensity={1.2} />
      <GlobeScene />
      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={6}
        enableZoom
        autoRotate={!reduce}
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
}