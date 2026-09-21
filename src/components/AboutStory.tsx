"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-6 md:py-10 grid md:grid-cols-2 gap-6 md:gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-2xl md:text-4xl text-(--ink) mb-5">Our story</h2>
        <p className="text-(--ink)/65 leading-relaxed mb-4 text-xs md:text-sm">
          BrightSmile Dental was founded in 2008 with a simple mission: to
          provide exceptional dental care in a comfortable, welcoming
          environment. What started as a small practice has grown into a
          comprehensive dental center serving thousands of satisfied patients.
        </p>
        <p className="text-(--ink)/65 leading-relaxed text-xs md:text-sm">
          Our commitment to staying at the forefront of dental technology
          means our patients always receive the best possible care — because
          everyone deserves a healthy, beautiful smile.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-2 md:p-4 glass cursor-pointer ring-1 ring-gray-300 hover:ring-(--aqua) transition-all duration-300 "
      >
        <div className="relative rounded-2xl overflow-hidden aspect-video">
            <video
              src="/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        <p className="font-display text-lg md:text-xl text-(--ink) mt-4">Patient-centered care</p>
        <p className="text-xs md:text-sm text-(--ink)/60 ">
          Every decision we make is with our patients&apos; best interests in mind.
        </p>
      </motion.div>
    </section>
  );
}
