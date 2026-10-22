"use client";

import { useReducedMotion } from "framer-motion";

type DraggableTickerProps = {
  items: string[];
  className?: string;
};

export default function DraggableTicker({ items, className = "" }: DraggableTickerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden border-t border-[var(--line)] pt-[22px] ${className}`}>
      <p className="mb-3 font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
        Brand Projects I Worked On
      </p>
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex gap-16 w-max ${reduceMotion ? "" : "animate-marquee-right hover:[animation-play-state:paused]"
            }`}
        >
          {/* Sub-container 1 */}
          <div className="flex gap-16">
            {items.map((item, i) => (
              <span
                key={`${item}-1-${i}`}
                className="whitespace-nowrap font-[family-name:var(--font-ibm-plex-mono)] text-[clamp(28px,4vw,48px)] font-medium tracking-[0.06em] text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
              >
                {item}
              </span>
            ))}
          </div>
          {/* Sub-container 2 */}
          <div className="flex gap-16">
            {items.map((item, i) => (
              <span
                key={`${item}-2-${i}`}
                className="whitespace-nowrap font-[family-name:var(--font-ibm-plex-mono)] text-[clamp(28px,4vw,48px)] font-medium tracking-[0.06em] text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
