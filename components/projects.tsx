import { content } from "@/lib/content";
import { Eyebrow, Section } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";
import { FadeIn } from "@/components/anim/fade-in";

export function Projects() {
  return (
    <Section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <Eyebrow>Projects</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
          Selected work.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04]"
          >
            <div className="flex aspect-[16/10] items-center justify-center border-b border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent">
              <span className="font-mono text-5xl text-zinc-700 transition-colors group-hover:text-accent/70">
                {project.emoji}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-medium tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/70"
                  >
                    Live
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    Code
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      </FadeIn>
    </Section>
  );
}