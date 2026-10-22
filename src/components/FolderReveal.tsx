"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type FolderItem = {
  id: string;
  label: string;
  color: string;
  items: string[];
};

type FolderRevealProps = {
  folders: FolderItem[];
};

export default function FolderReveal({ folders }: FolderRevealProps) {
  const [openId, setOpenId] = useState<string | null>(folders[0]?.id ?? null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {folders.map((folder) => {
        const isOpen = openId === folder.id;
        return (
          <div key={folder.id} className="relative">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : folder.id)}
              className="relative w-full text-left"
              aria-expanded={isOpen}
            >
              {/* Folder tab */}
              <div
                className="relative z-10 ml-4 inline-block rounded-t-xl px-5 py-2 font-[family-name:var(--font-ibm-plex-mono)] text-xs uppercase tracking-wider text-white"
                style={{ background: folder.color }}
              >
                {folder.label}
              </div>

              {/* Folder body */}
              <motion.div
                className="relative overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--paper-card)] shadow-[0_20px_40px_rgba(21,22,27,0.08)]"
                animate={{
                  height: isOpen ? 220 : 140,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              >
                {/* Folder flap */}
                <motion.div
                  className="absolute left-0 right-0 top-0 origin-top rounded-t-[20px]"
                  style={{
                    height: 60,
                    background: `linear-gradient(180deg, ${folder.color}33 0%, ${folder.color}11 100%)`,
                    borderBottom: "1px solid var(--line)",
                  }}
                  animate={{ rotateX: isOpen ? -25 : 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                />

                <div className="relative z-[1] flex h-full flex-col justify-end p-6 pt-14">
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.ul
                        key="open"
                        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-2"
                      >
                        {folder.items.map((item, i) => (
                          <motion.li
                            key={item}
                            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="flex items-center gap-2 text-sm text-[var(--ink-soft)]"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ background: folder.color }}
                            />
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    ) : (
                      <motion.p
                        key="closed"
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-[var(--muted)]"
                      >
                        Click to open folder
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
