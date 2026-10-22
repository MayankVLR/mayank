import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";
import SectionHead from "@/components/SectionHead";
import InteractiveBook from "@/components/InteractiveBook";
import { projects, graphicsPortfolio } from "@/lib/data";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function WorkPageClient() {
  return (
    <>
      <section className="pb-10 pt-[140px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="PORTFOLIO"
              title="Motion films & visual experiments."
              note={`All ${projects.length} projects showcasing motion, edits, and brand campaigns.`}
            />
          </Reveal>
        </div>
      </section>

      <section className="px-16 max-md:px-8">
        <ScrollText text="Every frame is a chance to move someone  from campaign loops to full motion films." />
      </section>

      <section className="py-[80px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <div className="mb-10 flex items-center gap-2.5 font-[family-name:var(--font-ibm-plex-mono)] text-[12.5px] uppercase tracking-[0.14em] text-[var(--ink-soft)] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)] before:content-['']">
              All projects
            </div>
          </Reveal>
          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 4) * 0.08}>
                <ProjectCard
                  tag={project.tag}
                  title={project.title}
                  gradient={project.gradient}
                  driveId={project.driveId}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="GRAPHIC DESIGN & ILLUSTRATION"
              title="Visual explorations beyond motion."
              note="Flip through a collection of brand identities, illustrations, packaging, and digital design work."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-[80px]">
              <InteractiveBook pages={graphicsPortfolio} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[80px]">
        <div className="mx-auto max-w-[1480px] px-16 text-center max-md:px-8">
          <Reveal>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[var(--ink)] px-[26px] py-[15px] text-[14.5px] font-semibold text-[var(--bg)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent)]"
            >
              Start a project ↗
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}


