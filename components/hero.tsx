import Image from "next/image";
import { content } from "@/lib/content";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PinIcon,
  FocusIcon,
} from "@/components/icons";
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
      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 pb-24 pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_auto]">
          <HeroItem>
            <div>
              <p className="mb-6 font-mono text-sm text-zinc-400">
                <span className="text-accent">$</span> echo $USER —{" "}
                {content.role}
              </p>
              <h1 className="max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                {content.name.split(" ")[0]}
                <span className="text-zinc-400"> </span>
                {content.name.split(" ").slice(1).join(" ")}
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-zinc-300 lg:text-2xl">
                {content.tagline}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-full bg-zinc-100 px-6 py-3.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
                >
                  View work
                  <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
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
                    className="text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
                <span className="h-4 w-px bg-white/10" aria-hidden="true" />
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  {content.status}
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

        <HeroItem delay={0.2}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
            <div className="flex items-center gap-3 bg-background px-5 py-4">
              <MailIcon className="h-4 w-4 shrink-0 text-accent" />
              <div className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  Email
                </p>
                <a
                  href={`mailto:${content.email}`}
                  className="block truncate text-sm text-zinc-300 hover:text-white"
                >
                  {content.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background px-5 py-4">
              <PinIcon className="h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  Location
                </p>
                <p className="text-sm text-zinc-200">{content.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background px-5 py-4">
              <FocusIcon className="h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  Focus
                </p>
                <p className="text-sm text-zinc-200">Full-Stack Web</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-background px-5 py-4">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
              </span>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  Status
                </p>
                <p className="text-sm text-zinc-200">Open to work</p>
              </div>
            </div>
          </div>
        </HeroItem>

        <FilePanel />
      </div>
    </section>
  );
}