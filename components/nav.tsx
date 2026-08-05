"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

export function Nav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [photoOk, setPhotoOk] = useState(true);
  const showPhoto = content.logo !== "" && photoOk;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const go = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(href);
  };

  const avatarClass = scrolled
    ? "h-11 w-11 rounded-full border border-white/10 bg-white object-cover ring-1 ring-accent/40 sm:h-12 sm:w-12"
    : "h-40 w-40 rounded-full border border-white/10 bg-white object-cover ring-2 ring-accent/40 sm:h-56 sm:w-56";

  const monogramClass = scrolled
    ? "h-11 w-11 rounded-full border border-white/10 bg-white/[0.03] font-mono text-lg font-medium text-accent ring-1 ring-accent/40 sm:h-12 sm:w-12"
    : "h-40 w-40 rounded-full border border-white/10 bg-white/[0.03] font-mono text-4xl font-medium text-accent ring-2 ring-accent/40 sm:h-56 sm:w-56 sm:text-5xl";

  return (
    <motion.header
      initial={{ y: reduce ? 0 : -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-2 sm:py-2.5" : "py-3.5 sm:py-4"
        }`}
      >
        <a
          href="#top"
          onClick={close}
          className="flex items-center gap-3"
          aria-label={content.name}
        >
          {showPhoto ? (
            <Image
              src={content.logo}
              alt=""
              width={224}
              height={224}
              onError={() => setPhotoOk(false)}
              className={`${avatarClass} shrink-0 transition-all duration-300`}
            />
          ) : (
            <span
              aria-hidden="true"
              className={`${monogramClass} flex shrink-0 items-center justify-center transition-all duration-300`}
            >
              {content.firstName.charAt(0)}
            </span>
          )}
        </a>

        <ul className="hidden items-center gap-6 sm:flex">
          {content.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={go(link.href)}
                className="group relative text-[13px] font-mono uppercase tracking-[0.15em] text-zinc-300 transition-colors duration-300 hover:text-zinc-100"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/30 hover:text-white sm:hidden"
        >
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[4px]"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[4px]"
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/5 sm:hidden"
          >
            <ul className="px-6 pb-6 pt-3">
              {content.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={go(link.href)}
                    className="flex items-center justify-between border-b border-white/5 py-4 font-mono text-sm uppercase tracking-[0.15em] text-zinc-200 transition-colors hover:text-accent"
                  >
                    {link.label}
                    <span className="text-accent">→</span>
                  </a>
                </li>
              ))}
              <li className="pt-5">
                <a
                  href={`mailto:${content.email}`}
                  onClick={close}
                  className="flex w-full items-center justify-center rounded-full bg-zinc-100 px-5 py-3.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
                >
                  {content.email}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}