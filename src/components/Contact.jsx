import { profile } from '../data.js'
import { useLang } from '../i18n.jsx'

// On a computer without a mail app, mailto: does nothing, so open Gmail's compose window instead. Phones keep mailto:.
const phone = () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
const mailHref = (to) => (phone() ? `mailto:${to}` : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`)
const mailExt = () => (phone() ? {} : { target: '_blank', rel: 'noopener noreferrer' })

const short = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

const icons = {
  mail: <path d="M3 6h18v12H3zM3 7l9 7 9-7" />,
  linkedin: <><path d="M5 9v10M5 5.2v.1M10 19V9m0 4.5c0-2.5 1.6-4.5 4-4.5s3.5 1.6 3.5 4V19" /></>,
  github: <path d="M9 19c-4 1.2-4-2-6-2.5m12 4.5v-3.2c0-1 .1-1.5-.5-2.2 2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.600 11.600 0 0 0-6 0C6.800 3.800 5.800 4.100 5.800 4.100a4.300 4.300 0 0 0-.1 3.200A4.600 4.600 0 0 0 4.400 10.500c0 4.600 2.800 5.700 5.500 6-.6.600-.6 1.200-.5 2.200V21" />,
  cv: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
}

function Card({ icon, label, text, href, external }) {
  return (
    <a className="ccard" href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      <span className="cci" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[icon]}</svg>
      </span>
      <span className="cct"><small>{label}</small><b>{text}</b></span>
      <svg className="car" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
    </a>
  )
}

export default function Contact() {
  const { t } = useLang()
  return (
    <section className="sec wrap" id="contact">
      <div className="cbox gc">
        <div className="cleft">
          <span className="mono">{t('contactEyebrow')}</span>
          <h2>{t('contactH')}</h2>
          <p>{t('contactSub')}</p>
          <a className="btn p" href={mailHref(profile.email)} {...mailExt()}>
            {t('emailMe')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
        <div className="cright">
          <Card icon="mail" label="Email" text={profile.email} href={mailHref(profile.email)} external={!phone()} />
          <Card icon="linkedin" label="LinkedIn" text={short(profile.linkedin)} href={profile.linkedin} external />
          {profile.github && <Card icon="github" label="GitHub" text={short(profile.github)} href={profile.github} external />}
          {profile.cv && <Card icon="cv" label={t('cvLabel')} text={t('cv')} href={profile.cv} external />}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { t } = useLang()
  const soc = [['mail', 'Email', mailHref(profile.email)], ['linkedin', 'LinkedIn', profile.linkedin], ['github', 'GitHub', profile.github]].filter((x) => x[2])
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="soc">
          {soc.map(([k, l, h]) => (
            <a key={k} href={h} aria-label={l} {...(k === 'mail' ? mailExt() : { target: '_blank', rel: 'noopener noreferrer' })}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[k]}</svg>
            </a>
          ))}
        </div>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top">{t('top')}</a>
      </div>
    </footer>
  )
}
