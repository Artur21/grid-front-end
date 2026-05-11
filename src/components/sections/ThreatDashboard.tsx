import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Wifi, AlertOctagon } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

const INITIAL_THREATS = [
  { id: 1, severity: 'critical', source: '185.220.101.x', target: 'Substation CTRL-7', type: 'Modbus Scan', time: '00:03s ago', region: 'Eastern Europe' },
  { id: 2, severity: 'high', source: '91.108.4.x', target: 'SCADA HMI-2', type: 'Brute Force', time: '00:47s ago', region: 'Russia' },
  { id: 3, severity: 'medium', source: '45.155.205.x', target: 'DNP3 Endpoint', type: 'Lateral Movement', time: '01:12s ago', region: 'North Africa' },
  { id: 4, severity: 'low', source: '178.20.40.x', target: 'Engineering WS', type: 'Port Scan', time: '02:05s ago', region: 'Romania' },
  { id: 5, severity: 'high', source: '194.26.192.x', target: 'PLC Rack-3', type: 'Anomalous Traffic', time: '03:30s ago', region: 'Ukraine' },
]

const LOG_LINES = [
  '> [ALERT] Modbus command replay detected on OT segment 192.168.10.0/24',
  '> [INFO]  Threat actor VOLT TYPHOON signature matched — confidence 94%',
  '> [BLOCK] Lateral movement attempt blocked: CTRL-7 → Historian DB',
  '> [INFO]  Pulling updated IOC feed from GridSec TI Platform...',
  '> [OK]    12,847 new indicators loaded successfully',
  '> [ALERT] Unusual DNP3 traffic pattern on feeder 7 — escalating to L2',
  '> [INFO]  Auto-isolation rule triggered: Zone 3 quarantine active',
  '> [OK]    Incident INC-2024-1187 created and assigned to SOC-Analyst-4',
]

const SEVERITY_COLORS: Record<string, string> = {
  critical: '#ff4444',
  high: '#ff8c00',
  medium: '#00d4ff',
  low: '#22c55e',
}

const COUNTERS = [
  { label: 'Active Threats', value: 3, color: '#ff4444' },
  { label: 'Blocked Today', value: 1247, color: '#00d4ff' },
  { label: 'Assets Online', value: 512, color: '#22c55e' },
  { label: 'Alerts Resolved', value: 98, color: '#7c3aed' },
]

export default function ThreatDashboard() {
  const [logIndex, setLogIndex] = useState(0)
  const [visibleLog, setVisibleLog] = useState<string[]>([])
  const [threats] = useState(INITIAL_THREATS)

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex(i => {
        const next = (i + 1) % LOG_LINES.length
        setVisibleLog(prev => [...prev.slice(-5), LOG_LINES[next]])
        return next
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setVisibleLog(LOG_LINES.slice(0, 4))
  }, [])

  return (
    <section id="platform" className="py-32 relative overflow-hidden" style={{ background: '#0a0a0f' }}>
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.3), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.3), transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4">// Threat Intelligence Platform</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Real-Time{' '}
            <span style={{ background: 'linear-gradient(135deg,#00d4ff,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Threat Visibility
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our platform continuously monitors your OT environment, correlates threat intelligence, and responds — all before an operator touches a keyboard.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Counters column */}
          <div className="space-y-4">
            {COUNTERS.map((c, i) => (
              <GlassCard key={c.label} delay={i * 0.1} className="p-5 flex items-center gap-4">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }} />
                <div>
                  <div className="text-2xl font-bold text-white font-mono">{c.value.toLocaleString()}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{c.label}</div>
                </div>
              </GlassCard>
            ))}

            {/* Status indicator */}
            <GlassCard delay={0.4} className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Wifi size={14} className="text-cyan-400" />
                <span className="text-xs font-mono text-cyan-400">SENSOR NETWORK</span>
              </div>
              <div className="space-y-2">
                {['Americas', 'EMEA', 'APAC'].map(r => (
                  <div key={r} className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{r}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full" style={{ boxShadow: '0 0 6px rgba(34,197,94,0.8)' }} />
                      <span className="text-xs text-green-400 font-mono">ONLINE</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Threat feed */}
          <div className="lg:col-span-2 space-y-4">
            <GlassCard className="p-5" delay={0.2}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <AlertOctagon size={16} className="text-red-400" />
                  <span className="text-sm font-mono text-slate-300">LIVE THREAT FEED</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  <span className="text-xs text-slate-500 font-mono">LIVE</span>
                </div>
              </div>

              <div className="space-y-2">
                {threats.map((threat, i) => (
                  <motion.div
                    key={threat.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg text-xs font-mono"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                  >
                    <div className="threat-dot" style={{ background: SEVERITY_COLORS[threat.severity], boxShadow: `0 0 8px ${SEVERITY_COLORS[threat.severity]}` }} />
                    <span className="text-slate-600 w-24 flex-shrink-0">{threat.source}</span>
                    <span className="text-slate-400 flex-1 truncate">→ {threat.target}</span>
                    <span className="text-slate-500 hidden md:block w-32 flex-shrink-0 truncate">{threat.type}</span>
                    <span className="text-slate-600 w-20 flex-shrink-0 text-right">{threat.time}</span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] uppercase font-bold w-20 text-center flex-shrink-0"
                      style={{ color: SEVERITY_COLORS[threat.severity], background: `${SEVERITY_COLORS[threat.severity]}15` }}
                    >
                      {threat.severity}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Terminal log */}
            <GlassCard className="p-5" delay={0.3}>
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={14} className="text-cyan-400" />
                <span className="text-xs font-mono text-cyan-400">SOC AUTOMATION LOG</span>
                <div className="flex gap-1 ml-auto">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
              </div>
              <div className="space-y-1.5 min-h-[140px]">
                <AnimatePresence mode="popLayout">
                  {visibleLog.map((line, i) => (
                    <motion.div
                      key={line + i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs font-mono leading-relaxed"
                      style={{
                        color: line.includes('[ALERT]') ? '#ff8c00'
                          : line.includes('[BLOCK]') ? '#ff4444'
                          : line.includes('[OK]') ? '#22c55e'
                          : '#64748b'
                      }}
                    >
                      {line}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
