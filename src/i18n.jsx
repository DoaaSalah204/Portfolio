import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ui } from './ui.js'
import { arProjects, arCaptions, arSkills, arMarquee } from './data.ar.js'
import { projects, skills, marqueeWords } from './data.js'

const Ctx = createContext({ lang: 'en', setLang: () => {}, t: (k) => k })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('doaa-lang') === 'ar' ? 'ar' : 'en' } catch (e) { return 'en' }
  })
  useEffect(() => {
    const r = document.documentElement
    r.lang = lang
    r.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = ui[lang].title
    try { localStorage.setItem('doaa-lang', lang) } catch (e) { /* storage blocked */ }
  }, [lang])
  const t = useCallback((k) => (ui[lang][k] !== undefined ? ui[lang][k] : ui.en[k]), [lang])
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)

// Content written as a plain string, or as { en, ar }.
export const tx = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.en) : v)

export function Br({ text }) {
  return text.split('\n').flatMap((l, i) => (i ? [<br key={'b' + i} />, l] : [l]))
}

export function useContent() {
  const { lang } = useLang()
  if (lang !== 'ar') return { projects, skills, marquee: marqueeWords }
  return {
    marquee: arMarquee,
    skills: arSkills,
    projects: projects.map((p) => {
      const a = arProjects[p.key] || {}
      const caps = arCaptions[p.key] || []
      return {
        ...p, type: a.type ?? p.type, desc: a.desc ?? p.desc, facts: a.facts ?? p.facts,
        shots: p.shots ? p.shots.map((s, i) => ({ ...s, caption: caps[i] ?? s.caption })) : p.shots,
      }
    }),
  }
}
