import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import Heading from './Heading.jsx'
import { projects } from '../data.js'

function Count({ to }) {
  const ref = useRef(null)
  const [v, setV] = useState(0)
  useEffect(() => {
    if (document.documentElement.dataset.motion === 'off') { setV(to); return }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / 1600)
        setV(Math.round(to * (1 - Math.pow(1 - k, 3))))
        if (k < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{v}</span>
}

export default function About() {
  const { t } = useLang()
  return (
    <section className="sec wrap" id="about">
      <Heading title={t('aboutH')} sub={t('aboutSub')} />
      <div className="abt">
        <div className="rv">
          <figure className="pf">
            <img src="/images/doaa-about.jpg" alt="Doaa Salah" width="800" height="1000" loading="lazy" />
          </figure>
        </div>
        <div className="rv">
          <p className="big">{t('aboutP1')}</p>
          <div className="abt-more">
            <p>{t('aboutP2')}</p>
            <p className="hl">{t('aboutP3')}</p>
            <p>{t('aboutP4')}</p>
            <p>{t('aboutP5')}</p>
          </div>
          <div className="path" aria-hidden="true"><span className="n"></span><span className="l"></span><span className="n"></span></div>
          <div className="plab"><span>{t('pathFrom')}</span><span>{t('pathTo')}</span></div>
        </div>
      </div>
      <div className="stats">
        <div><b><Count to={projects.length} /></b><span>{t('statProjects')}</span></div>
        <div><b><Count to={projects.reduce((n, p) => n + (p.shots ? p.shots.length : 0), 0)} /></b><span>{t('statScreens')}</span></div>
        <div><b><Count to={2} /></b><span>{t('statLangs')}</span></div>
      </div>
    </section>
  )
}
