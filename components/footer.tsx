import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {content.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with <span className="text-zinc-300">Next.js</span> &amp;{" "}
          <span className="text-zinc-300">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}