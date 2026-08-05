import { content } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a
              href="#top"
              className="font-mono text-sm font-medium tracking-tight"
            >
              {content.name}
              <span className="text-accent">_</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              {content.role} crafting fast, accessible, and well-crafted web
              products.
            </p>
          </div>
          <nav aria-label="Footer">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {content.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={content.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={content.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${content.email}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <MailIcon className="h-4 w-4" />
                  {content.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {content.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="font-mono text-xs">
              Built with <span className="text-zinc-300">Next.js</span> &amp;{" "}
              <span className="text-zinc-300">Tailwind</span>
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/30 hover:text-zinc-100"
            >
              <ArrowUpIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}