import WorkPageClient from "./WorkPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Mayank Jagtap",
  description: "Featured motion films, edits, and brand campaign work.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
