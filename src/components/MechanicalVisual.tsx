import React from 'react';

export const MechanicalVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square sm:aspect-4/3 flex items-center justify-center p-4 select-none">
      {/* Background blueprint drafting ring layers */}
      <div className="absolute inset-0 rounded-full border border-sky-500/10 animate-pulse-glow pointer-events-none" />
      <div className="absolute inset-8 rounded-full border border-dashed border-cyan-500/20 pointer-events-none" />
      <div className="absolute inset-16 rounded-full border border-slate-700/40 pointer-events-none" />

      {/* Laser scanning beam line */}
      <div className="absolute inset-x-4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-laser-scan shadow-[0_0_12px_#00f0ff] pointer-events-none z-20" />

      {/* SVG Mechanical Assembly: Rotating pitch gear, Banjo coupling profile & dimension lines */}
      <svg
        className="w-full h-full max-w-[480px] max-h-[480px] drop-shadow-2xl"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="metalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="cyanStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="steelRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Outer Circular Calibrated Pitch Scale */}
        <circle cx="250" cy="250" r="220" stroke="#1e293b" strokeWidth="1.5" strokeDasharray="3 6" />
        <circle cx="250" cy="250" r="195" stroke="#334155" strokeWidth="1" />

        {/* Angular Coordinate Marks */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 250 250)`}>
            <line x1="250" y1="28" x2="250" y2="40" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="250" cy="50" r="1.5" fill="#38bdf8" fillOpacity="0.4" />
          </g>
        ))}

        {/* 1. Slowly Rotating Precision Outer Spur Gear */}
        <g className="animate-gear-slow" style={{ transformOrigin: '250px 250px' }}>
          <circle cx="250" cy="250" r="160" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="8 4" />
          {/* Gear Teeth around circumference */}
          {Array.from({ length: 24 }).map((_, i) => {
            const rot = i * 15;
            return (
              <rect
                key={i}
                x="245"
                y="85"
                width="10"
                height="14"
                rx="2"
                fill="url(#steelRing)"
                stroke="#38bdf8"
                strokeWidth="1"
                strokeOpacity="0.6"
                transform={`rotate(${rot} 250 250)`}
              />
            );
          })}
        </g>

        {/* 2. Counter-Rotating Inner Planetary Carrier */}
        <g className="animate-gear-reverse" style={{ transformOrigin: '250px 250px' }}>
          <circle cx="250" cy="250" r="120" stroke="#334155" strokeWidth="2" strokeDasharray="12 6" />
          {/* Planetary Pinion Bores */}
          {[0, 90, 180, 270].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 250 250)`}>
              <circle cx="250" cy="130" r="18" fill="url(#metalGrad1)" stroke="#06b6d4" strokeWidth="1.5" />
              <circle cx="250" cy="130" r="7" fill="#0b1329" stroke="#38bdf8" strokeWidth="1" />
              <line x1="250" y1="110" x2="250" y2="150" stroke="#0ea5e9" strokeWidth="0.75" strokeOpacity="0.5" />
            </g>
          ))}
        </g>

        {/* 3. Static Center Hub: Machined Hydraulic Banjo Body & Stem (Exploded Isometric Style) */}
        <g>
          {/* Outer Hub Ring */}
          <circle cx="250" cy="250" r="72" fill="url(#metalGrad1)" stroke="url(#cyanStroke)" strokeWidth="2.5" />
          
          {/* Inner Sealing Flange Face */}
          <circle cx="250" cy="250" r="50" fill="#0a0f1d" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 2" />
          
          {/* Central Fluid Bore */}
          <circle cx="250" cy="250" r="28" fill="#020617" stroke="#00f0ff" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="14" fill="#000000" stroke="#0284c7" strokeWidth="1" />

          {/* Banjo Fluid Gallery Ports (Radial holes) */}
          <circle cx="250" cy="210" r="4.5" fill="#38bdf8" />
          <circle cx="250" cy="290" r="4.5" fill="#38bdf8" />
          <circle cx="210" cy="250" r="4.5" fill="#38bdf8" />
          <circle cx="290" cy="250" r="4.5" fill="#38bdf8" />

          {/* Machined Banjo Neck Extension pointing right */}
          <path
            d="M 315 235 L 420 235 L 430 242 L 430 258 L 420 265 L 315 265 Z"
            fill="url(#metalGrad1)"
            stroke="url(#cyanStroke)"
            strokeWidth="2"
          />
          {/* Thread Ridges on stem */}
          {[335, 345, 355, 365, 375, 385, 395, 405, 415].map((x) => (
            <line key={x} x1={x} y1="235" x2={x} y2="265" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.7" />
          ))}
          {/* Internal passage dotted line */}
          <line x1="278" y1="250" x2="430" y2="250" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
        </g>

        {/* 4. Fine Engineering Dimension Callouts & Linework */}
        {/* Horizontal Centerline */}
        <line x1="30" y1="250" x2="470" y2="250" stroke="#0284c7" strokeWidth="0.75" strokeDasharray="20 4 4 4" strokeOpacity="0.4" />
        {/* Vertical Centerline */}
        <line x1="250" y1="30" x2="250" y2="470" stroke="#0284c7" strokeWidth="0.75" strokeDasharray="20 4 4 4" strokeOpacity="0.4" />

        {/* Dimension Arrow 1: Center Bore */}
        <g>
          <line x1="222" y1="250" x2="150" y2="200" stroke="#38bdf8" strokeWidth="1" />
          <line x1="150" y1="200" x2="70" y2="200" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="222" cy="250" r="2.5" fill="#00f0ff" />
          <text x="75" y="193" fill="#00f0ff" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">
            Ø 28.00 H7
          </text>
          <text x="75" y="213" fill="#94a3b8" fontSize="8" fontFamily="var(--font-mono)">
            Ra ≤ 0.4 µm
          </text>
        </g>

        {/* Dimension Arrow 2: Thread callout */}
        <g>
          <line x1="385" y1="235" x2="415" y2="175" stroke="#38bdf8" strokeWidth="1" />
          <line x1="415" y1="175" x2="480" y2="175" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="385" cy="235" r="2.5" fill="#00f0ff" />
          <text x="420" y="168" fill="#38bdf8" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">
            M18×1.5-6g
          </text>
          <text x="420" y="188" fill="#94a3b8" fontSize="8" fontFamily="var(--font-mono)">
            CLASS 6g RING VERIFIED
          </text>
        </g>

        {/* Dimension Arrow 3: Flange OD */}
        <g>
          <line x1="250" y1="178" x2="290" y2="110" stroke="#38bdf8" strokeWidth="1" />
          <line x1="290" y1="110" x2="370" y2="110" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="250" cy="178" r="2.5" fill="#00f0ff" />
          <text x="295" y="103" fill="#38bdf8" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">
            Ø 144.00 ±0.010
          </text>
          <text x="295" y="123" fill="#34d399" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">
            10-MICRON TOLERANCE
          </text>
        </g>

        {/* Drafting Crosshairs at 4 Quadrants */}
        <g stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6">
          <path d="M 60 55 L 60 65 M 55 60 L 65 60" />
          <path d="M 440 55 L 440 65 M 435 60 L 445 60" />
          <path d="M 60 435 L 60 445 M 55 440 L 65 440" />
          <path d="M 440 435 L 440 445 M 435 440 L 445 440" />
        </g>
      </svg>

      {/* Floating HUD Telemetry Tags */}
      <div className="absolute top-2 left-2 px-2.5 py-1 bg-slate-900/90 border border-slate-700/80 rounded-xs text-[10px] font-mono-tech text-slate-300 backdrop-blur-xs flex items-center gap-1.5 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-cyan-300 font-semibold">CAD/CAM GEOMETRY</span>
        <span className="text-slate-500">·</span>
        <span className="text-slate-400">10-MICRON</span>
      </div>

      <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-slate-900/90 border border-slate-700/80 rounded-xs text-[10px] font-mono-tech text-slate-300 backdrop-blur-xs flex items-center gap-1.5 shadow-lg">
        <span className="text-slate-400">GRAIN-FLOW:</span>
        <span className="text-emerald-400 font-semibold">FORGED RESILIENCE</span>
      </div>
    </div>
  );
};
