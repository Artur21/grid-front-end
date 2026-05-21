import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Menu, X, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlowButton from '../ui/GlowButton'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'How We Help', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg flex items-center justify-center">
                  <Shield size={18} className="text-black" strokeWidth={2.5} />
                </div>
                <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-tight">Smart<span className="text-cyan-400">Grid</span></span>
                <div className="text-[10px] font-mono text-slate-500 leading-none tracking-widest uppercase">Critical Infrastructure</div>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#contact" className="glow-button text-sm px-5 py-2 rounded-lg">
                Get in Touch
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm z-40"
            style={{
              background: 'rgba(5,5,8,0.97)',
              backdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(0,212,255,0.1)',
            }}
          >
            <div className="flex flex-col h-full px-6 pt-24 pb-8">
              <div className="flex-1 space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center justify-between py-4 border-b border-white/5 text-slate-300 hover:text-cyan-400 transition-colors text-lg font-medium"
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-slate-600" />
                  </motion.a>
                ))}
              </div>
              <div className="space-y-3 mt-8">
                <a href="#contact" onClick={() => setMobileOpen(false)} className="glow-button block text-center py-3 rounded-lg">
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
