"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section className="mesh-bg relative overflow-hidden pt-22 md:pb-16 pb-10 md:pt-30 ">
      <div className="max-w-6xl  mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-xs md:text-sm text-(--aqua-deep) font-medium mb-3">
            Serving Rivertown families since 2008
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-2xl md:text-4xl leading-[1.08] text-(--ink)"
          >
            Dental care that feels like it was made for you
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-sm text-(--ink)/70 max-w-md">
            Comprehensive, gentle treatment from a team that takes the time to
            know your smile — in a space designed to put you at ease.
          </motion.p>
          <motion.div variants={item} className="mt-5  md:mt-7 flex flex-wrap gap-2 md:gap-4">
            <a
              href="/contact"
              className="rounded-full bg-(--aqua-deep) text-white px-3 md:px-5 py-3 font-medium hover:bg-(--ink) transition-colors text-xs md:text-sm"
            >
              Schedule a visit
            </a>
            <a
              href="/services"
              className="rounded-full glass px-3 md:px-5 py-3 font-medium text-(--ink) hover:bg-white/70 transition-colors ring-1 ring-teal-600 text-xs md:text-sm"
            >
              Explore services
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-5 md:mt-10 flex gap-8 text-xs text-(--ink)/70">
            <span>Same-day appointments</span>
            <span>Most insurance accepted</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-2 md:p-3 shadow-2xl shadow-(--aqua-deep)/10">
              <div className="relative rounded-2xl overflow-hidden aspect-5/4">
                <video
                  src="/dental.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="glass absolute -bottom-6 -left-6 rounded-xl px-2 md:px-4 py-2 "
          >
            <p className="font-display text-xl md:text-2xl text-(--ink)">5,000+</p>
            <p className="text-xs md:text-md text-(--ink)/60">Happy patients</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="glass absolute -top-6 -right-4 rounded-xl px-2 md:px-4 py-2 "
          >
            <p className="font-display text-xl md:text-2xl text-(--ink)">24/7</p>
            <p className="text-xs text-(--ink)/60">Emergency care</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
