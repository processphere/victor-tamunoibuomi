import { content } from "@/lib/content";
import { Eyebrow, Section } from "@/components/ui";
import { FadeIn } from "@/components/anim/fade-in";

export function Skills() {
  return (
    <Section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <Eyebrow>Skills</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
          The stack I reach for every day.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.skills.map((group) => (
          <div
            key={group.group}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/30"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              {group.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </FadeIn>
    </Section>
  );
}