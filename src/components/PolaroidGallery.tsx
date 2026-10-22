"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

type PolaroidItem = {
  title: string;
  gradient: string;
  caption: string;
  rotation?: number;
};

type PolaroidGalleryProps = {
  items: PolaroidItem[];
};

export default function PolaroidGallery({ items }: PolaroidGalleryProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
      {items.map((item, i) => (
        <PolaroidCard key={item.title} item={item} index={i} reduceMotion={!!reduceMotion} />
      ))}
    </div>
  );
}

function PolaroidCard({
  item,
  index,
  reduceMotion,
}: {
  item: PolaroidItem;
  index: number;
  reduceMotion: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 200, damping: 20 });
  const baseRotation = item.rotation ?? (index % 2 === 0 ? -3 : 3);

  return (
    <motion.div
      className="mx-auto w-full max-w-[340px] cursor-pointer"
      style={
        reduceMotion
          ? { rotate: baseRotation }
          : { rotate: baseRotation, rotateX, rotateY, transformPerspective: 800 }
      }
      onMouseMove={(e) => {
        if (reduceMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={reduceMotion ? undefined : { scale: 1.03, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div className="rounded-sm bg-white p-3 pb-10 shadow-[0_18px_40px_rgba(21,22,27,0.14)]">
        <div
          className="aspect-[4/5] w-full"
          style={{ background: item.gradient }}
        />
        <p className="mt-4 text-center font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--ink)]">
          {item.title}
        </p>
        <p className="mt-1 text-center font-[family-name:var(--font-ibm-plex-mono)] text-[11px] uppercase tracking-wider text-[var(--muted)]">
          {item.caption}
        </p>
      </div>
    </motion.div>
  );
}
