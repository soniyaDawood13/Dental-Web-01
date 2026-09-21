import type { Metadata } from "next";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Team — BrightSmile Dental",
};

export default function TeamPage() {
  return (
    <main>
      <section className="mesh-bg pt-26 pb-8 text-center px-6">
        <h1 className="font-display text-2xl md:text-3xl text-(--ink)">
          Meet our expert dentists
        </h1>
        <p className="mt-1 text-xs md:text-sm text-(--ink)/65 max-w-xl mx-auto">
          Our team of experienced, board-certified dentists is committed to
          personalized care with the latest techniques.
        </p>
      </section>
      <Team />
    </main>
  );
}
