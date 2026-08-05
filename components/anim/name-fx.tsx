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

function GlowPlane({ size }: { size: { width: number; height: number } }) {
  const mat = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (mat.current) {
      mat.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
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
          uniform float uTime;
          void main() {
            float cx = 0.5;
            float cy = 0.5;
            float d = distance(vUv, vec2(cx, cy));
            float pulse = 0.5 + 0.5 * sin(uTime * 1.4);
            float halo = smoothstep(0.62, 0.0, d) * (0.28 + pulse * 0.12);
            float r1 = fract(uTime * 0.25);
            float ring1 = (1.0 - smoothstep(0.0, 0.06, abs(d - r1 * 0.5))) * (1.0 - r1) * 0.30;
            float r2 = fract(uTime * 0.25 + 0.5);
            float ring2 = (1.0 - smoothstep(0.0, 0.06, abs(d - r2 * 0.5))) * (1.0 - r2) * 0.18;
            float alpha = halo + ring1 + ring2;
            gl_FragColor = vec4(uColor, alpha);
          }
        `}
      />
    </mesh>
  );
}

export function NameFx({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [ref, size] = useBoxSize<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className={`relative inline-block w-fit max-w-3xl ${className}`}
    >
      {!reduce && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <Canvas
            orthographic
            camera={{ position: [0, 0, 10], zoom: 1 }}
            dpr={[1, 2]}
            style={{ background: "transparent" }}
          >
            <GlowPlane size={size} />
          </Canvas>
        </span>
      )}
      <span className="relative z-10">{children}</span>
    </span>
  );
}