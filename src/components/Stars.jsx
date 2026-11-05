import { useEffect, useRef } from 'react'

// Fixed twinkling starfield behind the whole page. Static when animations are off.
export default function Stars() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    const x = c.getContext('2d')
    const still = document.documentElement.dataset.motion === 'off'
    let W = 0, H = 0, stars = [], raf = 0
    const size = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2)
      W = window.innerWidth; H = window.innerHeight
      c.width = W * d; c.height = H * d
      x.setTransform(d, 0, 0, d, 0, 0)
      const n = Math.min(220, Math.round((W * H) / 7000))
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H, r: 0.4 + Math.random() * 1.3,
        s: 0.4 + Math.random() * 1.6, p: Math.random() * 6.28,
        c: Math.random() < 0.18 ? '192,132,252' : '237,231,255',
      }))
    }
    const draw = (t) => {
      x.clearRect(0, 0, W, H)
      for (const s of stars) {
        const a = still ? 0.6 : 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t / 1000 * s.s + s.p))
        x.fillStyle = `rgba(${s.c},${a.toFixed(3)})`
        x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.283); x.fill()
      }
      if (!still && !document.hidden) raf = requestAnimationFrame(draw)
      else if (!still) raf = requestAnimationFrame(draw)
    }
    size()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', size)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', size) }
  }, [])
  return <canvas className="stars" ref={ref} aria-hidden="true" />
}
