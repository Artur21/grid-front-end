import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { type ServiceDetail } from '../../data/services.data'

interface DetailHeroProps {
  service: ServiceDetail
  onClose: () => void
}

export default function DetailHero({ service, onClose }: DetailHeroProps) {
  const Icon = service.icon

  return (
    <div className="relative py-24 px-6 lg:px-8 overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 15% 60%, ${service.color}14 0%, transparent 60%)`,
        }}
      />

      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 hover:text-white transition-colors"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <X size={18} />
      </button>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
            >
              <Icon size={22} style={{ color: service.color }} />
            </div>
            <div className="section-label" style={{ color: service.color }}>
              // Service Detail
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-slate-400 mb-5 max-w-2xl">{service.subtitle}</p>
          <p className="text-slate-500 max-w-2xl leading-relaxed">{service.description}</p>
        </motion.div>

        {service.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/5">
            {service.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div
                  className="stat-number mb-1"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}, #7c3aed)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
