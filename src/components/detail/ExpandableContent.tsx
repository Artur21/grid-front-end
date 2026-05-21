import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface ExpandableItem {
  question: string
  answer: string
}

interface ExpandableContentProps {
  items: ExpandableItem[]
  color?: string
  title?: string
}

export default function ExpandableContent({
  items,
  color = '#00d4ff',
  title = 'Common Questions',
}: ExpandableContentProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="section-label mb-3" style={{ color }}>// FAQ</div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white">{title}</h3>
      </motion.div>

      <div className="space-y-2">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl overflow-hidden"
              style={{ border: `1px solid ${isOpen ? `${color}30` : 'rgba(255,255,255,0.06)'}`, transition: 'border-color 0.3s ease' }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                style={{ background: isOpen ? `${color}08` : 'rgba(255,255,255,0.03)', transition: 'background 0.3s ease' }}
              >
                <span className="text-sm font-semibold text-white">{item.question}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={16} className="text-slate-500" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-5 pb-5 pt-1">
                      <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
