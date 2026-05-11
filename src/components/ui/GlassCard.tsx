import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  delay?: number
  hover?: boolean
}

export default function GlassCard({ children, className, glowColor = 'rgba(0,212,255,0.15)', delay = 0, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={hover ? { y: -4, boxShadow: `0 20px 60px ${glowColor}` } : undefined}
      className={clsx('glass-card', className)}
    >
      {children}
    </motion.div>
  )
}
