import { useContent, useLang } from '../i18n.jsx'
import Heading from './Heading.jsx'

export default function Skills() {
  const { t } = useLang()
  const { skills } = useContent()
  return (
    <section className="sec wrap" id="skills">
      <Heading title={t('skillsH')} sub={t('skillsSub')} />
      <div className="sk">
        {skills.map((g) => (
          <div className="sg gc rv" key={g.title}>
            <span className="mono">{g.title}</span>
            <div className="chips">{g.items.map((i) => <span key={i}>{i}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
