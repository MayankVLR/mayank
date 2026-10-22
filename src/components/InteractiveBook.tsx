"use client";

import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

type BookPage = {
  title: string;
  subtitle: string;
  body: string;
  isCover?: boolean;
};

type InteractiveBookProps = {
  pages: BookPage[];
};

export default function InteractiveBook({ pages }: InteractiveBookProps) {
  const flipBook = useRef<any>(null);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center justify-between w-full max-w-[900px] mx-auto px-4">
        <div className="flex items-center gap-2.5 font-[family-name:var(--font-ibm-plex-mono)] text-[12.5px] uppercase tracking-[0.14em] text-[var(--ink-soft)] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)] before:content-['']">
          Design Portfolio — Interactive Book
        </div>
      </div>

      <div className="w-full max-w-[900px] mx-auto flex justify-center">
        <HTMLFlipBook
          ref={flipBook}
          width={400}
          height={500}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          useMouseEvents={true}
          usePortrait={true}
          clickEventForward={true}
          className="shadow-[0_30px_60px_rgba(21,22,27,0.2)]"
          style={{}}
          startZIndex={0}
          autoSize={true}
          swipeDistance={75}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {pages.map((page, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[var(--paper-card)] to-[var(--bg)] p-12 text-center overflow-hidden"
            >
              {page.isCover ? (
                // Cover Page
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="mb-8 h-32 w-24 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#7a1b0e] opacity-20" />
                  <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight mb-3">
                    {page.subtitle}
                  </h1>
                  <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-[0.12em] text-[var(--accent)] mb-6">
                    {page.title}
                  </p>
                  <p className="max-w-xs text-[14px] leading-relaxed text-[var(--ink-soft)]">
                    {page.body}
                  </p>
                  <div className="mt-auto pt-8 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--muted)]">
                    Flip to begin →
                  </div>
                </div>
              ) : (
                // Content Pages
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                  <div className="h-24 w-20 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[#7a1b0e] opacity-15" />
                  <p className="font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-[0.12em] text-[var(--accent)]">
                    {page.title}
                  </p>
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold tracking-tight leading-snug">
                    {page.subtitle}
                  </h2>
                  <p className="max-w-sm text-[13.5px] leading-relaxed text-[var(--ink-soft)]">
                    {page.body}
                  </p>
                </div>
              )}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
