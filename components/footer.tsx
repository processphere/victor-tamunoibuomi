import { content } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon, FacebookIcon, ArrowUpIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a
              href="#top"
              className="font-mono text-lg font-semibold tracking-tight"
            >
              {content.name}
              <span className="text-accent">_</span>
            </a>
            <p className="mt-3 max-w-xs text-base leading-relaxed text-zinc-300">
              {content.role} crafting fast, accessible, and well-crafted web
              products.
            </p>
          </div>
          <nav aria-label="Footer">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-zinc-200">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {content.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-zinc-300 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-zinc-200">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={content.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-base text-zinc-300 transition-colors hover:text-accent"
                >
                  <GitHubIcon className="h-5 w-5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={content.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-base text-zinc-300 transition-colors hover:text-accent"
                >
                  <LinkedInIcon className="h-5 w-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={content.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-base text-zinc-300 transition-colors hover:text-accent"
                >
                  <FacebookIcon className="h-5 w-5" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${content.email}`}
                  className="inline-flex items-center gap-2.5 text-base text-zinc-300 transition-colors hover:text-accent"
                >
                  <MailIcon className="h-5 w-5" />
                  {content.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-base text-zinc-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {content.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="font-mono text-sm">
              Built with <span className="text-accent">Next.js</span> &amp;{" "}
              <span className="text-accent">Tailwind</span>
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ArrowUpIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}