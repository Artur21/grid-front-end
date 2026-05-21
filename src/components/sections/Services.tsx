import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import LearnMoreSection from '../detail/LearnMoreSection'
import { SERVICES_DATA, type ServiceDetail } from '../../data/services.data'

export default function Services() {
  const [selected, setSelected] = useState<ServiceDetail | null>(null)

  return (
    <>
      <section id="services" className="py-32 bg-[#050508] relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="section-label mb-4">// Our Services</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Built for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg,#00d4ff,#7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Operational Environments
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Three service lines covering the full operational and security lifecycle — from ongoing managed monitoring through to advisory and design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, i) => {
              const Icon = service.icon
              return (
                <GlassCard
                  key={service.id}
                  delay={i * 0.1}
                  className="p-7 group cursor-pointer"
                  onClick={() => setSelected(service)}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${service.color}18`,
                      border: `1px solid ${service.color}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: service.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                        <div
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: service.color }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                    <span>Learn more</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      <LearnMoreSection service={selected} onClose={() => setSelected(null)} />
    </>
  )
}
