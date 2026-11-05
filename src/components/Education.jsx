import { useLang } from '../i18n.jsx'
import Heading from './Heading.jsx'
import { Node } from './Timeline.jsx'

export default function Education() {
  const { t } = useLang()
  return (
    <section className="sec wrap" id="education">
      <Heading title={t('eduH')} sub={t('eduSub')} />
      <div className="tl">
        <div className="tl-item rv">
          <Node><path d="M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.500 6-3v-4.500" /></Node>
          <article className="gc">
            <h3>{t('eduDegree')}</h3>
            <span className="sub">{t('eduSchool')}</span>
            <div className="pills"><span>{t('eduYear')}</span><span>{t('eduPlace')}</span><span className="hi">{t('eduTop')}</span></div>
            <p>{t('eduText')}</p>
            <div className="chips">{t('eduTags').map((x) => <span key={x}>{x}</span>)}</div>
          </article>
        </div>
      </div>
    </section>
  )
}
