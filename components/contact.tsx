import { content } from "@/lib/content";
import { Eyebrow, Section } from "@/components/ui";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { FadeIn } from "@/components/anim/fade-in";

export function Contact() {
  return (
    <Section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-20 text-center sm:px-16">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
          Let&apos;s build something together.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          I&apos;m currently open to new projects and full-time roles. My inbox
          is always open — tell me what you&apos;re working on.
        </p>
        <a
          href={`mailto:${content.email}`}
          className="mt-8 inline-flex items-center rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
        >
          <MailIcon className="mr-2 h-4 w-4" />
          {content.email}
        </a>
        <div className="mt-8 flex items-center justify-center gap-6">
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
              className="text-zinc-500 transition-colors hover:text-zinc-100"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}