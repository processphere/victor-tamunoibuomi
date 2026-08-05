import Image from "next/image";
import { content } from "@/lib/content";
import { AccordionSection } from "@/components/accordion";
import { Globe } from "@/components/anim/globe";
import { BuildingIcon } from "@/components/icons";

export function Experience() {
  return (
    <AccordionSection
      id="experience"
      index="04"
      eyebrow="Experience"
      title="Where I've learned and worked."
      description={content.sectionDescriptions.experience}
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10"
          />
          <div className="space-y-10">
            {content.experience.map((item, i) => (
              <div key={`${item.title}-${i}`} className="relative flex gap-6 pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background"
                />
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500">
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={`${item.org} logo`}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <BuildingIcon className="h-6 w-6 transition-colors group-hover:text-accent" />
                    )}
                  </span>
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
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[280px] w-full sm:h-[360px]">
          <Globe />
        </div>
      </div>
    </AccordionSection>
  );
}