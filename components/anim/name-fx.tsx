"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";
import { content } from "@/lib/content";

const ACCENT = "#34d399";
const CELL = 3; // sample cell size in CSS px — smaller = crisper letterforms
const TOTAL = 3.4; // seconds of the full effect

type Particle = {
  final: THREE.Vector3;
  start: THREE.Vector3;
  rot: THREE.Vector3;
  scale: number;
  delay: number;
  tint: number; // 0 = accent, 1 = light
};

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function remap(
  t: number,
  a: number,
  b: number,
  fn: (v: number) => number,
) {
  return fn(clamp01((t - a) / (b - a)));
}

function samplePoints(
  text: string,
  w: number,
  h: number,
  font: string,
  lineHeight: number,
): THREE.Vector3[] {
  const scale = 2;
  const c = document.createElement("canvas");
  c.width = Math.max(1, w * scale);
  c.height = Math.max(1, h * scale);
  const ctx = c.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.font = font;
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "alphabetic";

  const pad = 6;
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width > w - pad && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);

  lines.forEach((ln, i) => {
    const y = lineHeight * (i + 1) - lineHeight * 0.35;
    ctx.fillText(ln, pad, y);
  });

  const data = ctx.getImageData(0, 0, c.width, c.height).data;
  const pts: THREE.Vector3[] = [];
  const cols = Math.floor(w / CELL);
  const rows = Math.floor(h / CELL);
  for (let gy = 0; gy <= rows; gy++) {
    for (let gx = 0; gx <= cols; gx++) {
      const px = Math.round(gx * CELL * scale);
      const py = Math.round(gy * CELL * scale);
      const idx = (py * c.width + px) * 4;
      if (idx < data.length && data[idx + 3] > 110) {
        pts.push(new THREE.Vector3(gx * CELL + CELL / 2, gy * CELL + CELL / 2, 0));
      }
    }
  }
  return pts;
}

function BlocksScene({
  particles,
  onFinish,
}: {
  particles: Particle[];
  onFinish: () => void;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const startTime = useRef(0);
  const finished = useRef(false);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    particles.forEach((p, i) => {
      mesh.setColorAt(
        i,
        p.tint
          ? new THREE.Color("#e4e4e7")
          : new THREE.Color(ACCENT),
      );
    });
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [particles]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    if (startTime.current === 0) startTime.current = state.clock.elapsedTime;
    const t = state.clock.elapsedTime - startTime.current;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const chaos = remap(t, 0, 1.15, easeInOut);
      const assembleAt = 0.95 + p.delay;
      const assemble = remap(t, assembleAt, assembleAt + 0.85, easeInOut);
      const resolve = remap(t, 2.9 + p.delay * 0.25, 3.38, easeInOut);

      const pos = new THREE.Vector3().copy(p.start).lerp(p.final, chaos);
      if (assemble > 0) {
        pos.copy(p.start).lerp(p.final, assemble);
      }
      if (resolve > 0) {
        pos.copy(p.final);
      }
      pos.x += Math.sin(t * 2.1 + i) * 0.018 * (1 - assemble);
      pos.y += Math.cos(t * 1.7 + i * 0.7) * 0.018 * (1 - assemble);

      const wobble = 1 - assemble;
      dummy.position.copy(pos);
      dummy.rotation.set(
        (1 - assemble) * p.rot.x + t * 1.4 * wobble,
        (1 - assemble) * p.rot.y + t * 1.1 * wobble,
        0,
      );
      dummy.scale.setScalar(
        p.scale * (1 - resolve) * Math.max(0.001, Math.min(1, assemble * 2.2)),
      );
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;

    if (!finished.current && t >= TOTAL) {
      finished.current = true;
      onFinish();
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particles.length]} frustumCulled={false}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={ACCENT} transparent opacity={0.9} />
    </instancedMesh>
  );
}

export function NameFX({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [particles, setParticles] = useState<Particle[] | null>(null);
  const [unit, setUnit] = useState(0);
  const [resolved, setResolved] = useState(false);
  const [gone, setGone] = useState(false);
  const [version, setVersion] = useState(0);
  const [error, setError] = useState(false);

  const build = useCallback(() => {
    const wrap = wrapRef.current;
    const heading = headingRef.current;
    if (!wrap || !heading) return;
    const rect = wrap.getBoundingClientRect();
    if (rect.width < 10 || rect.height < 10) return;
    const styles = window.getComputedStyle(heading);
    const fontSize = parseFloat(styles.fontSize);
    const lineHeight = fontSize * 1.08;

    const raw = samplePoints(
      content.name,
      rect.width,
      rect.height,
      styles.font,
      lineHeight,
    );
    if (raw.length === 0) {
      setError(true);
      return;
    }
    const u = 1.7 / rect.height;
    const list: Particle[] = raw.map((pt, i) => {
      const world = new THREE.Vector3(
        (pt.x - rect.width / 2) * u,
        (rect.height / 2 - pt.y) * u,
        (Math.random() - 0.5) * 0.6,
      );
      const angle = Math.random() * Math.PI * 2;
      const rad = 1.1 + Math.random() * 1.3;
      return {
        final: world,
        start: new THREE.Vector3(
          world.x + Math.cos(angle) * rad,
          world.y + Math.sin(angle) * rad,
          (Math.random() - 0.5) * 0.9,
        ),
        rot: new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          0,
        ),
        scale: CELL * u * (0.8 + Math.random() * 0.25),
        delay: (world.x / (rect.width * u)) * 0.45 + 0.5,
        tint: Math.random() < 0.12 ? 1 : 0,
      };
    });
    setUnit(u);
    setParticles(list);
    setVersion((v) => v + 1);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = window.setTimeout(build, 120);
    const ro = new ResizeObserver(() => {
      build();
    });
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => {
      window.clearTimeout(id);
      ro.disconnect();
    };
  }, [build, reduce]);

  useEffect(() => {
    if (!resolved) return;
    const id = window.setTimeout(() => setGone(true), 700);
    return () => window.clearTimeout(id);
  }, [resolved]);

  const blocksActive =
    !reduce && !error && particles !== null && unit > 0 && !gone;
  const textVisible = reduce || error || resolved;

  return (
    <div ref={wrapRef} className="relative">
      <h1
        ref={headingRef}
        aria-label={content.name}
        className={`${className ?? ""} transition-opacity duration-700 ${
          textVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {content.name.split(" ")[0]}
        <span className="text-zinc-400"> </span>
        {content.name.split(" ").slice(1).join(" ")}
      </h1>
      {blocksActive && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2"
          style={{
            opacity: resolved ? 0 : 1,
            transition: "opacity 0.7s",
          }}
        >
          <Canvas
            key={version}
            camera={{ position: [0, 0, 3.4], fov: 45 }}
            dpr={[1, 1.5]}
            frameloop={resolved ? "demand" : "always"}
            style={{ background: "transparent" }}
          >
            <BlocksScene
              particles={particles}
              onFinish={() => setResolved(true)}
            />
          </Canvas>
        </div>
      )}
    </div>
  );
}