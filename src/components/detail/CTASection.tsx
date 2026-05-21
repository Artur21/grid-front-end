import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GlowButton from '../ui/GlowButton'
import { type ServiceCTA } from '../../data/services.data'

interface CTASectionProps {
  cta: ServiceCTA
  color?: string
  onClose?: () => void
}

export default function CTASection({ cta, color = '#00d4ff', onClose }: CTASectionProps) {
  const handleClick = () => {
    onClose?.()
    const el = document.querySelector(cta.href)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300)
  }

  return (
    <div className="relative overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${color}10 0%, transparent 65%)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label mb-4" style={{ color }}>// Get Started</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to talk to the team?
          </h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Whether you have a specific requirement or just want to understand your options — we're happy to have a conversation.
          </p>

          <GlowButton onClick={handleClick} className="inline-flex items-center gap-2">
            {cta.label}
            <ArrowRight size={16} />
          </GlowButton>
        </motion.div>
      </div>
    </div>
  )
}
