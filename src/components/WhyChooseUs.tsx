"use client";

import { motion } from "framer-motion";

const reasons = [
  { title: "Board-certified team", desc: "Every dentist here brings years of specialized training to your visit." },
  { title: "Modern technology", desc: "Digital X-rays and 3D imaging for faster, more precise treatment." },
  { title: "Personalized plans", desc: "Care mapped to your history, your goals, and your comfort level." },
];

export default function WhyChooseUs() {
  return (
  
    <section className="bg-linear-to-br from-(--ink) via-[#80BCBD] to-white text-white py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-xl md:text-3xl leading-tight"
        >
          Why patients stay with BrightSmile for years, not just one visit
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-dark rounded-2xl p-3"
            >
              <h3 className="font-display mb-2 text-sm md:text-xl">{r.title}</h3>
              <p className="text-white/65 text-xs md:text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    
  );
}
