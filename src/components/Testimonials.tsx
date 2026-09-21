"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "The team made my dental implant procedure so comfortable. The results speak for themselves.",
    name: "Dr. John Smith",
    context: "Dental Implants",
  },
  {
    text: "Best dental experience I've had. The office is modern and the staff genuinely cares.",
    name: "Michael Chen",
    context: "Cosmetic Dentistry",
  },
  {
    text: "My kids actually look forward to visits now. The pediatric team is fantastic with children.",
    name: "Emily Davis",
    context: "Pediatric Care",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-(--base-warm) py-6 md:py-8 ">
      <div className="max-w-6xl mx-auto px-6 md:px-8 ">
        <h2 className="font-display text-2xl md:text-3xl text-(--aqua-deep) max-w-md mb-6 md:mb-8">
          What patients tell us
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-3xl p-5 flex flex-col justify-between h-full ring-1 ring-(--aqua-deep) hover:ring-gray-300 transition-all duration-300"
            >
              <blockquote className="text-(--ink)/80 leading-relaxed text-sm ">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-2 pt-2 border-t border-black/5">
                <p className="font-medium text-sm text-(--ink)">{q.name}</p>
                <p className="text-xs text-(--ink)/55">{q.context}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
