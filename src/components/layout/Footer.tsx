import { Shield, Twitter, Linkedin, Github, ExternalLink } from 'lucide-react'

const FOOTER_LINKS = {
  Platform: ['OT/ICS Security', 'Threat Intelligence', 'SOC Services', 'Incident Response', 'Compliance'],
  Company: ['About Us', 'Leadership', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'Case Studies', 'Threat Reports', 'Blog', 'Webinars'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'],
}

const SOCIALS = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5" style={{ background: '#030305' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg flex items-center justify-center">
                  <Shield size={18} className="text-black" strokeWidth={2.5} />
                </div>
                <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-md opacity-30" />
              </div>
              <span className="text-white font-bold text-xl">Grid<span className="text-cyan-400">Sec</span></span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              The trusted cybersecurity partner for energy utilities, grid operators, and critical infrastructure worldwide.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map(s => {
                const Icon = s.icon
                return (
                  <a key={s.label} href={s.href} className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/8 text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-600 hover:text-slate-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} GridSec, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-700">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              All systems operational
            </div>
            <a href="#" className="flex items-center gap-1 text-xs text-slate-700 hover:text-slate-400 transition-colors">
              Status Page <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
