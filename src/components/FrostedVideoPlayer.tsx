"use client";

import { motion } from "framer-motion";
import DriveVideoPlayer from "./DriveVideoPlayer";

type FrostedVideoPlayerProps = {
  driveId?: string;
  src?: string;
  label?: string;
  title?: string;
  caption?: string;
  className?: string;
};

export default function FrostedVideoPlayer({
  driveId,
  src,
  label,
  title,
  caption,
  className = "",
}: FrostedVideoPlayerProps) {
  const videoSrc = driveId ? `/api/videos/${encodeURIComponent(driveId)}` : src;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121316]/80 shadow-[0_40px_120px_rgba(0,0,0,0.24)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <div className="relative overflow-hidden rounded-[26px] bg-[#111315]/90 backdrop-blur-2xl">
        <div className="absolute inset-x-0 top-0 z-10 flex flex-wrap items-center justify-between gap-3 p-4">
          {label && (
            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-white/85 backdrop-blur-sm">
              {label}
            </span>
          )}
          {title && (
            <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              {title}
            </span>
          )}
        </div>

        <div className="relative aspect-[16/9] w-full bg-black">
          {videoSrc ? (
            <DriveVideoPlayer
              src={videoSrc}
              title={title || "Video player"}
              className="absolute inset-0"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-sm text-white/70">
              Video preview unavailable
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.22))]" />
        </div>

        {caption && (
          <div className="border-t border-white/10 px-5 py-4 text-sm text-[var(--ink-soft)]">
            {caption}
          </div>
        )}
      </div>
    </motion.div>
  );
}
