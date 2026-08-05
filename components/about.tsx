import { content } from "@/lib/content";
import { Eyebrow, Section } from "@/components/ui";
import { FadeIn } from "@/components/anim/fade-in";

export function About() {
  return (
    <Section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <Eyebrow>About</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
          Turning ideas into software that ships.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
        <p className="text-lg leading-relaxed text-zinc-400">
          {content.about.intro}
        </p>
        <ul className="space-y-4">
          {content.about.points.map((point) => (
            <li key={point} className="flex gap-3 text-zinc-300">
              <span aria-hidden="true" className="font-mono text-accent">
                →
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          Based in {content.location}
        </p>
      </FadeIn>
    </Section>
  );
}