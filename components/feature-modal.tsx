"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckIcon, CloseIcon } from "@/components/icons";

export type FeaturesProject = {
  title: string;
  features: string[];
};

export function FeaturesModal({
  project,
  onClose,
}: {
  project: FeaturesProject;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} features`}
    >
      <motion.div
        className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-6 shadow-2xl sm:p-8"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-zinc-500">
              {project.features.length} feature{project.features.length > 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-full border border-white/15 p-2 text-zinc-400 transition-colors hover:border-white/40 hover:text-white"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <ul className="mt-6 space-y-3">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm leading-relaxed text-zinc-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}