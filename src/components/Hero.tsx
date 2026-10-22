"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DraggableTicker from "./DraggableTicker";
import DriveVideoPlayer from "./DriveVideoPlayer";
import { brands } from "@/lib/data";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <header ref={heroRef} className="relative flex min-h-[100svh] flex-col justify-center pb-30 pt-[140px]">
      <div className="mx-auto w-full max-w-[1480px] px-16 max-md:px-8">
        <div className="grid gap-[60px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="mx-auto max-w-[960px] text-center"
          >
            <p className="text-[clamp(28px,3.2vw,40px)] font-[family-name:var(--font-space-grotesk)] font-semibold leading-[1.08] text-[var(--ink)]">
              Mayank is a visual and motion designer.He loves biryani, Valorant and bookmarks.He currently works at Zepto in Bangalore.
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.59, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative overflow-hidden rounded-[30px] shadow-[0_30px_60px_rgba(21,22,27,0.18)]"
            style={{
              ...(reduceMotion ? {} : { y: cardY }),
            }}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1a1a1a]">
              <DriveVideoPlayer
                driveId="1ynd-82zYh7ByMdTjDOdn-xC4LkkyaNil"
                title="Featured showreel"
                poster="/hero-showreel-thumbnail.webp"
                className="absolute inset-0"
              />

              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply"
                style={{
                  background:
                    "repeating-linear-gradient(115deg, rgba(0,0,0,0.06) 0 2px, transparent 2px 5px)",
                }}
              />

              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full bg-[rgba(21,22,27,0.75)] px-4 py-2.5 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-white backdrop-blur-[10px]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#5cff9d] shadow-[0_0_0_4px_rgba(92,255,157,0.18)]" />
                Featured Showreel
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.83, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-[110px]"
        >
          <DraggableTicker items={brands} />
        </motion.div>
      </div>
    </header>
  );
}
