import { motion } from 'framer-motion'

interface PageHeroProps {
  label: string
  title: string
  titleAccent?: string
  subtitle?: string
  color?: string
}

export default function PageHero({
  label,
  title,
  titleAccent,
  subtitle,
  color = '#00d4ff',
}: PageHeroProps) {
  return (
    <div className="relative pt-36 pb-20 px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 40%, ${color}10 0%, transparent 60%)`,
        }}
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-4" style={{ color }}>
            {label}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            {titleAccent ? (
              <>
                {title}{' '}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${color}, #7c3aed)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {titleAccent}
                </span>
              </>
            ) : (
              title
            )}
          </h1>
          {subtitle && (
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
