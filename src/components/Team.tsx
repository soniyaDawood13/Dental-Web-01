"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Dr. John Smith",
    role: "Lead Dentist & Founder",
    focus: "General & Cosmetic Dentistry",
    bio: "Dr. Smith is passionate about gentle, comprehensive care. She graduated with honors from Harvard School of Dental Medicine and has served the community for over 15 years.",
    image:"/images/dentist1.jpg",
    alt:"Dr. Emily Chen image"
  },
  {
    name: "Dr. Michael Johnson",
    role: "Pediatric Dentist",
    focus: "Pediatric & Orthodontics",
    bio: "Dr. Johnson specializes in making dental visits fun and comfortable for children, with gentle approaches that make him a favorite among young patients.",
    image:"/images/dentist2.jpg",
    alt:"Dr. Emily Chen image"
  },
  {
    name: "Dr. Emily Chen",
    role: "Oral Surgeon",
    focus: "Oral Surgery & Implants",
    bio: "Dr. Chen brings advanced surgical expertise to the practice. She completed her residency at Johns Hopkins and specializes in complex oral surgical cases.",
    image:"/images/dentist3.jpg",
    alt:"Dr. Emily Chen image"
  },
];

export default function Team() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-4 md:py-10">
      <h2 className="font-display text-xl md:text-2xl text-(--ink) mb-6 md:mb-8">
        Meet the people behind every visit
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-6/4 glass p-2 ring-1 ring-gray-200">
              <div className="relative w-full h-full rounded-2xl overflow-hidden ">
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 "
                />
              </div>
            </div>
            <h3 className="font-display text-xl text-(--ink) mt-4">{t.name}</h3>
            <p className="text-base text-(--aqua-deep)">{t.role}</p>
            <p className="text-sm text-(--ink)/55 mt-1">{t.focus}</p>
            <p className="text-sm text-(--ink)/60 mt-3 leading-relaxed">{t.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
