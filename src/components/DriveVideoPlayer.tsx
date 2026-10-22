"use client";

import { useRef, useState } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const playRequestedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState("");
  const videoSrc = src || (driveId ? `/api/videos/${encodeURIComponent(driveId)}` : undefined);

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

  return (
    <div className={`group relative h-full w-full overflow-hidden bg-black ${className}`}>
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
