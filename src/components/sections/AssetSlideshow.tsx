import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    id: 'solar',
    tag: 'SOLAR OPERATIONS',
    headline: 'End-to-end visibility across your solar portfolio',
    description:
      'From inverter-level performance to multi-site availability — continuous monitoring with structured escalation when it matters.',
    points: [
      'Inverter and string-level performance monitoring',
      'Grid connection and export curtailment tracking',
      'SCADA and communication network health',
      'OT security monitoring for solar control systems',
    ],
    accent: '#f5a623',
    glow: 'rgba(245,166,35,0.07)',
  },
  {
    id: 'wind',
    tag: 'WIND OPERATIONS',
    headline: 'Continuous monitoring for onshore and offshore wind',
    description:
      'Turbine availability, SCADA integrity and network uptime — monitored around the clock with clear escalation paths to your operations team.',
    points: [
      'Turbine availability and fault classification',
      'SCADA and DCS communication monitoring',
      'Offshore network and remote access oversight',
      'OT security monitoring and incident response',
    ],
    accent: '#00d4ff',
    glow: 'rgba(0,212,255,0.06)',
  },
  {
    id: 'bess',
    tag: 'BATTERY STORAGE',
    headline: 'Operational security for battery storage infrastructure',
    description:
      'BESS assets introduce distinct OT security and operational risks. We monitor BMS communications, thermal events and grid integration to keep storage assets available and secure.',
    points: [
      'BMS and EMS communication monitoring',
      'Thermal and safety system alert management',
      'Grid integration and dispatch status tracking',
      'OT security monitoring for storage control networks',
    ],
    accent: '#7c3aed',
    glow: 'rgba(124,58,237,0.07)',
  },
]

// ── SVG background art ────────────────────────────────────────────────────

function SolarArt({ color }: { color: string }) {
  const panels: { x: number; y: number }[] = []
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 5; col++) {
      panels.push({
        x: 10 + col * 88 - row * 10,
        y: 20 + row * 75 + col * 6,
      })
    }
  }
  return (
    <svg viewBox="0 0 480 500" fill="none" className="w-full h-full">
      {panels.map((p, i) => (
        <g key={i}>
          <rect x={p.x} y={p.y} width="80" height="52" stroke={color} strokeWidth="0.9" rx="1" />
          <line x1={p.x + 27} y1={p.y} x2={p.x + 27} y2={p.y + 52} stroke={color} strokeWidth="0.4" />
          <line x1={p.x + 53} y1={p.y} x2={p.x + 53} y2={p.y + 52} stroke={color} strokeWidth="0.4" />
          <line x1={p.x} y1={p.y + 17} x2={p.x + 80} y2={p.y + 17} stroke={color} strokeWidth="0.4" />
          <line x1={p.x} y1={p.y + 34} x2={p.x + 80} y2={p.y + 34} stroke={color} strokeWidth="0.4" />
        </g>
      ))}
    </svg>
  )
}

function WindArt({ color }: { color: string }) {
  // Hub at (340, 190); blades 150px long at 0°, 120°, 240°
  const hx = 340; const hy = 190; const bl = 150
  const blades = [
    [hx, hy - bl],                                     // up
    [hx + bl * Math.sin((2 * Math.PI) / 3), hy + bl * Math.cos((2 * Math.PI) / 3) * -1 + bl * 0.5],  // lower-right
    [hx - bl * Math.sin((2 * Math.PI) / 3), hy + bl * 0.5],  // lower-left
  ]
  return (
    <svg viewBox="0 0 480 520" fill="none" className="w-full h-full">
      {/* Background turbine – small */}
      <line x1="100" y1="480" x2="112" y2="220" stroke={color} strokeWidth="0.8" opacity="0.35" />
      <circle cx="112" cy="220" r="4" fill={color} opacity="0.35" />
      <line x1="112" y1="216" x2="112" y2="150" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <line x1="112" y1="216" x2="169" y2="254" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
      <line x1="112" y1="216" x2="55" y2="254" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />

      {/* Background turbine – medium */}
      <line x1="220" y1="490" x2="236" y2="170" stroke={color} strokeWidth="1" opacity="0.45" />
      <circle cx="236" cy="170" r="5" fill={color} opacity="0.45" />
      <line x1="236" y1="165" x2="236" y2="80" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
      <line x1="236" y1="165" x2="310" y2="213" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
      <line x1="236" y1="165" x2="162" y2="213" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />

      {/* Main turbine */}
      <line x1={hx + 15} y1="520" x2={hx} y2={hy} stroke={color} strokeWidth="2" opacity="0.7" />
      <circle cx={hx} cy={hy} r="8" fill={color} opacity="0.7" />
      {blades.map(([tx, ty], i) => (
        <line key={i} x1={hx} y1={hy} x2={tx} y2={ty}
          stroke={color} strokeWidth="2.8" strokeLinecap="round" opacity="0.7" />
      ))}
      {/* Rotation arc */}
      <circle cx={hx} cy={hy} r="155" stroke={color} strokeWidth="0.5"
        strokeDasharray="5 8" opacity="0.18" />
    </svg>
  )
}

