import { experience } from '../data.js'
import { useLang, tx } from '../i18n.jsx'
import Heading from './Heading.jsx'
import { Node } from './Timeline.jsx'

export default function Experience() {
  const { lang, t } = useLang()
  if (!experience.length) return null
  return (
    <section className="sec wrap" id="experience">
      <Heading title={t('expH')} sub={t('expSub')} />
      <div className="tl">
        {experience.map((e, i) => (
          <div className="tl-item rv" key={i}>
            <Node><path d="M4 7h16v12H4zM9 7V4h6v3M4 12h16" /></Node>
            <article className="gc">
              <h3>{tx(e.role, lang)}</h3>
              {e.org && <span className="sub">{tx(e.org, lang)}</span>}
              {(e.period || e.place) && <div className="pills">{e.period && <span>{tx(e.period, lang)}</span>}{e.place && <span>{tx(e.place, lang)}</span>}</div>}
              <ul>{e.bullets.map((b, j) => <li key={j}>{tx(b, lang)}</li>)}</ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
