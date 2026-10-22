import DriveVideoPlayer from "./DriveVideoPlayer";

type ProjectCardProps = {
  tag: string;
  title: string;
  gradient: string;
  driveId?: string;
};

export default function ProjectCard({ tag, title, gradient, driveId }: ProjectCardProps) {
  return (
    <article className="group block overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--paper-card)] transition-all duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5 hover:shadow-[0_26px_50px_rgba(21,22,27,0.12)]">
      <div className="relative aspect-[9/16] overflow-hidden bg-[#1a1a1a] md:aspect-[16/10]">
        {driveId ? (
          <DriveVideoPlayer
            driveId={driveId}
            title={title}
            poster={`https://drive.google.com/thumbnail?id=${driveId}&sz=w800`}
            className="absolute inset-0"
          />
        ) : (
          <div className="h-full w-full" style={{ background: gradient }} />
        )}
      </div>
      <div className="px-6 pb-[26px] pt-[22px]">
        <div className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[var(--muted)]">
          {tag !== "MOTION FILM" && tag}
        </div>
        <div className="mt-2 font-[family-name:var(--font-space-grotesk)] text-xl font-semibold">
          {title}
        </div>
      </div>
    </article>
  );
}
