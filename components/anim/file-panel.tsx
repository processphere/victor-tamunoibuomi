"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const kw = "text-sky-300";
const str = "text-accent";
const prop = "text-zinc-200";
const punct = "text-zinc-500";
const comment = "italic text-zinc-500";

function Line({
  n,
  children,
}: {
  n: number;
  children: React.ReactNode;
}) {
  return (
    <div className="fp-line grid grid-cols-[2.25rem_1fr] sm:grid-cols-[2.75rem_1fr]">
      <span className="select-none text-right text-zinc-700">{n}</span>
      <span className="pl-4">{children}</span>
    </div>
  );
}

export function FilePanel() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !bodyRef.current) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".fp-line");
      gsap.set(lines, { opacity: 0, y: 14, filter: "blur(5px)" });
      gsap.to(lines, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.055,
        scrollTrigger: {
          trigger: bodyRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, bodyRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <div className="mx-auto mt-16 w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 rounded-t-md border-b-2 border-transparent font-mono text-xs text-zinc-300">
            developer.ts
          </span>
        </div>
        <span className="hidden font-mono text-xs text-zinc-600 sm:block">
          TypeScript
        </span>
      </div>

      <div ref={bodyRef} className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed sm:p-5 sm:text-[13px]">
        <Line n={1}>
          <span className={comment}>{"//"} victor-tamunoibuomi.ts</span>
        </Line>
        <Line n={2}>
          <span className="text-zinc-800">{" "}</span>
        </Line>
        <Line n={3}>
          <span className={kw}>const</span> <span className={prop}>developer</span>{" "}
          <span className={punct}>=</span> <span className={punct}>{"{"}</span>
        </Line>
        <Line n={4}>
          <span className={prop}>  name</span>
          <span className={punct}>:</span>{" "}
          <span className={str}>&quot;{content.name}&quot;</span>
          <span className={punct}>,</span>
        </Line>
        <Line n={5}>
          <span className={prop}>  role</span>
          <span className={punct}>:</span>{" "}
          <span className={str}>&quot;{content.role}&quot;</span>
          <span className={punct}>,</span>
        </Line>
        <Line n={6}>
          <span className={prop}>  stack</span>
          <span className={punct}>:</span>{" "}
          <span className={punct}>[</span>
          <span className={str}>&quot;React&quot;</span>
          <span className={punct}>,</span>{" "}
          <span className={str}>&quot;Next.js&quot;</span>
          <span className={punct}>,</span>{" "}
          <span className={str}>&quot;TypeScript&quot;</span>
          <span className={punct}>,</span>{" "}
          <span className={str}>&quot;Node.js&quot;</span>
          <span className={punct}>],</span>
        </Line>
        <Line n={7}>
          <span className={prop}>  available</span>
          <span className={punct}>:</span>{" "}
          <span className={kw}>true</span>
          <span className={punct}>,</span>
        </Line>
        <Line n={8}>
          <span className={punct}>{"};"}</span>
        </Line>
        <Line n={9}>
          <span className="text-zinc-800">{" "}</span>
        </Line>
        <Line n={10}>
          <span className={prop}>developer</span>
          <span className={punct}>.</span>
          <span className={str}>hire</span>
          <span className={punct}>();</span>{" "}
          <span className={comment}>{"//"} let&apos;s build something great</span>
          <span aria-hidden="true" className="fp-cursor" />
        </Line>
      </div>

      <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 font-mono text-[11px] text-zinc-600">
        <span>Ln 10, Col 1</span>
        <span>UTF-8</span>
        <span>spaces: 2</span>
      </div>
    </div>
  );
}