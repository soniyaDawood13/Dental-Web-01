"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "Do you accept my insurance?",
    a: "We work with most major insurance providers. Share your details with us and we'll verify your coverage before your visit.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "A valid ID, your insurance card, a list of current medications, and any previous dental X-rays if you have them.",
  },
  {
    q: "Do you offer emergency dental care?",
    a: "Yes — we offer same-day emergency appointments and an after-hours line for urgent dental issues.",
  },
  {
    q: "How often should I visit for cleanings?",
    a: "Most patients should visit every six months, though some may need more frequent visits depending on their oral health.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className=" max-w-3xl mx-auto px-6 md:px-8 py-8 md:py-10">
      <h2 className="font-display text-2xl md:text-3xl text-(--ink) mb-6 md:mb-8">
        Questions we hear a lot
      </h2>

      <div className="space-y-3">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <div key={f.q} className="glass rounded-2xl overflow-hidden ring ring-gray-200">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between text-left px-3 md:px-6 py-1.5 md:py-3 "
                aria-expanded={open}
              >
                <span className="font-medium text-(--ink) text-sm ">{f.q}</span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-2xl text-(--aqua-deep) leading-none"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                    className="overflow-hidden "
                  >
                    <p className="px-3 md:px-6 pb-4 text-(--ink)/65 text-sm md:text-sm leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
