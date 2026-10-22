import Footer from "@/components/Footer";
import FolderReveal from "@/components/FolderReveal";
import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";
import SectionHead from "@/components/SectionHead";
import { experience, facts, folderItems, services } from "@/lib/data";
import type { Metadata } from "next";
import AudioPlayer from "@/components/AudioPlayer";

export const metadata: Metadata = {
  title: "About — Mayank Jagtap",
  description: "About Mayank — visual & motion designer and editor.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-10 pt-[140px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="ABOUT"
              title="A little about me  ."
              note="A motion designer who turns complex tools and rough ideas into stories brands actually connect with."
            />
          </Reveal>

          <div className="grid gap-[70px] md:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="space-y-[18px] text-[18px] leading-[1.8] text-[var(--ink-soft)]">
                <p className="max-w-[480px]">
                  Hi, I&apos;m Mayank a motion designer with a deep passion for crafting
                  compelling stories that solve real challenges for brands. I thrive on
                  exploring complex tools, mastering new techniques, and turning creative
                  obstacles into opportunities.
                </p>
                <p className="max-w-[480px]">
                  Outside of work, I explore ideas, collect inspiration, and build things
                  that reflect my style whether it&apos;s editing, designing, or just
                  experimenting.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-t border-[var(--line)]">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex justify-between border-b border-[var(--line)] py-5 text-[14.5px]"
                  >
                    <span className="font-[family-name:var(--font-ibm-plex-mono)] text-[var(--muted)]">
                      {fact.label}
                    </span>
                    <span className="max-w-[60%] text-right font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-16 max-md:px-8">
        <ScrollText text="Mastering new techniques and turning creative obstacles into opportunities every day." />
      </section>

      <section id="services" className="py-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="What I'm good at"
              title="Three things I bring to every project."
            />
          </Reveal>

          <div>
            {services.map((service, i) => (
              <Reveal key={service.index} delay={i * 0.08}>
                <div className="grid items-start gap-[30px] border-t border-[var(--line)] py-[34px] max-md:grid-cols-1 md:grid-cols-[90px_1fr_1.1fr]">
                  <span className="font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[var(--accent)]">
                    {service.index}
                  </span>
                  <span className="font-[family-name:var(--font-space-grotesk)] text-[21px] font-semibold">
                    {service.title}
                  </span>
                  <span className="max-w-[460px] text-[14.5px] text-[var(--ink-soft)]">
                    {service.desc}
                  </span>
                </div>
              </Reveal>
            ))}
            <div className="border-b border-[var(--line)]" />
          </div>
        </div>
      </section>

      <section className="py-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="ARCHIVE"
              title="Open a folder to explore."
              note="Click each folder tab to reveal something about me."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FolderReveal folders={folderItems} />
          </Reveal>
        </div>
      </section>

      <section className="py-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead eyebrow="EXPERIENCE" title="Where I've worked." />
          </Reveal>

          <div className="grid gap-[70px] md:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <div className="flex items-center gap-2.5 font-[family-name:var(--font-ibm-plex-mono)] text-[12.5px] uppercase tracking-[0.14em] text-[var(--ink-soft)] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)] before:content-['']">
                  / TIMELINE
                </div>
                <p className="mt-3.5 max-w-[340px] text-[14.5px] text-[var(--ink-soft)]">
                  From early roles to freelance projects, each one shaped how I approach
                  motion and story today.
                </p>
              </div>
            </Reveal>

            <div>
              {experience.map((step, i) => (
                <Reveal key={step.id} delay={i * 0.08}>
                  <div className="border-t border-[var(--line)] py-10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[13px] text-[var(--accent)]">
                        {step.label}
                      </div>
                      {(step as any).current && (
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#5cff9d]/10 px-2.5 py-1 font-[family-name:var(--font-ibm-plex-mono)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[#256e36] border border-[#256e36]/10">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5cff9d] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#256e36]"></span>
                          </span>
                          Currently Working
                        </div>
                      )}
                    </div>
                    <h3 className="my-2.5 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="max-w-[460px] text-[14.5px] text-[var(--ink-soft)]">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-b border-[var(--line)]" />
            </div>
          </div>
        </div>
      </section>


      <Footer />
      <AudioPlayer />
    </>
  );
}


