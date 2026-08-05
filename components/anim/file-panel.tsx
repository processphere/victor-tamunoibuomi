"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const codeLines = [
  <span key="1">
    <span className="text-zinc-500">// </span>
    <span className="text-zinc-300">victor-tamunoibuomi.ts</span>
  </span>,
  <span key="2">
    <span className="text-zinc-400">const</span>{" "}
    <span className="text-zinc-200">developer</span>{" "}
    <span className="text-zinc-500">=</span> <span className="text-zinc-500">{"{"}</span>
  </span>,
  <span key="3">
    <span className="pl-4 text-zinc-400">name</span>
    <span className="text-zinc-500">:</span>{" "}
    <span className="text-accent">&quot;Victor Shadrach&quot;</span>
    <span className="text-zinc-500">,</span>
  </span>,
  <span key="4">
    <span className="pl-4 text-zinc-400">role</span>
    <span className="text-zinc-500">:</span>{" "}
    <span className="text-accent">&quot;Full-Stack Developer&quot;</span>
    <span className="text-zinc-500">,</span>
  </span>,
  <span key="5">
    <span className="pl-4 text-zinc-400">stack</span>
    <span className="text-zinc-500">:</span>{" "}
    <span className="text-zinc-500">[</span>
    <span className="text-accent">&quot;React&quot;</span>
    <span className="text-zinc-500">,</span> <span className="text-accent">&quot;Next.js&quot;</span>
    <span className="text-zinc-500">,</span> <span className="text-accent">&quot;TypeScript&quot;</span>
    <span className="text-zinc-500">,</span> <span className="text-accent">&quot;Node.js&quot;</span>
    <span className="text-zinc-500">],</span>
  </span>,
  <span key="6">
    <span className="pl-4 text-zinc-400">available</span>
    <span className="text-zinc-500">:</span> <span className="text-sky-300">true</span>
    <span className="text-zinc-500">,</span>
  </span>,
  <span key="7">
    <span className="text-zinc-500">{"};"}</span>
  </span>,
  <span key="8">
    <span className="text-zinc-200">developer</span>
    <span className="text-zinc-500">.</span>
    <span className="text-accent">hire</span>
    <span className="text-zinc-500">();</span>{" "}
    <span className="text-zinc-500">{"//"}</span>{" "}
    <span className="text-zinc-400">let&apos;s build something great</span>
  </span>,
];

export function FilePanel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = ref.current?.querySelectorAll(".file-line");
    if (!lines?.length) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { opacity: 0, x: -14 },
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.09,
          ease: "power2.out",
          delay: 0.4,
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]"
    >
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-zinc-500">
          developer.ts
        </span>
      </div>
      <div className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7">
        {codeLines.map((line, i) => (
          <div key={i} className="file-line whitespace-nowrap">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}