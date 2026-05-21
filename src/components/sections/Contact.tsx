import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import GlowButton from '../ui/GlowButton'
import SelectCyber from '../ui/SelectCyber'

const ROLE_OPTIONS = [
  { value: '', label: 'Select role...' },
  { value: 'Asset Owner / Operator', label: 'Asset Owner / Operator' },
  { value: 'Operations Manager', label: 'Operations Manager' },
  { value: 'OT / ICS Engineer', label: 'OT / ICS Engineer' },
  { value: 'Security Manager / CISO', label: 'Security Manager / CISO' },
  { value: 'Executive / Director', label: 'Executive / Director' },
  { value: 'EPC / Developer', label: 'EPC / Developer' },
  { value: 'Other', label: 'Other' },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  company: string
  role: string
  message: string
}

const CONTACT_INFO = [
  { icon: Mail, label: 'General Enquiries', value: 'info@smartgrid.io' },
  { icon: Phone, label: 'Talk to the Team', value: 'Arrange a call via the form' },
  { icon: MapPin, label: 'Where We Work', value: 'NA · EMEA · APAC · EU · LATAM' },
]

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', role: '', message: '' })
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error || 'Something went wrong')
      }

      setState('success')
      setForm({ name: '', email: '', company: '', role: '', message: '' })
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message')
    }
  }

  return (
    <section id="contact" className="py-32 bg-[#050508] relative overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label mb-4">// Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Talk to{' '}
            <span style={{ background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              the Team
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Whether you're evaluating managed services, planning a new deployment or looking for an independent assessment — we're happy to have a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Contact info */}
          <div className="space-y-5">
            {CONTACT_INFO.map((info, i) => {
              const Icon = info.icon
              return (
                <GlassCard key={info.label} delay={i * 0.1} className="p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{info.label}</div>
                    <div className="text-sm text-white font-medium">{info.value}</div>
                  </div>
                </GlassCard>
              )
            })}

            <GlassCard delay={0.3} className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full" style={{ boxShadow: '0 0 8px rgba(34,197,94,0.8)' }} />
                <span className="text-xs font-mono text-green-400">MANAGED SERVICES</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Already a managed services client? Use the contact details provided during onboarding to reach the operations or security team directly.
              </p>
            </GlassCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <GlassCard delay={0.2} className="p-8">
              {state === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-slate-400 mb-6">We'll be in touch shortly to arrange a conversation.</p>
                  <button onClick={() => setState('idle')} className="glow-button-outline text-sm px-6 py-2 rounded-lg text-cyan-400 border border-cyan-400/40">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className="input-cyber" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">Work Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@utility.com" className="input-cyber" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">Company *</label>
                      <input name="company" value={form.company} onChange={handleChange} required placeholder="Energy Corp" className="input-cyber" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">Your Role</label>
                      <SelectCyber
                        name="role"
                        value={form.role}
                        onChange={val => setForm(prev => ({ ...prev, role: val }))}
                        options={ROLE_OPTIONS}
                        placeholder="Select role..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">How Can We Help? *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Tell us about your portfolio, what you're working on, or what you'd like to discuss." className="input-cyber resize-none" />
                  </div>

                  {state === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-lg text-red-400 text-sm" style={{ background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.2)' }}>
                      <AlertCircle size={16} />
                      {errorMsg}
                    </div>
                  )}

                  <GlowButton type="submit" className="w-full flex items-center justify-center gap-2 py-4 text-base">
                    {state === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </GlowButton>

                  <p className="text-xs text-slate-600 text-center">
                    By submitting, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
