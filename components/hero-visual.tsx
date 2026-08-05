"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";
import { content } from "@/lib/content";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";

const ACCENT = "#34d399";

function PortraitScene({
  texture,
  aspect,
}: {
  texture: THREE.Texture;
  aspect: number;
}) {
  const reduce = useReducedMotion();
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const w = aspect >= 1 ? 4.3 * aspect : 4.3;
  const h = aspect >= 1 ? 4.3 : 4.3 / aspect;

  useFrame((state, delta) => {
    if (group.current && !reduce) {
      const targetY = state.pointer.x * 0.25;
      const targetX = state.pointer.y * -0.2;
      const k = Math.min(1, delta * 4);
      group.current.rotation.y += (targetY - group.current.rotation.y) * k;
      group.current.rotation.x += (targetX - group.current.rotation.x) * k;
    }
    if (ring.current && !reduce) {
      ring.current.rotation.z += delta * 0.12;
    }
  });

  const scene = (
    <group ref={group}>
      <mesh>
        <planeGeometry args={[w, h]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
      <mesh ref={ring} position={[0, 0, -0.3]}>
        <torusGeometry args={[2.12, 0.014, 12, 96]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.5} />
      </mesh>
    </group>
  );

  return reduce ? scene : <Float floatingRange={[-0.08, 0.08]}>{scene}</Float>;
}

function SceneLoader({ onError }: { onError: () => void }) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [aspect, setAspect] = useState(1);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      content.heroImage,
      (t) => {
        t.colorSpace = THREE.SRGBColorSpace;
        setAspect(t.image.width / t.image.height);
        setTexture(t);
      },
      undefined,
      () => onError(),
    );
  }, [onError]);

  if (!texture) return null;
  return <PortraitScene texture={texture} aspect={aspect} />;
}

export function HeroVisual() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative ml-auto w-full max-w-[700px]">
        <QuickLinks />
      </div>
    );
  }

  return (
    <div className="relative ml-auto w-full max-w-[420px]">
      <div className="relative aspect-square w-full overflow-hidden rounded-full">
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            style={{ background: "transparent" }}
          >
            <SceneLoader onError={() => setFailed(true)} />
          </Canvas>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-accent/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 rounded-full border border-white/10"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.14),transparent_70%)]"
      />
    </div>
  );
}

function QuickLinks() {
  const links = [
    { label: "GitHub", href: content.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: content.linkedin, Icon: LinkedInIcon },
    { label: "Email", href: `mailto:${content.email}`, Icon: MailIcon },
  ];
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
        Let&apos;s connect
      </p>
      <p className="mt-3 max-w-xs text-base leading-relaxed text-zinc-300">
        {content.status}
      </p>
      <ul className="mt-6 space-y-3">
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-medium text-zinc-200 transition-colors hover:text-accent"
            >
              <Icon className="h-4 w-4" />
              {label}
              <ArrowUpRightIcon className="h-3.5 w-3.5 text-zinc-500" />
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-2">
        {content.skills
          .flatMap((s) => s.items.slice(0, 3))
          .slice(0, 6)
          .map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-400"
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
}