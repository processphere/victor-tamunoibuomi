import { content } from "@/lib/content";
import { Section, SectionHeader, SectionDivider } from "@/components/ui";
import { FadeIn } from "@/components/anim/fade-in";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <>
      <SectionDivider />
      <Section id="contact" className="mx-auto max-w-7xl px-6 py-28">
        <FadeIn>
          <SectionHeader
            index="05"
            eyebrow="Contact"
            title="Let's build something together."
            description={content.sectionDescriptions.contact}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 grid gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                Direct line
              </p>
              <h3 className="mt-4 text-2xl font-medium tracking-tight">
                Prefer email?
              </h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-zinc-300">
                I usually reply within a day. Include a link to the project or
                job description and I&apos;ll get back to you quickly.
              </p>
              <a
                href={`mailto:${content.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
              >
                <MailIcon className="h-4 w-4" />
                {content.email}
              </a>
              <div className="mt-10 flex items-center gap-6">
                {[
                  { label: "GitHub", href: content.github, Icon: GitHubIcon },
                  { label: "LinkedIn", href: content.linkedin, Icon: LinkedInIcon },
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </a>
                ))}
              </div>
              <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {content.status}
              </p>
            </div>

            <div className="lg:border-l lg:border-white/5 lg:pl-10">
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}