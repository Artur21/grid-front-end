import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type ServiceDetail } from '../../data/services.data'
import DetailHero from './DetailHero'
import ImageTextBlock from './ImageTextBlock'
import FeatureGrid from './FeatureGrid'
import ExpandableContent from './ExpandableContent'
import CTASection from './CTASection'

interface LearnMoreSectionProps {
  service: ServiceDetail | null
  onClose: () => void
}

export default function LearnMoreSection({ service, onClose }: LearnMoreSectionProps) {
  useEffect(() => {
    if (!service) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [service])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#050508]"
        >
          <DetailHero service={service} onClose={onClose} />

          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 space-y-28">
            {service.sections.map((section, i) => (
              <ImageTextBlock
                key={section.id}
                title={section.title}
                body={section.body}
                imagePosition={section.imagePosition}
                color={service.color}
                index={i}
              />
            ))}

            <FeatureGrid features={service.features} color={service.color} />

            {service.faqs.length > 0 && (
              <ExpandableContent items={service.faqs} color={service.color} />
            )}
          </div>

          <CTASection cta={service.cta} color={service.color} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
