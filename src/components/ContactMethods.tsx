"use client";

import { motion } from "framer-motion";

const methods = [
  { title: "Phone", value: "(555) 123-4567", sub: "Call during business hours", href: "tel:+15551234567", cta: "Call now" },
  { title: "Email", value: "info@brightsmile.com", sub: "We reply within a day", href: "mailto:info@brightsmile.com", cta: "Send email" },
  { title: "Text", value: "(555) 123-4567", sub: "Quick questions welcome", href: "sms:+15551234567", cta: "Send text" },
  { title: "Online", value: "Available 24/7", sub: "Book at your convenience", href: "#appointment-form", cta: "Book now" },
];

export default function ContactMethods() {
  return (
    <section className="max-w-5xl  mx-2 md:mx-auto px-2 md:px-auto pb-8 md:pb-12 pt-6 ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {methods.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass rounded-2xl p-3 md:p-4 flex flex-col ring-1 ring-gray-300 hover:ring-(--aqua) transition-all duration-300"
          >
            <h3 className="font-display text-base md:text-lg  text-(--ink)">{m.title}</h3>
            <p className="text-xs md:text-sm font-medium text-(--ink) mt-1">{m.value}</p>
            <p className="text-xs text-(--ink)/55 mt-1 mb-2">{m.sub}</p>
            <a
              href={m.href}
              className="mt-auto text-center rounded-full bg-(--aqua-deep) text-white text-xs md:text-sm font-medium py-1 hover:bg-(--ink) transition-colors"
            >
              {m.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
