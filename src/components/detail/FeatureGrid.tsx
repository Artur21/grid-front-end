import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface FeatureGridProps {
  features: string[]
  color?: string
  title?: string
}

export default function FeatureGrid({
  features,
  color = '#00d4ff',
  title = "What's Included",
}: FeatureGridProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="section-label mb-3" style={{ color }}>// Scope</div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white">{title}</h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
            className="flex items-center gap-3 p-4 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}18`, border: `1px solid ${color}30` }}
            >
              <Check size={12} style={{ color }} />
            </div>
            <span className="text-sm text-slate-300">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
