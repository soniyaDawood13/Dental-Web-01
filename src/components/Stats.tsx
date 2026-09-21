"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1] as const,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5, suffix: "+", label: "Years in practice" },
  { value: 5000, suffix: "+", label: "Patients treated" },
  { value: 98, suffix: "%", label: "Treatment success rate" },
  { value: 24, suffix: "/7", label: "Emergency care" },
];

export default function Stats() {
  return (
    <section className="border-y border-black/5 bg-white/60 ">
      <div className="max-w-6xl mx-auto px-6 md:px-auto py-5 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 ">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center md:text-left"
          >
            <p className="font-display text-xl md:text-2xl text-(--aqua)">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="text-xs md:text-sm text-(--ink)/60 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
