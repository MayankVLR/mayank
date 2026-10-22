import Link from "next/link";
import Reveal from "@/components/Reveal";
import DriveVideoPlayer from "@/components/DriveVideoPlayer";
import { caseStudies } from "@/lib/data";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  return {
    title: study ? `${study.title} — Mayank Jagtap` : "Case Study — Mayank Jagtap",
    description: study ? study.brief : "Deep dive into a project.",
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const study = caseStudies[currentIndex];

  if (!study) {
    return (
      <section className="flex min-h-[100svh] items-center justify-center pt-[140px]">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Case study not found</h1>
          <Link href="/case-studies" className="mt-4 inline-block text-[var(--accent)]">
            Back to case studies
          </Link>
        </div>
      </section>
    );
  }

  const videoDriveId = "videoDriveId" in study ? study.videoDriveId : "";
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : caseStudies[caseStudies.length - 1];
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];

  if (study.slug === "ordinary-superhero") {
    return (
      <>
        {/* NAV BACK BUTTON */}
        <section className="pb-10 pt-[140px]">
          <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 text-[14.5px] text-[var(--ink-soft)] transition-all hover:text-[var(--ink)]"
            >
              ← Back to case studies
            </Link>
          </div>
        </section>

        {/* HERO */}
        <section className="pb-12 pt-6">
          <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
            <Reveal>
              <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12.5px] uppercase tracking-[0.14em] text-[var(--ink-soft)] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)] before:content-[''] flex items-center gap-2.5">
                CASE STUDY — PERSONAL / PASSION PROJECT
              </div>
              <h1 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-[clamp(32px,5vw,64px)] font-semibold leading-[1.08] tracking-tight max-w-[900px]">
                {study.title}
              </h1>
              <p className="mt-6 max-w-[660px] text-lg text-[var(--ink-soft)] leading-relaxed">
                {(study as any).subTitle}
              </p>

              {/* Meta tags */}
              <div className="mt-10 flex flex-wrap gap-2.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--line)] px-4 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-[12px] uppercase tracking-[0.06em] text-[var(--ink-soft)]"
                  >
                    {tag}
                  </span>
                ))}
                <span className="rounded-full border border-[var(--line)] px-4 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-[12px] uppercase tracking-[0.06em] text-[var(--ink-soft)]">
                  JJK-inspired Anime Style
                </span>
              </div>

              {/* Facts Grid */}
              <div className="mt-14 grid gap-6 border-y border-[var(--line)] py-8 sm:grid-cols-2 md:grid-cols-4">
                <div className="border-r border-[var(--line)] pr-4 last:border-0 max-sm:border-r-0 max-sm:border-b max-sm:pb-4 max-sm:last:border-b-0 max-sm:last:pb-0">
                  <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.06em] text-[var(--muted)]">
                    Timeline
                  </div>
                  <div className="mt-2 text-[15.5px] font-semibold">{study.details.timeline}</div>
                </div>
                <div className="border-r border-[var(--line)] pr-4 last:border-0 max-md:border-r-0 max-sm:border-b max-sm:pb-4 max-sm:last:border-b-0 max-sm:last:pb-0">
                  <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.06em] text-[var(--muted)]">
                    Made with
                  </div>
                  <div className="mt-2 text-[15.5px] font-semibold">{study.details.scope}</div>
                </div>
                <div className="border-r border-[var(--line)] pr-4 last:border-0 max-sm:border-b max-sm:pb-4 max-sm:last:border-b-0 max-sm:last:pb-0">
                  <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.06em] text-[var(--muted)]">
                    Co-created with
                  </div>
                  <div className="mt-2 text-[15.5px] font-semibold">Tharun</div>
                </div>
                <div className="last:border-0">
                  <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.06em] text-[var(--muted)]">
                    Voiceover Script
                  </div>
                  <div className="mt-2 text-[15.5px] font-semibold">Rohan & Niraj</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WATCH SECTION (VIDEO EMBED) */}
        <section className="py-12">
          <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
            <Reveal>
              <div className="mb-6">
                <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  WATCH
                </div>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold">
                  First draft
                </h2>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-[var(--line)] bg-[#15161b] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                <DriveVideoPlayer
                  driveId={videoDriveId}
                  title={study.title}
                  poster={`https://drive.google.com/thumbnail?id=${videoDriveId}&sz=w1200`}
                  className="absolute inset-0"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-16">
          <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
            <Reveal>
              <div className="mb-10">
                <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  OVERVIEW
                </div>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold">
                  What the film is about
                </h2>
              </div>

              <div className="border-t border-[var(--line)]">
                {(
                  [
                    { label: "Brief", text: study.brief },
                    { label: "Approach", text: study.approach },
                    { label: "Result", text: study.result },
                  ] as const
                ).map((block) => (
                  <div key={block.label} className="grid gap-6 border-b border-[var(--line)] py-8 md:grid-cols-[160px_1fr]">
                    <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12.5px] uppercase tracking-[0.08em] font-semibold text-[var(--accent)]">
                      {block.label}
                    </div>
                    <p className="max-w-[700px] text-[15.5px] leading-relaxed text-[var(--ink-soft)]">
                      {block.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16">
          <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
            <Reveal>
              <div className="mb-12">
                <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  PROCESS
                </div>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold">
                  How it came together, day by day.
                </h2>
              </div>

              <div className="flex flex-col border-t border-[var(--line)]">
                {((study as any).timelineSteps || []).map((step: any) => (
                  <div key={step.day} className="grid gap-6 border-b border-[var(--line)] py-8 md:grid-cols-[160px_1fr]">
                    <div className="font-[family-name:var(--font-ibm-plex-mono)] text-sm font-semibold text-[var(--accent)] tracking-wide">
                      {step.day}
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-[20px] font-semibold text-[var(--ink)]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[640px] text-[15px] leading-relaxed text-[var(--ink-soft)]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-16">
          <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
            <Reveal>
              <div className="mb-12">
                <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  BEHIND THE FRAMES
                </div>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold">
                  Shot sets & character consistency.
                </h2>
              </div>

              <div className="space-y-16">
                {((study as any).gallery || []).map((item: any) => (
                  <div key={item.title} className="group">
                    <div className="overflow-hidden rounded-[24px] border border-[var(--line)] shadow-[0_25px_50px_rgba(21,22,27,0.06)] bg-[var(--paper-card)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                      />
                    </div>
                    <div className="mt-6 flex flex-wrap justify-between items-baseline gap-4 border-b border-[var(--line)] pb-6">
                      <h4 className="font-[family-name:var(--font-space-grotesk)] text-[19px] font-semibold text-[var(--ink)]">
                        {item.title}
                      </h4>
                      <p className="max-w-[480px] text-[14px] text-[var(--ink-soft)] leading-relaxed text-left md:text-right">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CREDITS */}
        <section className="py-16">
          <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
            <Reveal>
              <div className="mb-10">
                <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  CREDITS
                </div>
                <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold">
                  Made by.
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {((study as any).credits || []).map((credit: any) => (
                  <div key={credit.role} className="rounded-[20px] border border-[var(--line)] bg-[var(--paper-card)] p-6 shadow-sm">
                    <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11.5px] uppercase tracking-[0.06em] text-[var(--muted)]">
                      {credit.role}
                    </div>
                    <h4 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-[20px] font-semibold text-[var(--ink)]">
                      {credit.name}
                    </h4>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTAs / LINKS */}
        <section className="bg-[var(--dark)] text-[#EDEBE3] py-[100px] border-t border-[var(--dark-line)]">
          <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
            <Reveal>
              <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.14em] text-[#9C9A8E]">
                SEE THE FULL POST
              </div>
              <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-[clamp(28px,4.5vw,44px)] font-semibold leading-tight text-white max-w-[640px]">
                Watch it live on Instagram and LinkedIn.
              </h2>
              <p className="mt-4 max-w-[480px] text-[15.5px] text-[#9C9A8E] leading-relaxed">
                The finished cut, reactions, and full credits are up on both platforms.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={(study as any).links?.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-[26px] py-[15px] text-[14.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[var(--dark)]"
                >
                  View on Instagram ↗
                </a>
                <a
                  href={(study as any).links?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--dark-line)] px-[26px] py-[15px] text-[14.5px] font-semibold text-[#EDEBE3] transition-all hover:-translate-y-0.5 hover:border-white hover:text-white"
                >
                  View on LinkedIn ↗
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BOTTOM NAV */}
        <section className="border-t border-[var(--line)] py-[80px]">
          <div className="mx-auto max-w-[1480px] px-16 text-center max-md:px-8">
            <Link
              href="/case-studies"
              className="inline-flex rounded-full border border-[var(--line)] px-6 py-3 font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-[0.08em] transition-all hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)]"
            >
              ← Back to all studies
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pb-10 pt-[140px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Link
            href="/case-studies"
            className="mb-8 inline-flex items-center gap-2 text-[14.5px] text-[var(--ink-soft)] transition-all hover:text-[var(--ink)]"
          >
            ← Back to case studies
          </Link>
        </div>
      </section>

      <section className="py-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <div className="grid items-start gap-10 max-md:grid-cols-1 md:grid-cols-[1.05fr_1fr] md:gap-14">
              <div
                className="aspect-[16/10] w-full overflow-hidden rounded-[20px]"
                style={{ background: study.gradient }}
              />
              <div>
                <div className="flex flex-wrap gap-2.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--line)] px-3.5 py-1.5 font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-[0.08em] text-[var(--ink-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-[clamp(28px,3.5vw,42px)] font-semibold leading-snug tracking-tight">
                  {study.title}
                </h1>
                <div className="mt-8 space-y-6">
                  {(
                    [
                      { label: "BRIEF", text: study.brief },
                      { label: "APPROACH", text: study.approach },
                      { label: "RESULT", text: study.result },
                    ] as const
                  ).map((block) => (
                    <div key={block.label}>
                      <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] uppercase tracking-[0.12em] text-[var(--accent)]">
                        {block.label}
                      </div>
                      <p className="mt-2 max-w-[520px] text-[14.5px] leading-relaxed text-[var(--ink-soft)]">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>

                {(study as any).details && (
                  <div className="mt-10 border-t border-[var(--line)] pt-8">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] uppercase tracking-[0.12em] text-[var(--accent)]">
                          Timeline
                        </div>
                        <p className="mt-2 text-[14.5px] text-[var(--ink-soft)]">
                          {(study as any).details.timeline}
                        </p>
                      </div>
                      <div>
                        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] uppercase tracking-[0.12em] text-[var(--accent)]">
                          Scope
                        </div>
                        <p className="mt-2 text-[14.5px] text-[var(--ink-soft)]">
                          {(study as any).details.scope}
                        </p>
                      </div>
                      <div>
                        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] uppercase tracking-[0.12em] text-[var(--accent)]">
                          Tools
                        </div>
                        <p className="mt-2 text-[14.5px] text-[var(--ink-soft)]">
                          {(study as any).details.tools}
                        </p>
                      </div>
                      <div>
                        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-[12px] uppercase tracking-[0.12em] text-[var(--accent)]">
                          Deliverables
                        </div>
                        <p className="mt-2 text-[14.5px] text-[var(--ink-soft)]">
                          {(study as any).details.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-[80px]">
        <div className="mx-auto max-w-[1480px] px-16 text-center max-md:px-8">
          <Link
            href="/case-studies"
            className="inline-flex rounded-full border border-[var(--line)] px-6 py-3 font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-[0.08em] transition-all hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)]"
          >
            ← Back to all studies
          </Link>
        </div>
      </section>
    </>
  );
}

