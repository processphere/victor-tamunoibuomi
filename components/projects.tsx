import { content } from "@/lib/content";
import { Section, SectionHeader, SectionDivider } from "@/components/ui";
import { FadeIn } from "@/components/anim/fade-in";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/icons";

export function Projects() {
  return (
    <>
      <SectionDivider />
      <Section id="projects" className="mx-auto max-w-7xl px-6 py-28">
        <FadeIn>
          <SectionHeader
            index="03"
            eyebrow="Projects"
            title="Selected work."
            description={content.sectionDescriptions.projects}
          />
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.projects.map((project, i) => (
            <FadeIn key={project.title} delay={Math.min(i * 0.06, 0.2)}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.04]">
                <div className="relative flex aspect-[16/10] items-center justify-center border-b border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent">
                  <span className="font-mono text-3xl text-zinc-700 transition-colors group-hover:text-accent/70">
                    {project.emoji}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 font-mono text-xs text-zinc-600"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
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
                  <div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-4">
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
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-12 text-center">
            <a
              href={content.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
              View all on GitHub
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}