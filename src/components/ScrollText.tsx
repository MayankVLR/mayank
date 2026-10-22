"use client";

import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollTextProps = {
  text: string;
  className?: string;
};

function ScrollWord({
  word,
  index,
  total,
  progress,
  reduceMotion,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [12, 0]);

  if (reduceMotion) {
    return (
      <span className="mr-[0.28em] inline-block text-[var(--ink)]">{word}</span>
    );
  }

  return (
    <motion.span className="mr-[0.28em] inline-block" style={{ opacity, y }}>
      {word}
    </motion.span>
  );
}

export default function ScrollText({ text, className = "" }: ScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.65"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`py-16 ${className}`}>
      <p className="mx-auto max-w-[1100px] font-[family-name:var(--font-space-grotesk)] text-[clamp(32px,5.5vw,72px)] font-semibold leading-[1.08] tracking-tight">
        {words.map((word, i) => (
          <ScrollWord
            key={`${word}-${i}`}
            word={word}
            index={i}
            total={words.length}
            progress={scrollYProgress}
            reduceMotion={!!reduceMotion}
          />
        ))}
      </p>
    </div>
  );
}
