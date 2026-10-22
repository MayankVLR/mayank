"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
};

export default function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`group h-[320px] w-full [perspective:1200px] ${className}`}
      onMouseEnter={() => !reduceMotion && setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--paper-card)] [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--dark)] text-[#edebe3] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </motion.div>
    </div>
  );
}
