import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

const CASES = [
  {
    client: 'Tier-1 Utility',
    region: 'Northeast US',
    sector: 'Electric Distribution',
    challenge: 'Zero visibility into OT network — 2,400 field devices undiscovered',
    results: [
      { metric: '2,400+', label: 'Devices Discovered' },
      { metric: '0', label: 'Days Downtime' },
      { metric: '6wks', label: 'To Full Coverage' },
    ],
    quote: 'GridSec found assets on our network that we didn\'t know existed. We went from blind to fully monitored in six weeks.',
    role: 'CISO, Regional Energy Provider',
  },
  {
    client: 'National Grid Operator',
    region: 'Western Europe',
    sector: 'Transmission & Generation',
    challenge: 'Nation-state threat actor conducting persistent reconnaissance on HV substations',
    results: [
      { metric: '94%', label: 'Threat Confidence' },
      { metric: '3min', label: 'Mean Time to Detect' },
      { metric: '100%', label: 'Containment Rate' },
    ],
    quote: 'Their threat intelligence team identified the actor attribution within hours. We\'d been surveilled for months without knowing.',
    role: 'Head of OT Security, EU Grid Operator',
  },
  {
    client: 'Natural Gas Processor',
    region: 'Gulf Coast, US',
    sector: 'Oil & Gas',
    challenge: 'Ransomware incident threatened to spread from IT to OT and halt operations',
    results: [
      { metric: '<4h', label: 'SLA Activation' },
      { metric: '$0', label: 'Ransom Paid' },
      { metric: '100%', label: 'OT Segment Preserved' },
    ],
    quote: 'GridSec\'s incident team contained the spread before it touched a single OT device. Our plant never stopped running.',
    role: 'VP Operations, Natural Gas Midstream Co.',
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
          <div className="section-label mb-4">// Proven Results</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Trusted by{' '}
            <span style={{ background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Critical Operators
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From regional utilities to national grid operators — GridSec has protected some of the world's most critical energy infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <GlassCard key={c.client} delay={i * 0.15} className="p-7 flex flex-col">
              {/* Header */}
              <div className="mb-5 pb-5 border-b border-white/5">
                <div className="text-xs font-mono text-cyan-400 mb-1">{c.sector}</div>
                <div className="text-base font-bold text-white">{c.client}</div>
                <div className="text-xs text-slate-500">{c.region}</div>
              </div>

              {/* Challenge */}
              <div className="mb-5">
                <div className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">Challenge</div>
                <p className="text-sm text-slate-400 leading-relaxed">{c.challenge}</p>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {c.results.map(r => (
                  <div key={r.label} className="text-center p-3 rounded-lg" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.1)' }}>
                    <div className="text-lg font-bold text-cyan-400 font-mono">{r.metric}</div>
                    <div className="text-[10px] text-slate-600 leading-tight mt-1">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-auto pt-5 border-t border-white/5">
                <Quote size={16} className="text-slate-700 mb-2" />
                <p className="text-sm text-slate-400 italic leading-relaxed mb-3">"{c.quote}"</p>
                <div className="text-xs text-slate-600 font-mono">— {c.role}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
