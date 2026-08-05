"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";

export function Nav() {
  const reduce = useReducedMotion();
  const [photoOk, setPhotoOk] = useState(true);
  const showPhoto = content.photo !== "" && photoOk;

  return (
    <motion.header
      initial={{ y: reduce ? 0 : -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label={content.name}
        >
          {showPhoto ? (
            <Image
              src={content.photo}
              alt=""
              width={36}
              height={36}
              onError={() => setPhotoOk(false)}
              className="h-11 w-11 shrink-0 rounded-full border border-white/10 object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-mono text-base font-medium text-accent"
            >
              {content.firstName.charAt(0)}
            </span>
          )}
          <span className="hidden font-mono text-sm font-medium tracking-tight sm:inline">
            {content.name}
            <span className="text-accent">_</span>
          </span>
        </a>
        <ul className="flex items-center gap-6">
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
      </nav>
    </motion.header>
  );
}