"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"

const categories = [
  {
    id: "general",
    label: "General Dentistry",
    tagline: "Comprehensive dental care for optimal oral health",
    treatments: [
      {
        title: "Routine Cleanings & Exams",
        desc: "Professional cleanings and comprehensive oral health examinations.",
        duration: "30-60 minutes",
        price: "$120-180",
        includes: ["Deep cleaning", "Plaque & tartar removal", "Oral cancer screening", "Digital X-rays"],
        image: "/images/d4.jpg",
      },
      {
        title: "Fillings & Restorations",
        desc: "Repair cavities and restore tooth function with natural-looking materials.",
        duration: "45-90 minutes",
        price: "$150-350",
        includes: ["Composite fillings", "Inlay & onlay restorations", "Emergency repairs"],
        image: "/images/d4.jpg",
      },
    ],
  },
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    tagline: "Transform your smile with advanced cosmetic procedures",
    treatments: [
      {
        title: "Teeth Whitening",
        desc: "Professional-grade whitening for a noticeably brighter smile.",
        duration: "45-60 minutes",
        price: "$200-450",
        includes: ["In-office whitening", "Custom take-home trays", "Sensitivity treatment"],
        image: "/images/d4.jpg",
      },
      {
        title: "Veneers & Bonding",
        desc: "Reshape and refine your smile with minimally invasive techniques.",
        duration: "60-120 minutes",
        price: "$400-1,200",
        includes: ["Porcelain veneers", "Composite bonding", "Smile makeover consultation"],
        image: "/images/d4.jpg",
      },
    ],
  },
  {
    id: "restorative",
    label: "Restorative Dentistry",
    tagline: "Restore function and confidence in your smile",
    treatments: [
      {
        title: "Root Canal Therapy",
        desc: "Save infected teeth with gentle, effective root canal treatment.",
        duration: "90-120 minutes",
        price: "$800-1,200",
        includes: ["Digital imaging", "Local anesthesia", "Single-visit treatment", "Crown placement"],
        image: "/images/d4.jpg",
      },
      {
        title: "Crowns & Bridges",
        desc: "Rebuild damaged or missing teeth with durable, natural-looking restorations.",
        duration: "60-90 minutes",
        price: "$700-1,500",
        includes: ["CEREC same-day crowns", "Bridge fittings", "Bite adjustment"],
        image: "/images/d4.jpg",
      },
    ],
  },
  {
    id: "pediatric",
    label: "Pediatric Dentistry",
    tagline: "Gentle, kid-friendly dental care in a comfortable environment",
    treatments: [
      {
        title: "Child Cleanings & Checkups",
        desc: "Friendly, low-stress visits that build good habits early.",
        duration: "30-45 minutes",
        price: "$90-150",
        includes: ["Gentle cleanings", "Cavity risk assessment", "Parent education"],
        image: "/images/d4.jpg",
      },
      {
        title: "Fluoride & Sealants",
        desc: "Preventive treatments to protect growing teeth from decay.",
        duration: "20-30 minutes",
        price: "$60-140",
        includes: ["Fluoride treatments", "Dental sealants", "Growth monitoring"],
        image: "/images/d4.jpg",
      },
    ],
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <section className="max-w-6xl mx-4 md:mx-auto px-2 md:px-8 pb-10 md:pb-32 mt-6">
      <div className="glass rounded-2xl p-1.5 flex flex-wrap gap-1 mb-12 max-w-3xl mx-auto ring-1 ring-gray-200">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`flex-1 min-w-[45%] sm:min-w-0 text-sm font-medium rounded-xl px-2 py-1 md:py-3 transition-colors ${
              active === c.id
                ? "bg-(--aqua-deep) text-white"
                : "text-(--ink)/60 hover:text-(--ink)"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="text-center mb-10 ">
            <h2 className="font-display text-2xl md:text-3xl text-(--ink)">{current.label}</h2>
            <p className="text-(--ink)/60 mt-2">{current.tagline}</p>
          </div>
          

          <div className="grid md:grid-cols-3 gap-6">
                {current.treatments.map((t) => (
                  <div key={t.title} className="glass rounded-3xl p-4 flex flex-col cursor-pointer ring-1  ring-gray-300 hover:ring-(--aqua) transition-all duration-300">
                    <Image src={t.image} alt={t.title} width={48} height={48} className="rounded-xl mb-2 object-cover" />
                <h3 className="font-display text-base md:text-lg text-(--ink) my-2 ">{t.title}</h3>
                <p className="text-sm text-(--ink)/60 mb-2">{t.desc}</p>
                <div className="flex items-center justify-between text-sm text-(--ink) mb-2 pb-3 border-b border-black/5">
                  <span>{t.duration}</span>
                  <span className="font-medium text-(--ink)">{t.price}</span>
                </div>
                <p className="text-xs font-medium text-(--ink)/50 mb-1">Includes</p>
                <ul className="text-sm text-(--ink)/70 space-y-1.5">
                  {t.includes.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--aqua)" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
