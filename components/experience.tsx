import { content } from "@/lib/content";
import { Section, SectionHeader, SectionDivider } from "@/components/ui";
import { FadeIn } from "@/components/anim/fade-in";

export function Experience() {
  return (
    <>
      <SectionDivider />
      <Section id="experience" className="mx-auto max-w-7xl px-6 py-28">
        <FadeIn>
          <SectionHeader
            index="04"
            eyebrow="Experience"
            title="Where I've learned and worked."
            description={content.sectionDescriptions.experience}
          />
        </FadeIn>

        <div className="mt-14 relative">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 sm:left-[7px]"
          />
          <div className="space-y-10">
            {content.experience.map((item, i) => (
              <FadeIn key={`${item.title}-${i}`} delay={Math.min(i * 0.06, 0.2)}>
                <div className="relative flex gap-6 pl-10">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <h3 className="text-xl font-medium tracking-tight">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs text-accent">
                        {item.org}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                      {item.period} — {item.type}
                    </p>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300">
                      {item.description}
                    </p>
                    {item.tech.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-zinc-400"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}