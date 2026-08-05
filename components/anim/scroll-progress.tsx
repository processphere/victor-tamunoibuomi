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
        className="fixed inset-y-0 left-0 z-[70] w-1.5 origin-top bg-[#a78bfa] shadow-[0_0_12px_rgba(167,139,250,0.7)]"
      />
      <motion.div
        aria-hidden="true"
        style={{ scaleY }}
        className="fixed inset-y-0 right-0 z-[70] w-1.5 origin-bottom bg-[#a78bfa]/70 shadow-[0_0_12px_rgba(167,139,250,0.45)]"
      />
    </>
  );
}