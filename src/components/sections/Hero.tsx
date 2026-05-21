import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import CyberGrid from '../ui/CyberGrid'
import ParticleField from '../ui/ParticleField'
import GlowButton from '../ui/GlowButton'

const TYPING_STRINGS = [
  'Solar Generation Assets.',
  'Wind Farm Networks.',
  'Battery Storage Systems.',
  'OT Control Environments.',
  'Grid-Connected Infrastructure.',
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

const PILLARS = [
  { label: 'Managed NOC', detail: 'Continuous operational monitoring' },
  { label: 'Managed SOC', detail: 'OT-aware security operations' },
  { label: 'Solar · Wind · BESS', detail: 'Renewable energy focus' },
  { label: 'Assessment & Design', detail: 'Advisory and architecture' },
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
      
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none mb-4"
          >
            Managed operations and security for{' '}
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Renewable Energy Infrastructure
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
            We work with operators of solar, wind and battery storage assets to improve how their infrastructure is monitored, managed and secured. Our team brings hands-on OT experience to every engagement — helping clients find and implement the right operational and security approach for their environment.
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
                Get in Touch
                <ArrowRight size={18} />
              </GlowButton>
            </a>
            <a href="#services" className="glow-button-outline flex items-center gap-2 text-base px-8 py-4">
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Capability pillars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {PILLARS.map((p) => (
            <div key={p.label} className="glass-card p-5">
              <div className="text-sm font-bold text-white mb-1">{p.label}</div>
              <div className="text-xs text-slate-500 leading-snug">{p.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, #050508, transparent)' }} />
    </section>
  )
}
