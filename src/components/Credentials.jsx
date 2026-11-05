import { useState } from 'react'
import { certificates, courses } from '../data.js'
import { useLang, tx } from '../i18n.jsx'
import Heading from './Heading.jsx'

export default function Credentials() {
  const { lang, t } = useLang()
  const [f, setF] = useState('all')
  const all = [
    ...certificates.map((c) => ({ ...c, kind: 'cert' })),
    ...courses.map((c) => ({ ...c, kind: 'course' })),
  ].sort((a, b) => (b.thumb ? 1 : 0) - (a.thumb ? 1 : 0))
  if (!all.length) return null
  const n = (k) => all.filter((c) => c.kind === k).length
  const tabs = [['all', t('fAll'), all.length], ['cert', t('fCert'), n('cert')], ['course', t('fCourse'), n('course')]].filter(([k, , c]) => k === 'all' || c > 0)
  const list = f === 'all' ? all : all.filter((c) => c.kind === f)
  return (
    <section className="sec wrap" id="credentials">
      <Heading title={t('credH')} sub={t('credSub')} />
      <div className="fil" role="tablist">
        {tabs.map(([k, label, c]) => (
          <button key={k} type="button" role="tab" aria-selected={f === k} className={f === k ? 'on' : ''} onClick={() => setF(k)}>{label} <b>{c}</b></button>
        ))}
      </div>
      <div className="cgrid">
        {list.map((c) => (
          <article className={'cred gc' + (c.thumb ? '' : ' plain')} key={c.kind + tx(c.name, 'en')}>
            {c.thumb && (
              <a className="cthumb" href={c.link} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
                <img src={c.thumb} alt="" loading="lazy" />
              </a>
            )}
            <div className="cbody">
              <b>{tx(c.name, lang)}</b>
              <small>{[tx(c.issuer || c.provider, lang), tx(c.year, lang)].filter(Boolean).join(' · ')}</small>
              {c.detail && <small className="cd">{tx(c.detail, lang)}</small>}
              {c.link && <a className="pbtn" href={c.link} target="_blank" rel="noopener noreferrer">{t('preview')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg></a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
