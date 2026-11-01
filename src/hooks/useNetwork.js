import { useEffect } from 'react'

// Animated network of nodes behind the hero. Lines glow near the pointer.
export default function useNetwork(heroRef, canvasRef) {
  useEffect(() => {
    const hero = heroRef.current
    const c = canvasRef.current
    if (!hero || !c) return
    const x = c.getContext('2d')
    const root = document.documentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let W = 0, H = 0, pts = [], mx = -9999, my = -9999
    let run = true, rgb = '39,69,232', tick = 0, raf = 0

    function size() {
      const r = hero.getBoundingClientRect()
      const d = Math.min(window.devicePixelRatio || 1, 2)
      W = r.width
      H = r.height
      c.width = W * d
      c.height = H * d
      x.setTransform(d, 0, 0, d, 0, 0)
      const n = Math.max(18, Math.round((W * H) / 15000))
      pts = []
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: 1.4 + Math.random() * 1.6,
        })
      }
    }

    function frame() {
      if (tick++ % 60 === 0) rgb = getComputedStyle(root).getPropertyValue('--net-rgb').trim() || rgb
      x.clearRect(0, 0, W, H)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        if (!reduce) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > W) p.vx *= -1
          if (p.y < 0 || p.y > H) p.vy *= -1
        }
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dx = p.x - q.x, dy = p.y - q.y, dd = dx * dx + dy * dy
          if (dd < 17000) {
            x.strokeStyle = `rgba(${rgb},${0.34 * (1 - dd / 17000)})`
            x.lineWidth = 1
            x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke()
          }
        }
        const mdx = p.x - mx, mdy = p.y - my, md = mdx * mdx + mdy * mdy
        if (md < 26000) {
          x.strokeStyle = `rgba(255,107,61,${0.6 * (1 - md / 26000)})`
          x.lineWidth = 1.2
          x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(mx, my); x.stroke()
        }
        x.fillStyle = `rgba(${rgb},.7)`
        x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.283); x.fill()
      }
      if (run && !reduce) raf = requestAnimationFrame(frame)
    }

    const onMove = (e) => {
      const r = hero.getBoundingClientRect()
      mx = e.clientX - r.left
      my = e.clientY - r.top
      hero.style.setProperty('--mx', mx + 'px')
      hero.style.setProperty('--my', my + 'px')
    }
    const onLeave = () => { mx = my = -9999 }
    const onResize = () => { size(); if (reduce) frame() }

    size()
    frame()
    window.addEventListener('resize', onResize)
    hero.addEventListener('pointermove', onMove)
    hero.addEventListener('pointerleave', onLeave)
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!run) { run = true; if (!reduce) raf = requestAnimationFrame(frame) }
      } else run = false
    })
    io.observe(hero)

    return () => {
      run = false
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', onResize)
      hero.removeEventListener('pointermove', onMove)
      hero.removeEventListener('pointerleave', onLeave)
    }
  }, [heroRef, canvasRef])
}
