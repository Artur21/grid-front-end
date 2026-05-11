import { motion } from 'framer-motion'
import { Shield, Activity, AlertTriangle, FileCheck, Eye, Cpu } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

const SERVICES = [
  {
    icon: Shield,
    title: 'OT/ICS Security',
    description: 'Purpose-built protection for operational technology and industrial control systems — designed for zero-downtime environments.',
    features: ['Asset discovery & inventory', 'Passive network monitoring', 'Protocol-aware inspection', 'Anomaly detection'],
    color: '#00d4ff',
  },
  {
    icon: Activity,
    title: 'Threat Intelligence',
    description: 'Real-time sector-specific threat feeds enriched with energy-sector intelligence from our global sensor network.',
    features: ['Energy-sector IOCs', 'APT actor tracking', 'Dark web monitoring', 'Threat scoring engine'],
    color: '#7c3aed',
  },
  {
    icon: Eye,
    title: 'Security Operations',
    description: '24/7 managed detection and response from security analysts with deep OT expertise and critical infrastructure experience.',
    features: ['Continuous monitoring', 'Tier 3 OT expertise', 'Sub-4-minute MTTD', 'Direct CISO access'],
    color: '#00d4ff',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rapid containment and recovery for cyber incidents in industrial environments — without disrupting operational continuity.',
    features: ['OT-safe forensics', '4h SLA activation', 'Playbook automation', 'Recovery coordination'],
    color: '#ff6b35',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Risk',
    description: 'Automated compliance management for NERC CIP, IEC 62443, and NIST CSF — with continuous audit-ready reporting.',
    features: ['NERC CIP automation', 'IEC 62443 alignment', 'Gap assessments', 'Audit-ready reporting'],
    color: '#7c3aed',
  },
  {
    icon: Cpu,
    title: 'Vulnerability Management',
    description: 'Risk-based vulnerability prioritization built for OT environments where patching windows are narrow and stakes are high.',
    features: ['OT-safe scanning', 'Risk-based scoring', 'Vendor advisories', 'Patch orchestration'],
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
          <div className="section-label mb-4">// What We Do</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Complete{' '}
            <span style={{ background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Security Coverage
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From asset discovery to incident recovery — every layer of your operational technology environment protected by specialists who understand energy.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
