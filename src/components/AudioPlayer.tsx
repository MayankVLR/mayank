"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Create audio element with path to public folder MP3
    const audio = new Audio("/I Like Me Better (Audio Instrumental Version).mp3");
    audio.loop = true;
    audio.volume = 0.12; // slightly increased minimal volume
    audioRef.current = audio;

    // Attempt autoplay
    const playAudio = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay prevented:", err);
        });
    };

    playAudio();

    // Event listener for user interaction to resume if autoplay was blocked
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused && !isMuted) {
        playAudio();
      }
      // Remove listeners once playing
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, [isMuted]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log(err));
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mr-3 rounded-full bg-[var(--dark)] border border-[var(--line)] px-4 py-2 text-[11px] font-[family-name:var(--font-ibm-plex-mono)] tracking-wider text-[#edebe3] shadow-lg whitespace-nowrap"
          >
            I Like Me Better (Instrumental)
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMute}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--bg)] shadow-lg hover:scale-105 transition-transform cursor-pointer"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4.5 w-4.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        ) : (
          <div className="flex items-end gap-[3px] h-3.5">
            {/* Visualizer bars */}
            <span className={`w-[2px] bg-[var(--bg)] rounded-full animate-soundbar ${isPlaying ? "" : "paused"}`} style={{ height: "60%", animationDelay: "0.1s" }} />
            <span className={`w-[2px] bg-[var(--bg)] rounded-full animate-soundbar ${isPlaying ? "" : "paused"}`} style={{ height: "100%", animationDelay: "0.3s" }} />
            <span className={`w-[2px] bg-[var(--bg)] rounded-full animate-soundbar ${isPlaying ? "" : "paused"}`} style={{ height: "40%", animationDelay: "0s" }} />
            <span className={`w-[2px] bg-[var(--bg)] rounded-full animate-soundbar ${isPlaying ? "" : "paused"}`} style={{ height: "80%", animationDelay: "0.2s" }} />
          </div>
        )}
      </button>
    </div>
  );
}
