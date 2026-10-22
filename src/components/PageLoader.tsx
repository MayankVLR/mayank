"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg)] transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--accent)] bg-[rgba(255,255,255,0.03)] shadow-[0_0_0_20px_rgba(255,75,46,0.04)]">
          <div className="h-6 w-6 rounded-full bg-[var(--accent)] animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="text-sm uppercase tracking-[0.35em] text-[var(--ink-soft)]">Loading</div>
          <div className="h-1.5 w-32 rounded-full bg-[rgba(255,255,255,0.1)] shadow-[0_0_0_10px_rgba(255,255,255,0.02)]">
            <div className="h-1.5 w-14 rounded-full bg-[var(--accent)] animate-[pulse_1.2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
