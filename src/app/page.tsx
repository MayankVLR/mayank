import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";
import SectionHead from "@/components/SectionHead";
import { caseStudies, collaborations, projects } from "@/lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-16 max-md:px-8">
        <ScrollText text="I use motion design to turn complex ideas into stories that people connect with " />
      </section>

      <section className="py-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="FEATURED WORKS"
              title="A few recent motion films."
              note="More work, edits, and experiments live in the full video archive."
            />
          </Reveal>

          <div className="grid gap-7 md:grid-cols-2">
            {projects.slice(0, 4).map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard
                  tag={project.tag}
                  title={project.title}
                  gradient={project.gradient}
                  driveId={project.driveId}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-[26px] py-[15px] text-[14.5px] font-semibold text-[var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent)]"
              >
                See all {projects.length} projects ↗
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="Projects for Leading Brands"
              title="I had the opportunity to work on campaigns."
            />
          </Reveal>

          <div className="grid gap-[22px] md:grid-cols-3">
            {collaborations.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.1}>
                <div className="flex min-h-[230px] flex-col justify-between rounded-[18px] bg-[var(--dark)] p-7 text-[#edebe3]">
                  <p className="text-[15px] leading-relaxed text-[#d8d6cc]">{item.text}</p>
                  <div className="mt-[22px] flex items-center gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-[var(--accent)] to-[#7a1b0e]" />
                    <div>
                      <div className="text-[13.5px] font-semibold">{item.name}</div>
                      <div className="text-xs text-[#8b897e]">{item.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="CASE STUDIES"
              title="A closer look at the case study."
              note="The story behind the brief, the approach, and what shipped at the end."
            />
          </Reveal>

          <CaseStudiesSection studies={caseStudies.slice(0, 1)} />

          <Reveal delay={0.15}>
            <div className="mt-4 flex justify-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-[26px] py-[15px] text-[14.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--ink)]"
              >
                Read case study →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}


