"use client";

import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export function Nav() {
  const reduce = useReducedMotion();
  return (
    <motion.header
      initial={{ y: reduce ? 0 : -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight"
        >
          {content.name}
          <span className="text-accent">_</span>
        </a>
        <ul className="flex items-center gap-6">
          {content.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-mono uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}