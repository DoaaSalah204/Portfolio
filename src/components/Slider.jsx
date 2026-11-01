import { useEffect, useRef, useState } from 'react'

// Coverflow slider: the active screenshot is in front, the others sit behind it and rotate through.
export default function Slider({ shots, title, label }) {
  const n = shots.length
  const [cur, setCur] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hover, setHover] = useState(false)
  const [hidden, setHidden] = useState(false)
  const startX = useRef(null)
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const go = (i) => setCur(((i % n) + n) % n)

  useEffect(() => {
    if (paused || hover || hidden || reduce) return
    const id = setInterval(() => setCur((c) => (c + 1) % n), 3800)
    return () => clearInterval(id)
  }, [paused, hover, hidden, reduce, n])

  useEffect(() => {
    const onVis = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { go(cur - 1); e.preventDefault() }
    if (e.key === 'ArrowRight') { go(cur + 1); e.preventDefault() }
  }
  const onDown = (e) => { startX.current = e.clientX }
  const onUp = (e) => {
    if (startX.current !== null && Math.abs(e.clientX - startX.current) > 45) {
      go(cur + (e.clientX < startX.current ? 1 : -1))
    }
    startX.current = null
  }

  return (
    <div className="cf" onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <div
        className="cf-stage" tabIndex={0} role="group" aria-roledescription="carousel"
        aria-label={`${label} screenshots, use left and right arrow keys`}
        onKeyDown={onKey} onPointerDown={onDown} onPointerUp={onUp}
      >
        {shots.map((s, i) => {
          let d = (((i - cur) % n) + n) % n
          if (d > n / 2) d -= n
          const a = Math.abs(d)
          return (
            <figure
              key={s.src} className="cf-s" data-hide={a > 2 ? '1' : '0'} aria-hidden={a !== 0}
              style={{ '--o': d, '--ao': a, '--op': a === 0 ? 1 : a === 1 ? 0.9 : a === 2 ? 0.5 : 0 }}
              onClick={() => { if (i !== cur) go(i) }}
            >
              <div className="cf-win">
                <div className="cf-top"><i></i><i></i><i></i><span>{title}</span></div>
                <img src={s.src} alt={`${label} screenshot: ${s.caption}`} width="1200" height="518" loading={i < 3 ? 'eager' : 'lazy'} draggable="false" />
              </div>
            </figure>
          )
        })}
        <button className="cf-b prev" type="button" aria-label="Previous screenshot" onClick={() => go(cur - 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button className="cf-b next" type="button" aria-label="Next screenshot" onClick={() => go(cur + 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="cf-cap">
        <div>
          <b>{shots[cur].caption}</b>
          <div className="mono">{cur + 1} / {n}</div>
        </div>
        <div className="cf-ctl">
          <div className="cf-dots">
            {shots.map((s, i) => (
              <button key={s.src} type="button" aria-label={`Show screenshot ${i + 1}: ${s.caption}`} aria-current={i === cur ? 'true' : 'false'} onClick={() => go(i)} />
            ))}
          </div>
          {!reduce && (
            <button className="cf-pp" type="button" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
              {paused ? 'Play' : 'Pause'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
