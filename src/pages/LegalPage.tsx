import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LEGAL_DOCS, type LegalType } from '../data/legal.data'
import PageHero from '../components/shared/PageHero'

interface LegalPageProps {
  type: LegalType
}

export default function LegalPage({ type }: LegalPageProps) {
  const doc = LEGAL_DOCS.find(d => d.type === type)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [type])

  if (!doc) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen bg-[#050508]">
      <PageHero
        label={doc.label}
        title={doc.title}
        subtitle={`Last updated: ${doc.lastUpdated}`}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-400 leading-relaxed mb-14 pb-10 border-b border-white/5"
        >
          {doc.intro}
        </motion.p>

        <div className="space-y-12">
          {doc.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>
              <p className="text-slate-400 leading-relaxed">{section.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
