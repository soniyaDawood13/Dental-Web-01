"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/Beforeafterslider";

const services = [
  {
    title: "General Dentistry",
    desc: "Cleanings, exams, fillings, and preventive care to keep your smile healthy year-round.",
    points: ["Routine cleanings & exams", "Fillings & restorations", "Oral cancer screening"],
    image: "/images/d1.png",
    alt: "this is General Dentistry image"
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Whitening, veneers, and bonding designed around the smile you actually want.",
    points: ["Teeth whitening", "Veneers", "Smile makeovers"],
    image: "/images/d2.png",
    alt:"Cosmetic Dentistry"
  },
  {
    title: "Restorative Dentistry",
    desc: "Whitening, veneers, and bonding designed around the smile you actually want.",
    points: ["Teeth whitening", "Veneers", "Smile makeovers"],
    image: "/images/d4.jpg",
    alt:"Cosmetic Dentistry"
  },

];

export default function Services() {
  return (
    <>

    {/* Before After slider */}
          <section className="bg-[#f5f9f9] px-6 py-10 md:py-14 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl ">
          
          {/* Section Heading */}
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs md:text-sm inline-block rounded-3xl bg-teal-700/15 px-3 font-medium uppercase tracking-[0.18em] text-[#267487]">
                Real patient results
              </p>

              <h2 className="max-w-xl font-serif text-2xl md:text-3xl leading-tight text-[#12384b] ">
                Difference a confident smile can make
              </h2>
            </div>

            <p className="max-w-sm text-sm md:text-base leading-6 text-slate-500">
              Explore a few examples of treatments designed around each
              patient's smile, goals, and comfort.
            </p>
          </div>

          {/* Before / After Cards */}
          <div className="grid gap-4 md:gap-8 md:grid-cols-3 ">

            <BeforeAfterSlider
              label="Smile Makeover"
              before="/images/B1.png"
              after="/images/A1.png"
            />

            <BeforeAfterSlider
              label="Teeth Whitening"
              before="/images/B2.png"
              after="/images/A2.png"
            />

            <BeforeAfterSlider
              label="Orthodontics"
              before="/images/B3.png"
              after="/images/A3.png"
            />

          </div>
        </div>
      </section>

    <section className="max-w-6xl mx-auto px-4 md:px-8 py-2 md:py-6">
      <p className="mb-3 text-xs md:text-sm inline-block rounded-3xl bg-teal-700/15 px-3 font-medium uppercase tracking-[0.18em] text-[#267487]">
                All kind of treatment
              </p>
      <div className="grid md:grid-cols-2 gap-2 md:gap-12 items-start mb-4 md:mb-12 ">
        <h2 className="font-display text-xl md:text-3xl text-(--ink) ">
          Care built around every stage of your smile
        </h2>
        <p className="text-(--ink)/65 text-sm md:text-base self-end">
          From a first check-up to a full restoration, every service is delivered
          with the same unhurried attention — no matter how big or small the visit.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6 ">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-4 flex flex-col cursor-pointer ring-1 ring-gray-300 hover:ring-(--aqua)"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0 ">
              <Image src={s.image} alt={s.alt} fill className="object-cover" />
              
            </div>
            <div>
              <h3 className="font-display text-base md:text-lg text-(--ink) my-2 ">{s.title}</h3>
              <p className="text-sm md:text-md text-(--ink)/65">{s.desc}</p>
            </div>
            <ul className="text-xs md:text-sm text-(--ink)/70 space-y-1.5 mt-auto pt-2 border-t border-black/5 ">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--aqua)" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/services"
          className="inline-block text-xs md:text-sm rounded-full glass px-3 md:px-6 py-2 mb-4 md:mb-0 font-medium text-(--ink) hover:bg-white/70 transition-colors ring-1 ring-gray-300 hover hover:ring-(--aqua-deep)"
        >
          View all services
        </Link>
      </div>
    </section>
    </>
  );
}
