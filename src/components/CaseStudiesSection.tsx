import Link from "next/link";
import Reveal from "./Reveal";

type CaseStudy = {
  slug: string;
  tags: string[];
  title: string;
  brief: string;
  approach: string;
  result: string;
  gradient: string;
  image?: string;
};

type CaseStudiesSectionProps = {
  studies: CaseStudy[];
  showAll?: boolean;
};

function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-studies/${study.slug}`}>
      <div className="group grid cursor-pointer items-start gap-10 border-t border-[var(--line)] py-[50px] transition-all max-md:grid-cols-1 md:grid-cols-[1.05fr_1fr] md:gap-14 hover:opacity-75">
        <div
          className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] transition-transform group-hover:scale-[1.02] bg-[#1a1a1a]"
        >
          {study.image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={study.image}
              alt={study.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full" style={{ background: study.gradient }} />
          )}
        </div>
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
          <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-[clamp(22px,2.8vw,30px)] font-semibold leading-snug tracking-tight group-hover:text-[var(--accent)]">
            {study.title}
          </h3>
          <p className="mt-6 max-w-[520px] text-[14.5px] leading-relaxed text-[var(--ink-soft)]">
            {study.brief}
          </p>
          <div className="mt-6 inline-flex items-center gap-1.5 font-[family-name:var(--font-ibm-plex-mono)] text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)] group-hover:text-[var(--ink)] transition-colors">
            Read Case Study <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudiesSection({ studies, showAll = false }: CaseStudiesSectionProps) {
  const visible = showAll ? studies : studies.slice(0, 1);

  return (
    <div>
      {visible.map((study, i) => (
        <Reveal key={study.slug} delay={i * 0.08}>
          <CaseStudyBlock study={study} />
        </Reveal>
      ))}
      {!showAll && studies.length > 1 && (
        <div className="border-b border-[var(--line)]" />
      )}
    </div>
  );
}
