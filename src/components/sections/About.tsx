import { motion } from 'framer-motion'
import { Users, Cpu, Shield, FileCheck } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

const PILLARS = [
  {
    icon: Cpu,
    title: 'OT Engineering',
    description: 'Our team has designed, commissioned and operated renewable energy infrastructure. We understand the systems, protocols and operational constraints of the environments we support.',
    initials: 'OT',
  },
  {
    icon: Shield,
    title: 'Security Operations',
    description: 'Security analysts with OT-specific backgrounds and experience responding to incidents in industrial environments — where standard IT playbooks do not apply.',
    initials: 'SO',
  },
  {
    icon: Users,
    title: 'Network Operations',
    description: 'NOC engineers experienced in managing SCADA, communications and supervisory networks across distributed generation and storage portfolios.',
    initials: 'NO',
  },
  {
    icon: FileCheck,
    title: 'Advisory & Design',
    description: 'Consultants and architects who have built monitoring and security programmes for critical infrastructure — from initial assessment through to operational handover.',
    initials: 'AD',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#050508] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label mb-4">// Who We Are</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Built by{' '}
            <span style={{ background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              OT Practitioners
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our founders and senior team come from operational technology, renewable energy and critical infrastructure backgrounds. This is not a technology company that learned about OT — it is a team that has worked inside these environments and built this service around what operators actually need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <GlassCard key={pillar.title} delay={i * 0.1} className="p-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
