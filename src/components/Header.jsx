import { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { reviews } from '../data.js'

function toggleTheme() {
  const root = document.documentElement
  const next = (root.getAttribute('data-theme') || 'dark') === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  try { localStorage.setItem('doaa-theme', next) } catch (e) { /* storage blocked */ }
}

const I = {
  home: <path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" />,
  about: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  work: <><path d="M4 7h16v12H4zM9 7V4h6v3M4 12h16" /></>,
  skills: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />,
  creds: <><circle cx="12" cy="9" r="6" /><path d="M8.5 14.2L7 22l5-3 5 3-1.5-7.8" /></>,
  resume: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
  reviews: <path d="M4 5h16v11H9l-5 4z" />,
  contact: <path d="M3 6h18v12H3zM3 7l9 7 9-7" />,
}

const Ico = ({ k }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{I[k]}</svg>
)

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [motion] = useState(() => document.documentElement.dataset.motion !== 'off')
  const [active, setActive] = useState('top')
  const toggleMotion = () => {
    const next = motion ? 'off' : 'on'
    try { localStorage.setItem('doaa-motion', next) } catch (e) { /* storage blocked */ }
    document.documentElement.setAttribute('data-motion', next)
    window.location.reload()
  }
  const items = [
    ['top', 'home', t('navHome')],
    ['about', 'about', t('navAbout')],
    ['work', 'work', t('navWork')],
    ['skills', 'skills', t('navSkills')],
    ['credentials', 'creds', t('navCerts')],
    ['resume', 'resume', t('navResume')],
    ...(reviews.length > 0 ? [['reviews', 'reviews', t('navReviews')]] : []),
    ['contact', 'contact', t('navContact')],
  ]
  useEffect(() => {
    const els = items.map(([id]) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews.length])
  return (
    <header>
      <div className="wrap bar">
        <a className="logo" href="#top"><i></i>{lang === 'ar' ? 'دعاء' : 'Doaa'}</a>
        <nav aria-label="Main">
          {items.map(([id, ic, label]) => (
            <a key={id} href={'#' + id} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined}>
              <Ico k={ic} /><span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="ctl">
          <button className="lng" type="button" lang={lang === 'ar' ? 'en' : 'ar'} onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} aria-label={t('langAria')}>{t('langBtn')}</button>
          <button className="tgl mtn" type="button" onClick={toggleMotion} aria-pressed={motion} aria-label={t('motionAria')} title={t('motionAria')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />{!motion && <path d="M3 3l18 18" />}</svg>
          </button>
          <button className="tgl" type="button" onClick={toggleTheme} aria-label={t('themeAria')}>
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
