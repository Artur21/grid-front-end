import { motion } from 'framer-motion'
import { Users, Award, TrendingUp } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

const TEAM = [
  { name: 'Dr. Sarah Chen', role: 'CEO & Co-Founder', bio: 'Former CISA advisor, 20yr ICS security background', initials: 'SC' },
  { name: 'Marcus Webb', role: 'CTO', bio: 'Ex-NSA, architect of grid-scale security platforms', initials: 'MW' },
  { name: 'Layla Osman', role: 'Head of Threat Intel', bio: 'Led OT threat research at Dragos and Claroty', initials: 'LO' },
  { name: 'Raj Patel', role: 'VP Engineering', bio: 'Built SOC automation at scale for 100+ utilities', initials: 'RP' },
]

const MILESTONES = [
  { year: '2018', event: 'Founded in Washington D.C. by former CISA and NSA veterans' },
  { year: '2020', event: 'First utility-scale OT security deployment — Northeast US grid' },
  { year: '2022', event: 'Expanded to 12 countries, protecting 200+ critical sites' },
  { year: '2024', event: 'Named leader in Gartner Critical Infrastructure Protection MQ' },
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
              Grid Defenders
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our team comes from CISA, NSA, Dragos, and the world's largest energy utilities. We don't just understand cybersecurity — we understand what's at stake when the lights go out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Team */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Users size={18} className="text-cyan-400" />
              Leadership Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TEAM.map((member, i) => (
                <GlassCard key={member.name} delay={i * 0.1} className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm text-black" style={{ background: 'linear-gradient(135deg,#00d4ff,#7c3aed)' }}>
                      {member.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{member.name}</div>
                      <div className="text-xs text-cyan-400 font-mono">{member.role}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp size={18} className="text-cyan-400" />
              Our Journey
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #00d4ff, rgba(0,212,255,0.1))' }} />
              <div className="space-y-6">
                {MILESTONES.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 pl-14 relative"
                  >
                    <div className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-xs font-mono font-bold text-cyan-400 border border-cyan-400/30" style={{ background: '#050508' }}>
                      {m.year}
                    </div>
                    <div className="pt-3">
                      <p className="text-sm text-slate-400 leading-relaxed">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['NERC CIP Certified', 'ISO 27001', 'SOC 2 Type II', 'IEC 62443'].map(badge => (
                <div key={badge} className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/4 text-xs text-slate-400">
                  <Award size={12} className="text-cyan-400" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
