"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-linear-to-br from-(--ink) via-[#80BCBD] to-white text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-4xl"
        >
          Ready to transform your smile?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-white/75 text-sm md:text-sm"
        >
          Schedule your visit today and take the first step toward a
          confident, healthy smile.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 flex flex-wrap justify-center gap-1 md:gap-4"
        >
          <Link
            href="/contact"
            className="rounded-full bg-white text-(--ink) px-2 md:px-6 py-3 font-medium hover:bg-white/90 transition-colors text-xs md:text-sm"
          >
            Book your appointment
          </Link>
          <a
            href="tel:+15551234567"
            className="rounded-full border border-white/40 px-2 md:px-6 py-3 font-medium hover:bg-white/10 transition-colors text-xs md:text-sm"
          >
            Call (555) 123-4567
          </a>
        </motion.div>
      </div>
    </section>
  );
}
