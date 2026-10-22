import DraggableTicker from "@/components/DraggableTicker";
import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";
import { brands } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Mayank Jagtap",
  description: "Get in touch about motion, story, or the next fun brand campaign.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pb-10 pt-[140px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <Reveal>
                <div className="flex items-center gap-2.5 font-[family-name:var(--font-ibm-plex-mono)] text-[12.5px] uppercase tracking-[0.14em] text-[var(--ink-soft)] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)] before:content-['']">
                  CONTACT
                </div>
                <h1 className="mt-3.5 max-w-[780px] font-[family-name:var(--font-space-grotesk)] text-[clamp(40px,6vw,72px)] font-semibold leading-[1.05] tracking-tight">
                  Let&apos;s build something that moves people.
                </h1>
                <p className="mt-6 max-w-[480px] text-[17px] text-[var(--ink-soft)]">
                  Always up for a chat about motion, story, or the next fun brand campaign.
                  Drop a line and I&apos;ll get back to you.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="mailto:mayankjagtap11@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-[26px] py-[15px] text-[14.5px] font-semibold text-[var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent)]"
                  >
                    mayankjagtap11@gmail.com
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-[26px] py-[15px] text-[14.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--ink)]"
                  >
                    Resume ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mayank-jagtap/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-[26px] py-[15px] text-[14.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--ink)]"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="rounded-[24px] border border-[var(--line)] bg-[var(--dark)] p-[22px] text-[#edebe3] flex flex-col gap-5 max-w-[400px] w-full max-md:mt-10 ml-auto max-md:mx-auto">
                <div
                  className="aspect-[16/11] w-full overflow-hidden rounded-[16px] bg-cover bg-center"
                  style={{ backgroundImage: `url('/contact-visual.png')` }}
                />
                <div>
                  <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] uppercase tracking-[0.12em] text-[var(--accent)] mb-1">
                    MORE WORK & CHANNELS
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-[#c3c1b7]">
                    Check out editing reels, updates, and design archives on other platforms.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.instagram.com/mayank_why_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] hover:bg-[rgba(255,255,255,0.1)] px-5 py-3 font-semibold text-[13.5px] transition-all hover:-translate-y-0.5"
                  >
                    <span>Instagram</span>
                    <span className="text-xs text-[#8b897e] font-normal">@mayank_why_ ↗</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@mayank-why"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] hover:bg-[rgba(255,255,255,0.1)] px-5 py-3 font-semibold text-[13.5px] transition-all hover:-translate-y-0.5"
                  >
                    <span>YouTube</span>
                    <span className="text-xs text-[#8b897e] font-normal">@mayank-why ↗</span>
                  </a>
                  <a
                    href="https://www.behance.net/mayankjagtap1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] hover:bg-[rgba(255,255,255,0.1)] px-5 py-3 font-semibold text-[13.5px] transition-all hover:-translate-y-0.5"
                  >
                    <span>Behance</span>
                    <span className="text-xs text-[#8b897e] font-normal">mayankjagtap ↗</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-16 max-md:px-8">
        <ScrollText text="Great motion starts with a conversation let's make something worth watching." />
      </section>

      <section className="py-[80px] pb-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <DraggableTicker items={brands} />
          </Reveal>
          <div className="mt-16 border-t border-[var(--line)] pt-6 text-center text-[13px] text-[var(--ink-soft)]">
            <span>© 2026 Designed by Mayank</span>
          </div>
        </div>
      </section>
    </>
  );
}

