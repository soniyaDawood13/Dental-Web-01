import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Pediatric Dentistry",
];

export default function Footer() {
  return (
    <footer className="bg-(--ink) text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div>
          <p className="font-display text-xl md:text-2xl mb-3">BrightSmile Dental</p>
          <p className="text-sm text-white/55 leading-relaxed">
            Providing exceptional dental care with a personal touch since 2008.
          </p>
        </div>

        <div>
          <p className="text-sm md:text-md font-medium text-white/80 mb-4">Quick links</p>
          <ul className="space-y-3 text-sm text-white/55">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm md:text-md font-medium text-white/80 mb-4">Services</p>
          <ul className="space-y-3 text-sm text-white/55">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-white transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm md:text-md font-medium text-white/80 mb-4">Contact info</p>
          <ul className="space-y-3 text-sm text-white/55">
            <li>(555) 123-4567</li>
            <li>info@brightsmile.com</li>
            <li>123 Dental Avenue, Suite 200</li>
            <li>Mon-Fri 8:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 text-sm text-white/45 text-center">
          © 2026 BrightSmile Dental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
