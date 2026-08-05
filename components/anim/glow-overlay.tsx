"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

const ACCENT = new THREE.Color("#34d399");

function useBoxSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setSize({ width: el.offsetWidth, height: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, size] as const;
}

function GlowPlane({
  size,
  hovered,
  reduce,
  mouse,
}: {
  size: { width: number; height: number };
  hovered: boolean;
  reduce: boolean | null;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const active = useRef(0);

  useEffect(() => {
    if (!reduce && mat.current) {
      mat.current.uniforms.uMouse.value.set(mouse.current.x, mouse.current.y);
    }
  }, [hovered, reduce, mouse]);

  useFrame((state, delta) => {
    const u = mat.current;
    if (!u) return;
    active.current += ((hovered ? 1 : 0) - active.current) * Math.min(1, delta * 5);
    u.uniforms.uActive.value = active.current;
    u.uniforms.uTime.value = state.clock.elapsedTime;
    u.uniforms.uMouse.value.lerp(
      new THREE.Vector2(mouse.current.x, mouse.current.y),
      Math.min(1, delta * 8),
    );
  });

  if (size.width === 0 || size.height === 0) return null;

  return (
    <mesh scale={[size.width, size.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={mat}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uColor: { value: ACCENT },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
          uActive: { value: 0 },
          uTime: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          precision highp float;
          varying vec2 vUv;
          uniform vec3 uColor;
          uniform vec2 uMouse;
          uniform float uActive;
          uniform float uTime;
          void main() {
            float d = distance(vUv, uMouse);
            float core = smoothstep(0.30, 0.0, d) * 0.55;
            float halo = smoothstep(0.60, 0.0, d) * 0.30;
            float ring = fract(uTime * 0.5);
            float ringA = (1.0 - smoothstep(0.0, 0.06, abs(d - ring))) * (1.0 - ring) * 0.45;
            float alpha = (core + halo + ringA) * uActive;
            gl_FragColor = vec4(uColor, alpha);
          }
        `}
      />
    </mesh>
  );
}

export function GlowOverlay({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const [ref, size] = useBoxSize<HTMLDivElement>();
  const [active, setActive] = useState(false);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;
    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = 1 - (e.clientY - rect.top) / rect.height;
    };
    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerenter", onEnter);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerenter", onEnter);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    >
      {!reduce && (
        <Canvas
          orthographic
          camera={{ position: [0, 0, 10], zoom: 1 }}
          dpr={[1, 2]}
          style={{ background: "transparent" }}
        >
          <GlowPlane
            size={size}
            hovered={active}
            reduce={reduce}
            mouse={mouse}
          />
        </Canvas>
      )}
    </div>
  );
}