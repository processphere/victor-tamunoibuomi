import { content } from "@/lib/content";
import { AccordionSection } from "@/components/accordion";
import { CheckIcon, FocusIcon, MailIcon, PinIcon } from "@/components/icons";

const facts = [
  { label: "Email", value: content.email, Icon: MailIcon, href: `mailto:${content.email}` },
  { label: "Location", value: content.location, Icon: PinIcon },
  { label: "Focus", value: "Full-Stack Web", Icon: FocusIcon },
  { label: "Status", value: content.status, Icon: CheckIcon },
];

export function About() {
  return (
    <AccordionSection
      id="about"
      index="01"
      eyebrow="About"
      title="Turning ideas into software that ships."
      description={content.sectionDescriptions.about}
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="max-w-2xl text-xl leading-relaxed text-zinc-300">
            {content.about.intro}
          </p>
          <ul className="mt-10 space-y-5">
            {content.about.points.map((point) => (
              <li key={point} className="flex items-start gap-4 text-zinc-200">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/30 text-accent"
                >
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-lg leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {facts.map(({ label, value, Icon, href }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <Icon className="h-5 w-5 text-accent" />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-1 block truncate text-sm text-zinc-100 hover:text-white"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-zinc-100">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </AccordionSection>
  );
}