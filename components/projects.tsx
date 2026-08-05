"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { content } from "@/lib/content";
import { AccordionSection } from "@/components/accordion";
import { ArrowUpRightIcon, GitHubIcon, ImagesIcon, ListIcon } from "@/components/icons";
import { ProjectGalleryModal } from "@/components/project-modal";
import { FeaturesModal } from "@/components/feature-modal";
import { scrollToSection } from "@/lib/scroll";

export function Projects() {
  const [activeProject, setActiveProject] = useState<(typeof content.projects)[number] | null>(null);
  const [featuresProject, setFeaturesProject] = useState<(typeof content.projects)[number] | null>(null);

  return (
    <AccordionSection
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Selected work."
      description={content.sectionDescriptions.projects}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.projects.map((project, i) => {
          const imageCount =
            1 + project.screenshots.filter(Boolean).length;
          const hasGallery = Boolean(project.image) || project.screenshots.some(Boolean);
          return (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.04]"
            >
              <button
                type="button"
                onClick={() => hasGallery && setActiveProject(project)}
                className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden border-b border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="font-mono text-3xl text-zinc-700 transition-colors group-hover:text-accent/70">
                    {project.emoji}
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 rounded-full bg-background/70 px-2 py-0.5 font-mono text-xs text-zinc-500 backdrop-blur-sm"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {hasGallery && (
                  <span className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 font-mono text-xs text-zinc-200 opacity-100 backdrop-blur-sm transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                    <ImagesIcon className="h-3.5 w-3.5" />
                    See all{imageCount > 1 ? ` (${imageCount})` : ""}
                  </span>
                )}
              </button>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
<div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-4">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        Code
                      </a>
                    ) : (
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection("#contact");
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        Code on request
                      </a>
                    )}
                    {project.features?.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setFeaturesProject(project)}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
                      >
                        <ListIcon className="h-4 w-4" />
                        Features
                      </button>
                    )}
                  </div>
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
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-12 text-center">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#contact");
          }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
        >
          <GitHubIcon className="h-4 w-4" />
          Code available on request
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>
      <AnimatePresence>
        {activeProject && (
          <ProjectGalleryModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
        {featuresProject && (
          <FeaturesModal
            project={featuresProject}
            onClose={() => setFeaturesProject(null)}
          />
        )}
      </AnimatePresence>
    </AccordionSection>
  );
}