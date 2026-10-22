"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  note?: string;
};

export default function SectionHead({ eyebrow, title, note }: SectionHeadProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const noteY = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const noteOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="mb-[60px] flex flex-col items-start justify-between gap-[30px] md:flex-row md:items-end">
      <motion.div
        className="max-w-[640px]"
        style={reduceMotion ? undefined : { y: titleY }}
      >
        <div className="flex items-center gap-2.5 font-[family-name:var(--font-ibm-plex-mono)] text-[12.5px] uppercase tracking-[0.14em] text-[var(--ink-soft)] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)] before:content-['']">
          {eyebrow}
        </div>
        <h2 className="mt-3.5 font-[family-name:var(--font-space-grotesk)] text-[clamp(30px,4vw,46px)] font-semibold tracking-tight">
          {title}
        </h2>
      </motion.div>

      {note && (
        <motion.p
          className="max-w-[300px] text-right text-[14.5px] text-[var(--ink-soft)] max-md:text-left"
          style={reduceMotion ? undefined : { y: noteY, opacity: noteOpacity }}
        >
          {note}
        </motion.p>
      )}
    </div>
  );
}
