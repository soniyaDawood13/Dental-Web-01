import type { Metadata } from "next";
import ServicesTabs from "@/components/ServicesTabs";

export const metadata: Metadata = {
  title: "Services — BrightSmile Dental",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="mesh-bg pt-22 md:pt-24 pb-8 md:pb-12 text-center px-6">
        <h1 className="font-display text-[22px] md:text-4xl text-(--ink)">
          Comprehensive dental care
        </h1>
        <p className="mt-2 md:mt-4 text-sm md:text-sm text-(--ink)/65 max-w-xl mx-auto">
          From routine cleanings to complex procedures, explore each area of
          care and what a visit actually includes.
        </p>
      </section>
      <ServicesTabs />
    </main>
  );
}
