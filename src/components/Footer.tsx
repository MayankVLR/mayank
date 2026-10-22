"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["10%", "-4%"]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-[var(--dark)] px-10 py-[120px] pb-10 text-[#edebe3] max-md:px-6">
      <div className="mx-auto max-w-[1480px]">
        <Reveal>
          <div className="flex items-center gap-2.5 font-[family-name:var(--font-ibm-plex-mono)] text-[12.5px] uppercase tracking-[0.14em] text-[#9c9a8e] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)] before:content-['']">
            COULDN&apos;T CATCH ME THERE?
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-0 max-w-[780px] font-[family-name:var(--font-space-grotesk)] text-[clamp(34px,6vw,68px)] font-semibold leading-[1.05] tracking-tight text-[#f4f3ec]">
            Reach out to me here.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-[22px] max-w-[440px] text-[15px] text-[#9c9a8e]">
            Always up for a chat about motion, story, or the next fun brand campaign.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:mayankjagtap11@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-[26px] py-[15px] text-[14.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[var(--dark)]"
            >
              mayankjagtap11@gmail.com
            </a>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--dark-line)] px-[26px] py-[15px] text-[14.5px] font-semibold text-[#edebe3] transition-all hover:-translate-y-0.5 hover:border-white"
            >
              Back to work ↑
            </Link>
          </div>
        </Reveal>

        <div className="mt-[100px] flex flex-wrap items-center justify-between gap-4 border-t border-[var(--dark-line)] pt-[26px] text-[13px] text-[#8b897e]">
          <span>© 2026 Designed by Mayank</span>
          <div className="flex gap-[22px]">
            <a
              href="https://www.instagram.com/mayank_why_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9b7ac] transition-colors hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.behance.net/mayankjagtap1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9b7ac] transition-colors hover:text-white"
            >
              Behance
            </a>
            <a
              href="https://www.youtube.com/@mayank-why"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9b7ac] transition-colors hover:text-white"
            >
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/in/mayank-jagtap/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9b7ac] transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {!reduceMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-[-4%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-[family-name:var(--font-space-grotesk)] text-[min(20vw,260px)] font-bold tracking-tight text-[rgba(255,255,255,0.045)]"
          style={{ y: watermarkY, opacity: watermarkOpacity }}
        >
          MAYANK
        </motion.div>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-4%] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-[family-name:var(--font-space-grotesk)] text-[min(20vw,260px)] font-bold tracking-tight text-[rgba(255,255,255,0.045)]"
        >
          MAYANK
        </div>
      )}
    </footer>
  );
}
