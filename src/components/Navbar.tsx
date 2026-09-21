"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`max-w-6xl mx-4 md:mx-auto rounded-2xl px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/5" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-2 font-display text-xl text-(--ink)">
          <Image src="/images/tooth-logo.jpg" alt="BrightSmile Dental logo" width={40} height={40} className="rounded-full object-contain" />
          BrightSmile
        </Link>

        <nav className="hidden md:flex items-center md:gap-4 lg:gap-8 text-sm font-medium text-(--ink)/80">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-(--ink) transition-colors ${
                pathname === l.href ? "text-(--ink)" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm md:text-md text-(--ink)/70">(111) 123-4567</span>
          <Link
            href="/contact"
            className="rounded-full bg-(--aqua-deep) text-white text-sm md:text-md font-medium px-4 py-2.5 my-2 hover:bg-[var(--ink)] transition-colors"
          >
            Book appointment
          </Link>
        </div>

          {/* Mobile screen */}
        <button
          className="md:hidden text-(--ink)"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#ffff] mx-4 mt-2 rounded-2xl px-6 py-5 flex flex-col gap-3 md:hidden"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-(--ink) text-sm">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-(--ink) text-white text-sm font-medium px-1 py-1.5 mt-1 text-center"
          >
            Book appointment
          </Link>
        </motion.div>
      )}
    </header>
  );
}
