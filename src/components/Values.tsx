"use client";

import { motion } from "framer-motion";

const values = [
  { title: "Compassionate care", desc: "We treat every patient with empathy, understanding, and genuine care for their wellbeing." },
  { title: "Excellence & safety", desc: "We maintain the highest standards of clinical excellence and patient safety in everything we do." },
  { title: "Community focus", desc: "We're committed to serving our community and building lasting relationships with our patients." },
  { title: "Continuous learning", desc: "We invest in ongoing education and the latest technology to provide cutting-edge dental care." },
];

export default function Values() {
  return (
    <section className="bg-linear-to-br from-(--ink) via-[#80BCBD] to-white py-6 md:py-8 ">
      <div className="max-w-6xl mx-auto px-6 md:px-8 ">
        <h2 className="font-display text-3xl md:text-4xl text-(--ink) mb-6 text-center">
          What drives us
        </h2>
        <div className="grid md:grid-cols-4 gap-2 md:gap-4 ">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-3 cursor-pointer ring-3 ring-transparent hover:ring-(--aqua) transition-all duration-300 outline outline-gray-300"
            >
              <h3 className="font-display text-lg md:text-xl text-(--ink) mb-1">{v.title}</h3>
              <p className="text-xs md:text-sm text-(--ink)/60">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}