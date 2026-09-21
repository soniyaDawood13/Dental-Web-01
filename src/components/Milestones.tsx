"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2008", title: "Practice founded", desc: "Dr. Smith established BrightSmile Dental with a vision of exceptional patient care." },
  { year: "2012", title: "Technology upgrade", desc: "Invested in digital X-ray and CAD/CAM technology for better patient experience." },
  { year: "2015", title: "Team expansion", desc: "Added specialized pediatric and surgical departments." },
  { year: "2020", title: "5,000+ patients", desc: "Reached the milestone of serving over 5,000 satisfied patients." },
  { year: "2024", title: "Award recognition", desc: "Named 'Best Dental Practice' by the local community for the third year running." },
];

export default function Milestones() {
  return (
    <section className="max-w-2xl mx-auto px-6 md:px-8 py-6 md:py-10">
      <h2 className="font-display text-2xl md:text-3xl text-(--ink) mb-12 text-center">
        Milestones along the way
      </h2>
      <div className="space-y-8">
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex gap-6"
          >
            <div className="shrink-0 w-16 text-(--aqua-deep) font-display text-lg md:text-xl pt-0.5">{m.year}</div>
            <div className="pb-2 border-l border-black/10 pl-6 -mt-0.5">
              <h3 className="font-medium text-base md:text-lg text-(--ink)">{m.title}</h3>
              <p className="text-xs md:text-sm text-(--ink)/60 mt-1">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
