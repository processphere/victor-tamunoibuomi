"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleY }}
        className="fixed inset-y-0 left-0 z-[60] w-1 origin-top bg-accent shadow-[0_0_12px_rgba(52,211,153,0.6)]"
      />
      <motion.div
        aria-hidden="true"
        style={{ scaleY }}
        className="fixed inset-y-0 right-0 z-[60] w-1 origin-bottom bg-accent/70 shadow-[0_0_12px_rgba(52,211,153,0.4)]"
      />
    </>
  );
}