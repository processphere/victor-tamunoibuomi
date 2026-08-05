"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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

function GlobeScene() {
  const reduce = useReducedMotion();
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!reduce && group.current) group.current.rotation.y += delta * 0.15;
  });

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
    <group ref={group} rotation={[0.4, 0, -0.35]}>
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
          <mesh key={loc.name} position={pos}>
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshBasicMaterial color={ACCENT} />
          </mesh>
        );
      })}
    </group>
  );
}

export function Globe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.3], fov: 45 }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 4]} intensity={1.2} />
      <GlobeScene />
    </Canvas>
  );
}
