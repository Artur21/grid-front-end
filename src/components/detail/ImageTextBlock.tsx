import { motion } from 'framer-motion'

interface ImageTextBlockProps {
  title: string
  body: string
  imagePosition?: 'left' | 'right'
  color?: string
  index?: number
}

function DecorativePanel({ color }: { color: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-64 lg:h-full min-h-[260px]"
      style={{
        background: `linear-gradient(135deg, ${color}10 0%, rgba(124,58,237,0.08) 100%)`,
        border: `1px solid ${color}20`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${color}10 1px, transparent 1px),
            linear-gradient(90deg, ${color}10 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${color}20 0%, transparent 65%)`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          <div
            className="w-6 h-6 rounded-md"
            style={{ background: `linear-gradient(135deg, ${color}, #7c3aed)`, opacity: 0.8 }}
          />
        </div>
      </div>
    </div>
  )
}

export default function ImageTextBlock({
  title,
  body,
  imagePosition = 'right',
  color = '#00d4ff',
  index = 0,
}: ImageTextBlockProps) {
  const textFirst = imagePosition === 'left'

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center ${textFirst ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: textFirst ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
        className={textFirst ? 'lg:order-1' : 'lg:order-2'}
      >
        <div
          className="inline-block w-8 h-0.5 mb-5"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-5">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{body}</p>
      </motion.div>

      {/* Visual side */}
      <motion.div
        initial={{ opacity: 0, x: textFirst ? 24 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.05 + 0.1, ease: 'easeOut' }}
        className={textFirst ? 'lg:order-2' : 'lg:order-1'}
      >
        <DecorativePanel color={color} />
      </motion.div>
    </div>
  )
}
