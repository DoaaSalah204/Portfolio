import Slider from './Slider.jsx'
import Heading from './Heading.jsx'
import { useContent, useLang } from '../i18n.jsx'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
)

export default function Projects() {
  const { t } = useLang()
  const { projects } = useContent()
  return (
    <section className="sec wrap" id="work">
      <Heading title={t('workH')} sub={t('workSub')} />
      <div id="projects" className="plist">
        {projects.map((p) => (
          <article key={p.key} className="proj gc rv" style={{ '--pa': p.pa }}>
            <div className="ptext">
              <span className="ptype">{p.type}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <ul className="facts">{p.facts.map((f) => <li key={f}>{f}</li>)}</ul>
              <div className="tags">{p.tags}</div>
              {(p.video || p.repo) && (
                <div className="plinks">
                  {p.video && <a className="lnk main" href={p.video} target="_blank" rel="noopener noreferrer">{t('watch')} <Arrow /></a>}
                  {p.repo && <a className="lnk" href={p.repo} target="_blank" rel="noopener noreferrer">View the code <Arrow /></a>}
                </div>
              )}
            </div>
            {p.shots && <Slider shots={p.shots} title={p.shotsTitle || p.name} label={p.name} />}
          </article>
        ))}
      </div>
    </section>
  )
}
