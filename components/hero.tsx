import Image from "next/image";
import { content } from "@/lib/content";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { HeroItem } from "@/components/anim/hero-enter";
import { FilePanel } from "@/components/anim/file-panel";

const socials = [
  { label: "GitHub", href: content.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: content.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${content.email}`, Icon: MailIcon },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[840px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.09),transparent_65%)]"
      />
      <div className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 pb-24 pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto]">
          <HeroItem>
          <div>
            <p className="mb-6 font-mono text-sm text-zinc-400">
              <span className="text-accent">$</span> echo $USER — {content.role}
            </p>
            <h1 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              {content.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              {content.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
              >
                View work
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
              >
                Contact me
              </a>
            </div>
            <div className="mt-14 flex items-center gap-5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition-colors hover:text-zinc-100"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <span className="h-4 w-px bg-white/10" aria-hidden="true" />
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for work
              </span>
            </div>
          </div>
          </HeroItem>
          {content.photo && (
            <HeroItem delay={0.15}>
            <div className="mx-auto shrink-0">
              <Image
                src={content.photo}
                alt={`Portrait of ${content.name}`}
                width={320}
                height={320}
                priority
                className="h-56 w-56 rounded-2xl border border-white/10 object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
            </div>
            </HeroItem>
          )}
        </div>
        <FilePanel />
      </div>
    </section>
  );
}