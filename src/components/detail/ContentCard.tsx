import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import clsx from 'clsx'

interface ContentCardProps {
  children: ReactNode
  className?: string
  delay?: number
  glowColor?: string
}

export default function ContentCard({
  children,
  className,
  delay = 0,
  glowColor = 'rgba(0,212,255,0.15)',
}: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={clsx('glass-card', className)}
    >
      {children}
    </motion.div>
  )
}
