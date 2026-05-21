import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, Users, ShieldCheck, Zap } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import GlassCard from '../components/ui/GlassCard'
import GlowButton from '../components/ui/GlowButton'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Operations First',
    body: 'Every recommendation we make considers operational impact. Security and monitoring should protect your systems — not create new risks to them.',
    color: '#00d4ff',
  },
  {
    icon: Globe,
    title: 'Built for OT',
    body: 'We came from operational and industrial backgrounds. We understand the constraints, the protocols and the priorities that make OT environments different from enterprise IT.',
    color: '#7c3aed',
  },
  {
    icon: Users,
    title: 'Partnership, Not Tooling',
    body: 'Managed services that work are built on clear relationships and shared understanding, not just dashboards and alerts. We invest time in understanding your specific environment.',
    color: '#00d4ff',
  },
  {
    icon: Zap,
    title: 'Practical Outcomes',
    body: 'We focus on capability that delivers real improvement in your operational and security posture. We do not sell compliance theatre or tools that sit unused.',
    color: '#7c3aed',
  },
]

export default function CompanyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-[#050508]">
      <PageHero
        label="// Company · About"
        title="OT Security and"
        titleAccent="Operations Specialists"
        subtitle="GridSec was founded by people who spent years working inside operational environments before building services for them."
      />

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-block w-8 h-0.5 mb-5" style={{ background: 'linear-gradient(90deg,#00d4ff,transparent)' }} />
            <h2 className="text-2xl font-extrabold text-white mb-4">Why We Exist</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Renewable energy operators are managing increasingly complex portfolios — distributed generation, battery storage, complex grid connections — with operational teams that are stretched and cybersecurity practices that have not kept pace.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The tools and services designed for IT environments apply poorly here. We built GridSec to provide managed NOC and SOC services that actually fit the operational realities of renewable energy and critical infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="inline-block w-8 h-0.5 mb-5" style={{ background: 'linear-gradient(90deg,#7c3aed,transparent)' }} />
            <h2 className="text-2xl font-extrabold text-white mb-4">Who We Work With</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Our clients are operators, asset owners and EPCs working across wind, solar, storage and grid infrastructure. We work with organisations from early-stage portfolio commissioning through to mature operators looking to improve existing capability.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We serve clients across NA, EMEA, APAC, EU and LATAM. Our team works across time zones to provide the coverage our clients need.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-white/5 py-20 px-6 lg:px-8" style={{ background: '#0a0a0f' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="section-label mb-3">// How We Work</div>
            <h2 className="text-3xl font-extrabold text-white">Our Principles</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <GlassCard key={v.title} delay={i * 0.1} className="p-7">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${v.color}18`, border: `1px solid ${v.color}30` }}
                  >
                    <Icon size={18} style={{ color: v.color }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.body}</p>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </div>

      {/* Careers */}
      <div id="careers" className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-label mb-4">// Careers</div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Join the Team
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We are a small, focused team. When we hire, we look for people with real operational or security experience in industrial environments — not just credentials.
            </p>
            <p className="text-slate-500 mb-10 text-sm">
              No open roles at the moment. If you have a background in OT security or NOC operations and would like to introduce yourself, we're always interested in speaking with good people.
            </p>
            <Link to="/#contact">
              <GlowButton variant="outline">Get in Touch</GlowButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