function BessArt({ color }: { color: string }) {
  const cols = 3; const rows = 3
  const cw = 120; const ch = 56; const gap = 10
  const startX = 30; const startY = 100
  return (
    <svg viewBox="0 0 480 480" fill="none" className="w-full h-full">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          const x = startX + col * (cw + gap)
          const y = startY + row * (ch + gap)
          const op = 1 - row * 0.1 - col * 0.05
          return (
            <g key={`${row}-${col}`} opacity={op}>
              {/* Container face */}
              <rect x={x} y={y} width={cw} height={ch} stroke={color} strokeWidth="1" rx="2" />
              {/* Top face */}
              <path d={`M${x},${y} L${x + 14},${y - 14} L${x + cw + 14},${y - 14} L${x + cw},${y} Z`}
                stroke={color} strokeWidth="0.6" strokeOpacity="0.55" />
              {/* Right face */}
              <path d={`M${x + cw},${y} L${x + cw + 14},${y - 14} L${x + cw + 14},${y + ch - 14} L${x + cw},${y + ch} Z`}
                stroke={color} strokeWidth="0.6" strokeOpacity="0.55" />
              {/* Internal cell dividers */}
              {[1, 2, 3].map(j => (
                <line key={j}
                  x1={x + (cw / 4) * j} y1={y + 8}
                  x2={x + (cw / 4) * j} y2={y + ch - 8}
                  stroke={color} strokeWidth="0.4" strokeOpacity="0.5" />
              ))}
              <line x1={x + 10} y1={y + ch / 2} x2={x + cw - 10} y2={y + ch / 2}
                stroke={color} strokeWidth="0.4" strokeOpacity="0.4" />
            </g>
          )
        })
      )}
      {/* Ground line */}
      <line x1="20" y1="390" x2="460" y2="390" stroke={color} strokeWidth="0.6" strokeOpacity="0.25" />
      {/* Cable bus */}
      <path d="M90,380 L90,410 L380,410 L380,380"
        stroke={color} strokeWidth="0.9" strokeDasharray="4,5" strokeOpacity="0.35" />
      <circle cx="235" cy="420" r="5" stroke={color} strokeWidth="0.9" strokeOpacity="0.35" />
    </svg>
  )
}

// ── Component ────────────────────────────────────────────────────────────────

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
}

const artComponents: Record<string, React.FC<{ color: string }>> = {
  solar: SolarArt,
  wind: WindArt,
  bess: BessArt,
}

export default function AssetSlideshow() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % SLIDES.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const go = (idx: number) => {
    setDirection(idx >= current ? 1 : -1)
    setCurrent(idx)
  }

  const slide = SLIDES[current]
  const ArtComponent = artComponents[slide.id]

  return (
    <section className="relative overflow-hidden" style={{ background: '#080a0e' }}>
      {/* Top / bottom rules */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(255,255,255,0.07),transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(255,255,255,0.07),transparent)' }} />

      {/* Ambient glow per slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${slide.id}`}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          style={{ background: `radial-gradient(ellipse 55% 80% at 72% 50%, ${slide.glow} 0%, transparent 70%)` }}
        />
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[400px]">

          {/* Text */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="lg:pr-8"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-7 text-xs font-mono tracking-widest uppercase"
                style={{ color: slide.accent, background: `${slide.accent}10`, border: `1px solid ${slide.accent}22` }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: slide.accent }} />
                {slide.tag}
              </div>

              <h2 className="text-3xl md:text-[2.4rem] font-extrabold text-white leading-tight tracking-tight mb-5">
                {slide.headline}
              </h2>

              <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
                {slide.description}
              </p>

              <ul className="space-y-3">
                {slide.points.map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-slate-400">
                    <span
                      className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: slide.accent }}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Art */}
          <div className="relative hidden lg:block h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`art-${slide.id}`}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 0.16, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.7 }}
              >
                <ArtComponent color={slide.accent} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/[0.06]">
          {/* Slide dots */}
          <div className="flex items-center gap-3">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => go(i)}
                aria-label={s.tag}
                className="flex items-center"
              >
                <motion.div
                  className="rounded-full"
                  animate={{
                    width: i === current ? 28 : 8,
                    background: i === current ? slide.accent : 'rgba(255,255,255,0.14)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ height: 8 }}
                />
              </button>
            ))}
            <span className="ml-3 text-xs font-mono text-slate-600">
              {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
            </span>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => go((current - 1 + SLIDES.length) % SLIDES.length)}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go((current + 1) % SLIDES.length)}
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
