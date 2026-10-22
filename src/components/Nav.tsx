"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-0 right-0 z-[100] flex justify-center px-4">
      <div className="relative flex w-full max-w-[1100px] items-center justify-between gap-4 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(12,14,20,0.95)] px-3 py-2.5 pl-[22px] shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-[18px] max-md:gap-2">
        <Link
          href="/"
          className="whitespace-nowrap font-[family-name:var(--font-ibm-plex-mono)] text-sm font-medium tracking-wide text-[var(--ink)]"
        >
          MAYANK /
        </Link>

        <div className="hidden items-center gap-[26px] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13.5px] transition-colors ${
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]))
                  ? "text-[var(--ink)]"
                  : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full bg-[var(--ink)] px-[18px] py-2.5 text-[13.5px] font-semibold text-[var(--bg)] transition-all hover:-translate-y-px hover:bg-[var(--accent)] md:inline-flex"
          >
            Let&apos;s talk ↗
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] text-[var(--ink)] transition hover:bg-[rgba(255,255,255,0.14)] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full bg-current transition duration-300 ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full bg-current transition duration-300 ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </div>

        {open ? (
          <div className="absolute left-0 right-0 top-full mt-3 rounded-[30px] border border-[rgba(255,255,255,0.08)] bg-[rgba(12,14,20,0.98)] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-[18px] md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-[18px] px-4 py-3 text-[15px] font-medium transition-colors ${
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]))
                      ? "text-[var(--ink)]"
                      : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--ink)] px-4 py-3 text-[15px] font-semibold text-[var(--bg)] transition hover:bg-[var(--accent)]"
                onClick={() => setOpen(false)}
              >
                Let&apos;s talk ↗
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
