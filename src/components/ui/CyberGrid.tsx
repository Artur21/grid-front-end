import { useEffect, useRef } from 'react'

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const GRID_SIZE = 60
    const PULSE_INTERVAL = 120

    const nodes: { x: number; y: number; pulse: number; active: boolean }[] = []

    const buildNodes = () => {
      nodes.length = 0
      const cols = Math.ceil(canvas.width / GRID_SIZE) + 1
      const rows = Math.ceil(canvas.height / GRID_SIZE) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({ x: c * GRID_SIZE, y: r * GRID_SIZE, pulse: Math.random() * PULSE_INTERVAL, active: Math.random() > 0.85 })
        }
      }
    }
    buildNodes()
    window.addEventListener('resize', buildNodes)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time++

      // Draw grid lines
      const cols = Math.ceil(canvas.width / GRID_SIZE) + 1
      const rows = Math.ceil(canvas.height / GRID_SIZE) + 1

      for (let c = 0; c < cols; c++) {
        const x = c * GRID_SIZE
        const alpha = 0.06 + 0.02 * Math.sin(time * 0.01 + c * 0.3)
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
      for (let r = 0; r < rows; r++) {
        const y = r * GRID_SIZE
        const alpha = 0.06 + 0.02 * Math.sin(time * 0.01 + r * 0.3)
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Draw pulsing nodes
      nodes.forEach(node => {
        node.pulse++
        if (node.pulse > PULSE_INTERVAL) {
          node.pulse = 0
          node.active = Math.random() > 0.7
        }
        if (!node.active) return

        const progress = node.pulse / PULSE_INTERVAL
        const alpha = Math.sin(progress * Math.PI) * 0.8
        const radius = Math.sin(progress * Math.PI) * 3

        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`
        ctx.fill()

        // Ripple
        const rippleRadius = radius * 3
        ctx.beginPath()
        ctx.arc(node.x, node.y, rippleRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha * 0.3})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      // Scanning line
      const scanY = (time % 300) / 300 * canvas.height
      const scanGrad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 10)
      scanGrad.addColorStop(0, 'transparent')
      scanGrad.addColorStop(1, 'rgba(0, 212, 255, 0.06)')
      ctx.fillStyle = scanGrad
      ctx.fillRect(0, scanY - 60, canvas.width, 70)

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('resize', buildNodes)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}
