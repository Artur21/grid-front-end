import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  variant?: 'solid' | 'outline'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function GlowButton({ children, variant = 'solid', onClick, className = '', type = 'button' }: GlowButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${variant === 'solid' ? 'glow-button' : 'glow-button-outline'} ${className}`}
    >
      {children}
    </motion.button>
  )
}
