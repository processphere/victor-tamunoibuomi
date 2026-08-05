import { content } from "@/lib/content";
import { AccordionSection } from "@/components/accordion";
import { skillIcons } from "@/components/icons";

export function Skills() {
  return (
    <AccordionSection
      id="skills"
      index="02"
      eyebrow="Skills"
      title="The stack I reach for every day."
      description={content.sectionDescriptions.skills}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.skills.map((group) => {
          const Icon = skillIcons[group.icon] ?? skillIcons.tools;
          return (
            <div
              key={group.group}
              className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/30"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors group-hover:text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-300">
                  {group.group}
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-base text-zinc-200"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-accent/70"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </AccordionSection>
  );
}