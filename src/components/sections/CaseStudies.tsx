import { motion } from 'framer-motion'
import { Activity, Shield, FileCheck } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

const CASES = [
  {
    icon: Activity,
    sector: 'Managed Network Operations',
    title: 'Operational visibility across distributed assets',
    challenge: 'Operators of multi-site renewable portfolios often lack real-time visibility into asset health, communication status and fault conditions — particularly as portfolios grow and field teams become stretched.',
    approach: 'A managed NOC service provides continuous monitoring across your generation and storage estate, with defined escalation paths, structured fault management and clear handover between remote and field teams. Operators gain consistent visibility without building an in-house monitoring capability from scratch.',
    color: '#00d4ff',
  },
  {
    icon: Shield,
    sector: 'Managed Security Services',
    title: 'Security monitoring in OT environments',
    challenge: 'Standard IT security tools and processes are often poorly suited to OT environments, where availability takes priority and intrusive scanning or automated responses can cause operational disruption.',
    approach: 'OT-aware monitoring focuses on passive detection and behavioural analysis, allowing security events to be identified and investigated without interfering with operational systems. Incident response follows playbooks designed for industrial contexts, with operational impact assessed at every stage.',
    color: '#7c3aed',
  },
  {
    icon: FileCheck,
    sector: 'Assessment & Design Services',
    title: 'Building the right foundation from the start',
    challenge: 'Organisations commissioning new renewable assets or expanding their portfolios frequently encounter monitoring and security as an afterthought — resulting in fragmented tooling, gaps in coverage and rework that could have been avoided.',
    approach: 'An assessment and design engagement at the right stage of a project establishes the architecture, tooling and processes needed to support both operational monitoring and security from day one. This reduces long-term cost and avoids the complexity of retrofitting capability onto infrastructure already in service.',
    color: '#00d4ff',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 relative overflow-hidden" style={{ background: '#0a0a0f' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(0,212,255,0.2),transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(0,212,255,0.2),transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label mb-4">// How We Help</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The Challenges{' '}
            <span style={{ background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              We Are Built For
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Renewable energy operators face a distinct set of operational and security challenges. Our services are designed around the realities of these environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => {
            const Icon = c.icon
            return (
              <GlassCard key={c.title} delay={i * 0.15} className="p-7 flex flex-col">
                {/* Header */}
                <div className="mb-5 pb-5 border-b border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}18`, border: `1px solid ${c.color}30` }}>
                      <Icon size={15} style={{ color: c.color }} />
                    </div>
                    <div className="text-xs font-mono text-slate-500">{c.sector}</div>
                  </div>
                  <div className="text-base font-bold text-white leading-snug">{c.title}</div>
                </div>

                {/* Challenge */}
                <div className="mb-5">
                  <div className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">The Challenge</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.challenge}</p>
                </div>

                {/* Approach */}
                <div className="mt-auto pt-5 border-t border-white/5">
                  <div className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">Our Approach</div>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.approach}</p>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
