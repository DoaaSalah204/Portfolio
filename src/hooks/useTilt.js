import { useEffect } from 'react'

// Tilts the laptop mockup toward the pointer. Skipped on touch devices and for reduced motion.
export default function useTilt(ref) {
  useEffect(() => {
    const st = ref.current
    if (!st) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover)').matches) return
    const lap = st.querySelector('.lap')
    if (!lap) return
    const move = (e) => {
      const r = st.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      lap.style.setProperty('--ry', x * 10 + 'deg')
      lap.style.setProperty('--rx', -y * 8 + 'deg')
    }
    const leave = () => {
      lap.style.removeProperty('--ry')
      lap.style.removeProperty('--rx')
    }
    st.addEventListener('pointermove', move)
    st.addEventListener('pointerleave', leave)
    return () => {
      st.removeEventListener('pointermove', move)
      st.removeEventListener('pointerleave', leave)
    }
  }, [ref])
}
