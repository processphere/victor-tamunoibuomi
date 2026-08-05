"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export function Nav() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [photoOk, setPhotoOk] = useState(true);
  const showPhoto = content.logo !== "" && photoOk;

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: reduce ? 0 : -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4">
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
              width={48}
              height={48}
              onError={() => setPhotoOk(false)}
              className="h-10 w-10 shrink-0 rounded-full border border-white/10 object-cover sm:h-11 sm:w-11"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-mono text-base font-medium text-accent sm:h-11 sm:w-11"
            >
              {content.firstName.charAt(0)}
            </span>
          )}
          <span className="hidden font-mono text-sm font-medium tracking-tight sm:inline">
            {content.name}
            <span className="text-accent">_</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 sm:flex">
          {content.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-mono uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:text-zinc-100"
              >
                {link.label}
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
                    onClick={close}
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