import { motion } from 'framer-motion'
import { Shield, Activity, FileCheck } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

const SERVICES = [
  {
    icon: Activity,
    title: 'Managed Network Operations',
    description: 'Continuous monitoring of your renewable energy assets and communication infrastructure. Our NOC team manages performance, availability and fault response across generation, storage and grid-connection assets — so your operational staff have clear visibility and a defined escalation path at all times.',
    features: [
      'Asset and performance monitoring',
      'Fault detection and escalation management',
      'Remote diagnostics and field coordination',
      'Integration with SCADA, DMS and EMS platforms',
    ],
    color: '#00d4ff',
  },
  {
    icon: Shield,
    title: 'Managed Security Services',
    description: 'OT-aware threat monitoring and incident response delivered by analysts who understand the operational constraints of industrial environments. We detect, investigate and respond to security events without disrupting the systems your operations depend on.',
    features: [
      'Continuous OT/ICS security monitoring',
      'Incident detection, investigation and response',
      'Compliance alignment with IEC 62443 and NIS2',
      'Vulnerability management for operational environments',
    ],
    color: '#7c3aed',
  },
  {
    icon: FileCheck,
    title: 'Assessment & Design Services',
    description: 'Architecture reviews, security assessments and operational readiness evaluations for organisations building or improving their OT monitoring and security capability. We work with your team to understand current gaps and design the right foundation — whether you are commissioning new assets or maturing an existing programme.',
    features: [
      'OT network architecture review and design',
      'Security posture and gap assessments',
      'NOC and SOC readiness evaluations',
      'Reference designs for renewable energy sites',
    ],
    color: '#00d4ff',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#050508] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label mb-4">// Our Services</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Built for{' '}
            <span style={{ background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Operational Environments
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three service lines covering the full operational and security lifecycle — from ongoing managed monitoring through to advisory and design.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <GlassCard key={service.title} delay={i * 0.1} className="p-7 group cursor-pointer">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Feature list */}
                <ul className="space-y-2">
                  {service.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Link */}
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
  )
}
