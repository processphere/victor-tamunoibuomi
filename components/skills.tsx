"use client";

import { motion, useReducedMotion } from "motion/react";
import { content } from "@/lib/content";
import { AccordionSection } from "@/components/accordion";
import { skillLogos } from "@/components/brand-icons";
import { skillIcons, ArrowUpRightIcon } from "@/components/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

export function Skills() {
  const reduce = useReducedMotion();
  const bullet = {
    hidden: { opacity: 0, x: reduce ? 0 : -18 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: EASE },
    },
  };

  return (
    <AccordionSection
      id="skills"
      index="02"
      eyebrow="Skills"
      title="The stack I reach for every day."
      description={content.sectionDescriptions.skills}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {content.skills.map((group) => {
          const Icon = skillIcons[group.icon] ?? skillIcons.tools;
          return (
            <div
              key={group.group}
              className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/30"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors group-hover:text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-300">
                  {group.group}
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={bullet}
                    className="flex items-center justify-between gap-3 text-base text-zinc-200"
                  >
                    <span className="flex items-center gap-3">
                      {(() => {
                        const Logo = skillLogos[item];
                        return Logo ? (
                          <Logo className="h-4 w-4 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-100" />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="h-1 w-1 rounded-full bg-accent/70"
                          />
                        );
                      })()}
                      {item}
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-zinc-400" />
                  </motion.li>
                ))}
              </ul>
            </div>
          );
        })}
      </motion.div>
    </AccordionSection>
  );
}