import { profile } from '../data.js'
import { useLang } from '../i18n.jsx'
import Heading from './Heading.jsx'

export default function Resume() {
  const { t } = useLang()
  if (!profile.cv) return null
  return (
    <section className="sec wrap" id="resume">
      <Heading title={t('resumeH')} sub={t('resumeSub')} />
      <div className="cv gc rv">
        <a className="cvimg" href={profile.cv} target="_blank" rel="noopener noreferrer" aria-label={t('openPdf')}>
          <img src="/cv-preview.jpg" alt="Doaa Salah CV" width="935" height="1210" loading="lazy" />
        </a>
        <div className="cvbtn">
          <a className="btn s" href={profile.cv} target="_blank" rel="noopener noreferrer">{t('openPdf')}</a>
          <a className="btn p" href={profile.cv} download>{t('cvBtn')}</a>
        </div>
      </div>
    </section>
  )
}
