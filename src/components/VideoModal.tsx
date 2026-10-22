"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import DriveVideoPlayer from "./DriveVideoPlayer";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  driveId: string;
  title: string;
  tag: string;
  caption?: string;
};

export default function VideoModal({
  isOpen,
  onClose,
  driveId,
  title,
  tag,
  caption,
}: VideoModalProps) {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-[1000px] overflow-hidden rounded-[24px] border border-[var(--dark-line)] bg-[#15161b] shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-[6px] transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Wrapper */}
            <div className="relative aspect-[16/9] w-full bg-black">
              {driveId ? (
                <DriveVideoPlayer
                  driveId={driveId}
                  title={title}
                  poster={`https://drive.google.com/thumbnail?id=${driveId}&sz=w1200`}
                  className="absolute inset-0"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]">
                  Video preview unavailable
                </div>
              )}
            </div>

            {/* Info panel */}
            <div className="border-t border-[var(--dark-line)] px-8 py-6 text-[#edebe3] max-sm:px-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                    {tag}
                  </div>
                  <h3 className="mt-1.5 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold leading-tight tracking-tight text-white max-sm:text-xl">
                    {title}
                  </h3>
                  {caption && (
                    <p className="mt-2 text-[14px] text-[#8b897e] leading-relaxed max-w-[700px]">
                      {caption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
