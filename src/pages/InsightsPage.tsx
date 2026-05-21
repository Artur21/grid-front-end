import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import GlassCard from '../components/ui/GlassCard'
import { INSIGHTS } from '../data/insights.data'

const CATEGORY_COLORS: Record<string, string> = {
  Compliance: '#7c3aed',
  Technology: '#00d4ff',
  Operations: '#22c55e',
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <PageHero
        label="// Resources · Insights"
        title="OT Security &"
        titleAccent="Operations Intelligence"
        subtitle="Practical thinking on OT security, network operations and the realities of managing renewable energy infrastructure."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHTS.map((insight, i) => {
            const categoryColor = CATEGORY_COLORS[insight.category] ?? '#00d4ff'
            return (
              <GlassCard key={insight.slug} delay={i * 0.1} className="p-7 flex flex-col group">
                {/* Category & reading time */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider"
                    style={{ color: categoryColor }}
                  >
                    <Tag size={10} />
                    {insight.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-600">
                    <Clock size={10} />
                    {insight.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors">
                  {insight.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  {insight.excerpt}
                </p>

                {/* Date + read link */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-slate-600">{insight.date}</span>
                  <Link
                    to={`/resources/insights/${insight.slug}`}
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-600 group-hover:text-cyan-400 transition-colors"
                  >
                    Read
                    <motion.span
                      className="inline-block"
                      animate={{ x: 0 }}
                      whileHover={{ x: 3 }}
                    >
                      <ArrowRight size={12} />
                    </motion.span>
                  </Link>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}
