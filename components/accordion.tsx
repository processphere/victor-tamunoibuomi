"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDownIcon } from "@/components/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AccordionSection({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [autoOpened, setAutoOpened] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoOpened) {
          setOpen(true);
          setAutoOpened(true);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoOpened]);

  useEffect(() => {
    const onRequest = (e: Event) => {
      const target = (e as CustomEvent<string>).detail;
      if (target === id) setOpen(true);
    };
    window.addEventListener("vv:open-accordion", onRequest);
    return () => window.removeEventListener("vv:open-accordion", onRequest);
  }, [id]);

  return (
    <div id={id} ref={ref} className="mx-auto max-w-7xl scroll-mt-24 px-6 pt-14 pb-20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-content`}
        className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-6 text-left transition-colors hover:border-accent/30 sm:px-8"
      >
        <span className="flex items-center gap-4 sm:gap-6">
          <span
            aria-hidden="true"
            className="font-mono text-3xl font-bold tracking-tight text-accent sm:text-5xl"
          >
            {index}
          </span>
          <span>
            <span className="block font-mono text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              {eyebrow}
            </span>
            <span className="mt-1 block text-2xl font-medium tracking-tight sm:text-4xl">
              {title}
            </span>
          </span>
        </span>
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDownIcon className="h-5 w-5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-content`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.12, ease: EASE }}
              className="px-1 pt-8 sm:px-2"
            >
              {description && (
                <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
                  {description}
                </p>
              )}
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}