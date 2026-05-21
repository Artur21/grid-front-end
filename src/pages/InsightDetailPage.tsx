import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import { INSIGHTS } from '../data/insights.data'
import GlassCard from '../components/ui/GlassCard'
import GlowButton from '../components/ui/GlowButton'

const CATEGORY_COLORS: Record<string, string> = {
  Compliance: '#7c3aed',
  Technology: '#00d4ff',
  Operations: '#22c55e',
}

export default function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const insight = INSIGHTS.find(a => a.slug === slug)
  const related = INSIGHTS.filter(a => insight?.relatedSlugs.includes(a.slug))

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!insight) return <Navigate to="/resources/insights" replace />

  const categoryColor = CATEGORY_COLORS[insight.category] ?? '#00d4ff'

  return (
    <div className="min-h-screen bg-[#050508]">
      {/* Hero */}
      <div className="relative pt-36 pb-16 px-6 lg:px-8 overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 20% 60%, ${categoryColor}10 0%, transparent 60%)` }}
        />
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/resources/insights"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors mb-8"
            >
              <ArrowLeft size={12} />
              All Insights
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider"
                style={{ color: categoryColor }}
              >
                <Tag size={10} />
                {insight.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-600">
                <Calendar size={10} />
                {insight.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-600">
                <Clock size={10} />
                {insight.readingTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              {insight.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">{insight.excerpt}</p>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 space-y-14">
        {insight.sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
          >
            <div
              className="inline-block w-6 h-0.5 mb-4"
              style={{ background: `linear-gradient(90deg, ${categoryColor}, transparent)` }}
            />
            <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
            <p className="text-slate-400 leading-relaxed">{section.body}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-white/5 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-label mb-3">// Talk to Us</div>
          <h2 className="text-2xl font-extrabold text-white mb-4">Have questions about your OT environment?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Our team works with renewable energy operators across NA, EMEA, APAC and LATAM. We're happy to discuss your specific situation.
          </p>
          <Link to="/#contact">
            <GlowButton>Get in Touch</GlowButton>
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <div className="section-label mb-8">// Related Insights</div>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((r, i) => (
              <GlassCard key={r.slug} delay={i * 0.1} className="p-6">
                <div
                  className="text-xs font-mono uppercase tracking-wider mb-3"
                  style={{ color: CATEGORY_COLORS[r.category] ?? '#00d4ff' }}
                >
                  {r.category}
                </div>
                <h3 className="font-bold text-white mb-2 leading-snug">{r.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{r.excerpt}</p>
                <Link
                  to={`/resources/insights/${r.slug}`}
                  className="text-xs font-mono text-slate-600 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  Read <ArrowLeft size={10} className="rotate-180" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
