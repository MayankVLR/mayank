"use client";

import { useEffect, useRef, useState } from "react";

type DriveVideoPlayerProps = {
  driveId?: string;
  src?: string;
  title: string;
  poster?: string;
  className?: string;
};

export default function DriveVideoPlayer({
  driveId,
  src,
  title,
  poster,
  className = "",
}: DriveVideoPlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playRequestedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackError, setPlaybackError] = useState("");
  const videoSrc = src || (driveId ? `/api/videos/${encodeURIComponent(driveId)}` : undefined);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === playerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    setPlaybackError("");
    if ((video.paused && !playRequestedRef.current) || video.ended) {
      playRequestedRef.current = true;
      video.play().catch((error: unknown) => {
        if (
          typeof error === "object" &&
          error !== null &&
          "name" in error &&
          error.name === "AbortError"
        ) {
          return;
        }

        playRequestedRef.current = false;
        setIsPlaying(false);
        console.error("Video playback failed", error);
        setPlaybackError("Video couldn't be played. Check that the Drive file is shared publicly.");
      });
    } else {
      playRequestedRef.current = false;
      video.pause();
    }
  };

  const toggleFullscreen = async () => {
    const player = playerRef.current;
    if (!player) return;

    setPlaybackError("");
    try {
      if (document.fullscreenElement === player) {
        await document.exitFullscreen();
      } else {
        await player.requestFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen request failed", error);
      setPlaybackError("Fullscreen isn't available in this browser.");
    }
  };

  return (
    <div ref={playerRef} className={`group relative h-full w-full overflow-hidden bg-black ${className}`}>
      {videoSrc ? (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            preload="none"
            playsInline
            className="absolute inset-0 h-full w-full object-contain"
            onPlay={() => {
              playRequestedRef.current = true;
              setIsPlaying(true);
            }}
            onPause={() => {
              playRequestedRef.current = false;
              setIsPlaying(false);
            }}
            onEnded={() => {
              playRequestedRef.current = false;
              setIsPlaying(false);
            }}
            onError={() => {
              setIsPlaying(false);
              setPlaybackError("Video couldn't be loaded. Check that the Drive file is shared publicly.");
            }}
          />
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={`${isPlaying ? "Pause" : "Play"} ${title}`}
            aria-pressed={isPlaying}
            className="absolute inset-0 flex items-center justify-center bg-transparent transition-colors hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-white"
          >
            <span
              aria-hidden="true"
              className={`flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-opacity ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </span>
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : `View ${title} fullscreen`}
            aria-pressed={isFullscreen}
            className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-sm transition-colors hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            {isFullscreen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v5H3m18 0h-5V3M3 16h5v5m8 0v-5h5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8V3h5m8 0h5v5M3 16v5h5m8 0h5v-5" />
              </svg>
            )}
          </button>
          {playbackError && (
            <p role="status" className="absolute inset-x-0 bottom-3 bg-black/75 px-3 py-2 text-center text-sm text-white">
              {playbackError}
            </p>
          )}
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-white/70">
          Video preview unavailable
        </div>
      )}
    </div>
  );
}
