import CaseStudiesSection from "@/components/CaseStudiesSection";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { caseStudies } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Mayank Jagtap",
  description: "The story behind the brief, the approach, and what shipped at the end.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pb-10 pt-[140px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="CASE STUDIES"
              title="A closer look at the case study."
              note="The story behind the brief, the approach, and what shipped at the end."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-[130px]">
        <div className="mx-auto max-w-[1480px] px-16 max-md:px-8">
          <CaseStudiesSection studies={caseStudies.slice(0, 1)} showAll />
        </div>
      </section>
    </>
  );
}



