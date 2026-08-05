"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon } from "@/components/icons";
import { HeroVisual } from "@/components/hero-visual";
import { content } from "@/lib/content";

const STORAGE_KEY = "vv:intro-seen";

const highlighted = (text: string) => {
  const parts = text.split("solved");
  return (
    <>
      {parts[0]}
      <span className="text-accent">solved</span>
      {parts.slice(1).join("solved")}
    </>
  );
};

export function QuoteIntro() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = window.setTimeout(() => setVisible(true), 250);
    return () => window.clearTimeout(t);
  }, [reduce]);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]"
          />
          <motion.div
            className="relative px-6 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto w-44 sm:w-52">
              <HeroVisual />
            </div>
            <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              A note before you explore
            </p>
            <blockquote className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-medium leading-snug tracking-tight text-zinc-100 sm:text-5xl">
              {highlighted(content.quote.text)}
            </blockquote>
            <p className="mt-6 font-mono text-sm text-zinc-500">
              {content.quote.attribution}
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-accent/90"
            >
              Enter the portfolio
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}