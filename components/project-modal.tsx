"use client";

import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  CloseIcon,
  GitHubIcon,
} from "@/components/icons";

export type GalleryProject = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  screenshots: string[];
  captions: string[];
};

export function ProjectGalleryModal({
  project,
  onClose,
}: {
  project: GalleryProject;
  onClose: () => void;
}) {
  const images = useMemo(
    () => [project.image, ...(project.screenshots ?? [])].filter(Boolean),
    [project],
  );

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
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} gallery`}
    >
      <motion.div
        className="relative flex h-full w-full flex-col overflow-hidden rounded-none border-white/10 bg-zinc-950 shadow-2xl sm:max-h-full sm:max-w-4xl sm:rounded-2xl"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <span className="mt-1 block font-mono text-xs text-zinc-500">
              {images.length} screenshot{images.length > 1 ? "s" : ""}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="shrink-0 rounded-full border border-white/15 p-2 text-zinc-400 transition-colors hover:border-white/40 hover:text-white"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-5 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 sm:p-6">
          {images.map((src, i) => (
            <figure key={src}>
              {project.captions?.[i] && (
                <p className="mb-2 text-sm font-medium text-zinc-300">
                  {project.captions[i]}
                </p>
              )}
              <img
                src={src}
                alt={
                  project.captions?.[i] ||
                  `${project.title} screenshot ${i + 1}`
                }
                className="w-full rounded-lg border border-white/10 bg-white/[0.02] object-contain"
              />
            </figure>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 px-6 py-4">
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/70"
              >
                Live
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            )}
          </div>
          <span className="hidden font-mono text-xs text-zinc-500 sm:block">
            {project.title}
            {project.tech.length > 0 && ` · ${project.tech.join(" / ")}`}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}