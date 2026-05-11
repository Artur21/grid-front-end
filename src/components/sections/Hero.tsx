import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react'
import CyberGrid from '../ui/CyberGrid'
import ParticleField from '../ui/ParticleField'
import GlowButton from '../ui/GlowButton'

const TYPING_STRINGS = [
  'Energy Grid Networks.',
  'Industrial Control Systems.',
  'Critical Infrastructure.',
  'SCADA Environments.',
  'Power Generation Assets.',
]

function TypingText() {
  const [stringIndex, setStringIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = TYPING_STRINGS[stringIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setStringIndex((stringIndex + 1) % TYPING_STRINGS.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, stringIndex])

  return (
    <span className="text-cyan-400">
      {displayed}
      <span className="animate-blink border-r-2 border-cyan-400 ml-0.5">&nbsp;</span>
    </span>
  )
}

const STATS = [
  { value: '500+', label: 'Infrastructure Assets Protected', icon: Shield },
  { value: '99.97%', label: 'Threat Detection Rate', icon: Zap },
  { value: '<4min', label: 'Mean Time to Detect', icon: Lock },
  { value: '24/7', label: 'SOC Monitoring', icon: Shield },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050508]">
      {/* Backgrounds */}
      <div className="absolute inset-0">
        <CyberGrid />
        <ParticleField />
        {/* Radial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-950/20 via-transparent to-transparent" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-64" style={{ background: 'linear-gradient(to top, #050508 0%, transparent 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-glow" />
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">OT/ICS Security Leader 2024</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none mb-4"
          >
            Defending the{' '}
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              World's Grid
            </span>
          </motion.h1>

          {/* Typing headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold text-slate-400 mb-8 min-h-[1.5em]"
          >
            Securing{' '}
            <TypingText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            GridSec delivers purpose-built cybersecurity for energy utilities, power generators, and industrial operators. Our AI-powered platform provides continuous threat intelligence, real-time OT/IT monitoring, and rapid incident response — engineered for zero downtime.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a href="#contact">
              <GlowButton className="flex items-center gap-2 text-base px-8 py-4">
                Request a Demo
                <ArrowRight size={18} />
              </GlowButton>
            </a>
            <a href="#platform" className="glow-button-outline flex items-center gap-2 text-base px-8 py-4">
              Explore Platform
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-5 text-center"
            >
              <div className="text-3xl font-extrabold mb-1" style={{ background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #050508, transparent)' }} />
    </section>
  )
}
