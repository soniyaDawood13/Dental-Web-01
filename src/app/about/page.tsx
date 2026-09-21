import type { Metadata } from "next";
import Stats from "@/components/Stats";
import AboutStory from "@/components/AboutStory";
import Values from "@/components/Values";
import Milestones from "@/components/Milestones";

export const metadata: Metadata = {
  title: "About — BrightSmile Dental",
};

export default function AboutPage() {
  return (
    <main>
      <section className="mesh-bg pt-22 md:pt-26 pb-8 md:pb-12 text-center px-4">
        <h1 className="font-display text-2xl md:text-3xl text-(--ink)">
          Committed to your smile
        </h1>
        <p className="mt-2 text-sm text-(--ink)/65 max-w-xl mx-auto">
          For over 15 years, BrightSmile Dental has provided exceptional care
          with a personal touch.
        </p>
      </section>
      <AboutStory />
      <Stats />
      <Values />
      <Milestones />
    </main>
  );
}
