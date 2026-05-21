import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface SelectCyberProps {
  name: string
  value: string
  onChange: (value: string) => void
  options: { label: string; value: string }[]
  placeholder?: string
}

export default function SelectCyber({ name, value, onChange, options, placeholder = 'Select...' }: SelectCyberProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selected = options.find(o => o.value === value)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="input-cyber flex items-center justify-between gap-2 text-left"
        style={{ borderColor: open ? 'rgba(0,212,255,0.5)' : undefined, boxShadow: open ? '0 0 0 3px rgba(0,212,255,0.1)' : undefined }}
      >
        <span className={selected ? 'text-slate-100' : 'text-slate-500'}>
          {selected ? selected.label : placeholder}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
          <ChevronDown size={14} className="text-cyan-400" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{ transformOrigin: 'top', background: '#0d0d14', border: '1px solid rgba(0,212,255,0.2)', zIndex: 50 }}
            className="absolute left-0 right-0 mt-1 rounded-xl overflow-hidden shadow-xl"
          >
            {options.map(opt => {
              const isSelected = opt.value === value
              return (
                <li key={opt.value}>
                  <button
                    type="button"
                    onClick={() => { onChange(opt.value); setOpen(false) }}
                    className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-150"
                    style={{
                      color: isSelected ? '#00d4ff' : '#94a3b8',
                      background: isSelected ? 'rgba(0,212,255,0.08)' : 'transparent',
                    }}
                    onMouseEnter={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,212,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.color = '#00d4ff' }}
                    onMouseLeave={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8' }}
                  >
                    {opt.label}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Hidden input for form compatibility */}
      <input type="hidden" name={name} value={value} />
    </div>
  )
}
