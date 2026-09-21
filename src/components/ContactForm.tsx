"use client";

import { useState, useMemo, FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "success" | "error";

const services = [
  "General checkup & cleaning",
  "Cosmetic dentistry",
  "Restorative dentistry",
  "Pediatric dentistry",
  "Emergency visit",
  "Not sure yet",
];

// Update this to your real clinic WhatsApp number, country code first, no "+" or spaces.
const CLINIC_WHATSAPP_NUMBER = "(111) 123-4567";

// Clinic hours — kept in one place so the form validation always matches
// whatever is shown in the "Office hours" card below.
const HOURS: Record<number, { open: string; close: string; label: string } | null> = {
  0: null, // Sunday — closed
  1: { open: "08:00", close: "18:00", label: "8:00 AM - 6:00 PM" }, // Mon
  2: { open: "08:00", close: "18:00", label: "8:00 AM - 6:00 PM" }, // Tue
  3: { open: "08:00", close: "18:00", label: "8:00 AM - 6:00 PM" }, // Wed
  4: { open: "08:00", close: "18:00", label: "8:00 AM - 6:00 PM" }, // Thu
  5: { open: "08:00", close: "18:00", label: "8:00 AM - 6:00 PM" }, // Fri
  6: { open: "09:00", close: "14:00", label: "9:00 AM - 2:00 PM" }, // Sat
};

function todayISO() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  // Hours available for whichever date is currently selected (null = closed that day)
  const dayHours = useMemo(() => {
    if (!preferredDate) return null;
    const day = new Date(`${preferredDate}T00:00:00`).getDay();
    return HOURS[day];
  }, [preferredDate]);

  function handleDateChange(value: string) {
    setPreferredDate(value);
    setPreferredTime("");
    setTimeError("");

    if (!value) {
      setDateError("");
      return;
    }
    const day = new Date(`${value}T00:00:00`).getDay();
    if (HOURS[day] === null) {
      setDateError("We're closed on Sundays — please choose Mon-Sat.");
    } else {
      setDateError("");
    }
  }

  function handleTimeChange(value: string) {
    setPreferredTime(value);
    if (!value || !dayHours) {
      setTimeError("");
      return;
    }
    if (value < dayHours.open || value > dayHours.close) {
      setTimeError(`Please pick a time between ${dayHours.label} for this day.`);
    } else {
      setTimeError("");
    }
  }

  function handlePhoneChange(value: string) {
    // Digits only, capped at 11 (Pakistani mobile format: 03XXXXXXXXX)
    const digitsOnly = value.replace(/\D/g, "").slice(0, 11);
    setPhone(digitsOnly);
  }

  function buildWhatsAppMessage() {
    const lines = [
      `New appointment request — BrightSmile Dental`,
      ``,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service needed: ${service}`,
      `Preferred date: ${preferredDate || "-"}`,
      `Preferred time: ${preferredTime || "-"}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    if (dateError || timeError) {
      setStatus("error");
      setErrorMsg("Please fix the highlighted date/time before continuing.");
      return;
    }
    if (!/^03\d{9}$/.test(phone)) {
      setStatus("error");
      setErrorMsg("Please enter a valid 11-digit phone number (e.g. 03XXXXXXXXX).");
      return;
    }

    const text = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${text}`, "_blank");

    setStatus("success");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setService("");
    setPreferredDate("");
    setPreferredTime("");
    setMessage("");
  }

  const inputClass =
    "w-full rounded-xl bg-white/70 border border-black/10 px-2 md:px-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--aqua)]";
  const errorInputClass = "border-[var(--coral)] focus:ring-[var(--coral)]";

  return (
    <section id="appointment-form" className="max-w-5xl mx-auto px-4 md:px-8 pb-8 md:pb-10">
      <div className="grid md:grid-cols-[1.3fr_1fr] gap-4 md:gap-6">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-2 md:p-6 space-y-5 ring-1 ring-gray-300"
        >
          <h2 className="font-display text-xl md:text-3xl text-(--ink) mb-1">
            Schedule an appointment
          </h2>
          <p className="text-xs md:text-sm text-(--ink)/60 mb-4 md:mb-6 ">
            Fill out the form it&apos;ll open in WhatsApp so you can send it straight to us.
          </p>

          <div className="grid grid-cols-2 gap-5 ">
            <div>
              <label className="block text-sm font-medium text-(--ink) mb-1.5">First name</label>
              <input
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className= {inputClass} 
                placeholder="Type your first name"
              />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-(--ink) mb-1.5">Last name</label>
              <input
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={inputClass}
                placeholder="Type your last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 ">
            <div>
              <label className="block text-xs md:text-sm font-medium text-(--ink) mb-1.5">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className= {inputClass}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-(--ink) mb-1.5">Phone</label>
              <input
                required
                type="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="03XXXXXXXXX"
                maxLength={11}
                className= {inputClass} 
              />
              {phone.length > 0 && !/^03\d{9}$/.test(phone) && (
                <p className="text-xs text-(--coral) mt-1">
                  Enter an 11-digit number starting with 03.
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-(--ink) mb-1.5">Service needed</label>
            <select
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={inputClass} 
            >
              <option value="" disabled>Select a service</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-xs md:text-sm font-medium text-(--ink) mb-1.5">Preferred date</label>
              <input
                required
                type="date"
                min={todayISO()}
                value={preferredDate}
                onChange={(e) => handleDateChange(e.target.value)}
                className={`${inputClass} ${dateError ? errorInputClass : ""}`}
              />
              {dateError && <p className="text-xs text-(--coral) mt-1">{dateError}</p>}
            </div>
            <div>
              <label className="block text-xs md:text-sm font-medium text-(--ink) mb-1.5">Preferred time</label>
              <input
                required
                type="time"
                disabled={!preferredDate || !!dateError}
                min={dayHours?.open}
                max={dayHours?.close}
                value={preferredTime}
                onChange={(e) => handleTimeChange(e.target.value)}
                className={`${inputClass} ${timeError ? errorInputClass : ""} disabled:opacity-50`}
              />
              {dayHours && !timeError && (
                <p className="text-xs text-(--ink)/50 mt-1">Open {dayHours.label} this day.</p>
              )}
              {timeError && <p className="text-xs text-(--coral) mt-1">{timeError}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs md:text-sm font-medium text-(--ink) mb-1.5">Additional message (optional)</label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputClass}
              placeholder="Tell us about any specific concerns or questions…"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-(--aqua-deep) text-white font-medium py-2 hover:bg-(--ink) transition-colors text-xs md:text-sm"
          >
            Request appointment via WhatsApp
          </button>

          {status === "success" && (
            <p className="text-sm text-(--aqua-deep)">
              WhatsApp opened in a new tab with your details filled in — just hit send there to confirm.
            </p>
          )}
          {status === "error" && <p className="text-sm text-(--coral)">{errorMsg}</p>}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {/* Map div */}
          <div className="glass-dark text-white rounded-3xl p-4 ">
            <h3 className="font-display text-lg mb-1">Office location</h3>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed mb-2">
              123 Dental Avenue, Suite 200<br />Cityville, ST 12345
            </p>

            <div className="w-full h-40 rounded-xl overflow-hidden mb-1">
              <iframe
                title="Clinic location map"
                src="https://www.google.com/maps?q=123+Dental+Avenue,+Cityville&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm text-white underline"
            >
              Get directions↗️
            </a>
          </div>

          <div className="glass rounded-3xl p-4 ring ring-gray-300">
            <h3 className="font-display text-lg text-(--ink) mb-1">Office hours</h3>
            <ul className="text-sm text-(--ink)/65 space-y-1">
              <li className="flex justify-between"><span>Mon - Fri</span><span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
            </ul>
            <p className="text-sm text-(--coral) mt-2">
              Emergency care available 24/7 — call our emergency line for urgent issues.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
