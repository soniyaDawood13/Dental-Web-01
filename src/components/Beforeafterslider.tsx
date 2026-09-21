"use client";

import { useState } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  label: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  label,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="group">
      <div className="relative aspect-5/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* AFTER IMAGE - Background */}
        <img
          src={after}
          alt={`${label} after`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* BEFORE IMAGE - Clipped */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt={`${label} before`}
            className="absolute inset-y-0 left-0 h-full w-full max-w-none object-cover"
            style={{
              width: `${10000 / position}%`,
              maxWidth: "none",
            }}
          />
        </div>

        {/* BEFORE / AFTER LABELS */}
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 text-[10px] md:text-[13px] font-medium text-slate-700 backdrop-blur">
          Before
        </div>

        <div className="absolute right-3 top-3 rounded-full bg-[#0f5365]/90 px-2.5 py-1 text-[10px] md:text-[13px] font-medium text-white backdrop-blur">
          After
        </div>

        {/* SLIDER LINE */}
        <div
          className="absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)]"
          style={{ left: `${position}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#0f5365] shadow-lg">
            <span className="text-[11px] font-bold tracking-tight text-white">
              ↔
            </span>
          </div>
        </div>

        {/* RANGE INPUT */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-label={`Compare before and after for ${label}`}
        />
      </div>

      <div className="mt-4">
        <h3 className="font-serif text-base md:text-lg text-[#12384b]">{label}</h3>
        <p className=" text-xs md:text-sm text-slate-500">
          Drag the slider to compare results
        </p>
      </div>
    </div>
  );
}