import { useEffect, useRef } from 'react'
import useNetwork from '../hooks/useNetwork.js'
import { projects, profile } from '../data.js'
import { useLang } from '../i18n.jsx'

function Word({ text, lang, base }) {
  if (lang === 'ar') return text
  return [...text].map((c, i) => <i key={i} className="ch" style={{ '--i': base + i }}>{c === ' ' ? '\u00A0' : c}</i>)
}

export default function Hero() {
  const hero = useRef(null)
  const canvas = useRef(null)
  useNetwork(hero, canvas)
  const { t, lang } = useLang()
  useEffect(() => {
    const el = hero.current
    if (!el || document.documentElement.dataset.motion === 'off' || !window.matchMedia('(hover: hover)').matches) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
      el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
    }
    el.addEventListener('pointermove', move)
    return () => el.removeEventListener('pointermove', move)
  }, [])
  const rot = t('heroRot')

  return (
    <section className="hero" id="hero" ref={hero}>
      <canvas id="net" ref={canvas} aria-hidden="true" />
      <div className="blob b1" aria-hidden="true"></div>
      <div className="blob b2" aria-hidden="true"></div>
      <div className="wrap">
        <div className="hcopy">
          <span className="status mono"><b></b>{t('status')}</span>
          <h1 className="name"><span><Word text={t('eng')} lang={lang} base={0} /></span> <span><Word text={t('name')} lang={lang} base={4} /></span></h1>
          <p className="roleline">
            {t('heroRole')}
            <span className="rot" aria-label={rot.join(' ')}>
              <span aria-hidden="true">
                {[...rot, rot[0]].map((w, i) => <em key={i}>{w}</em>)}
              </span>
            </span>
          </p>
          <p className="lead">{t('heroLead')}</p>
          <div className="cta">
            <a className="btn p" href="#work">
              {t('viewWork')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
            </a>
            {profile.cv && (
              <a className="btn s" href={profile.cv} target="_blank" rel="noopener noreferrer">
                {t('cvBtn')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6" /></svg>
              </a>
            )}
            <a className="btn s" href="#contact">{t('contactBtn')}</a>
          </div>
        </div>
        <div className="hstage stage" style={{ position: 'relative' }}>
          <div className="chipf" style={{ insetInlineStart: '-3%', top: '6%', animationDelay: '-1s' }}><small>{t('chipProjects')}</small>{t('chipProjectsVal')(projects.length)}</div>
          <div className="chipf" style={{ insetInlineEnd: '2%', top: '-5%', animationDelay: '-3s' }}><small>{t('chipLang')}</small>{t('chipLangVal')}</div>
          <div className="chipf" style={{ insetInlineStart: '6%', bottom: '-6%', animationDelay: '-2s' }}><small>{t('chipThemes')}</small>{t('chipThemesVal')}</div>
          <figure className="hphoto">
            <img src="/images/doaa.jpg" alt="Doaa Salah" width="900" height="1125" fetchpriority="high" />
          </figure>
        </div>
      </div>
      <a className="scrollhint" href="#about" aria-label={t('scrollHint')}><span>{t('scrollHint')}</span><i></i></a>
    </section>
  )
}
