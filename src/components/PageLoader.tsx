"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minTime = new Promise((resolve) => setTimeout(resolve, 1200));

    const pageLoaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) =>
            window.addEventListener("load", () => resolve(), { once: true })
          );

    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

    const imagesReady = new Promise<void>((resolve) => {
      const images = Array.from(document.images);
      if (images.length === 0) return resolve();

      let remaining = images.length;
      const done = () => {
        remaining -= 1;
        if (remaining <= 0) resolve();
      };

      images.forEach((img) => {
        if (img.complete) {
          done();
        } else {
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
        }
      });
    });

    Promise.all([minTime, pageLoaded, fontsReady, imagesReady]).then(() =>
      setLoading(false)
    );
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 20%, rgba(63,185,172,0.45), transparent 60%), radial-gradient(60% 55% at 80% 85%, rgba(27,92,107,0.5), transparent 60%), var(--ink)",
          }}
        >
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, -4, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="72" height="84" viewBox="0 0 72 84" fill="none">
              <defs>
                <linearGradient id="toothGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#CFFCF5" />
                  <stop offset="100%" stopColor="#3FB9AC" />
                </linearGradient>
              </defs>
              <path
                d="M36 6C25 6 16 12 12 22c-4 10 0 24 4 34 2 6 5 14 10 14 4 0 5-6 6-11 1-4 2-8 4-8s3 4 4 8c1 5 2 11 6 11 5 0 8-8 10-14 4-10 8-24 4-34C56 12 47 6 36 6Z"
                fill="url(#toothGrad)"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="28" cy="32" r="2.6" fill="var(--ink)" />
              <circle cx="44" cy="32" r="2.6" fill="var(--ink)" />
              <path d="M29 40c2.5 2.5 9.5 2.5 12 0" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="22" cy="37" r="2.2" fill="#FF9B85" opacity="0.6" />
              <circle cx="50" cy="37" r="2.2" fill="#FF9B85" opacity="0.6" />
            </svg>
          </motion.div>

          <p className="font-display text-2xl text-white mt-5 tracking-wide">
            BrightSmile
          </p>

          <div className="flex gap-1.5 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 rounded-full bg-(--aqua)"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}