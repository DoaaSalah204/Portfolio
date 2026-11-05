import { reviews } from '../data.js'
import { useLang, tx } from '../i18n.jsx'
import Heading from './Heading.jsx'

export default function Reviews() {
  const { lang, t } = useLang()
  if (!reviews.length) return null
  return (
    <section className="sec wrap" id="reviews">
      <Heading title={t('reviewsH')} sub={t('reviewsSub')} />
      <div className="rgrid rv">
        {reviews.map((r, i) => (
          <figure className="rev gc" key={i}>
            <blockquote>{tx(r.quote, lang)}</blockquote>
            <figcaption><b>{tx(r.author, lang)}</b>{r.role && <small>{tx(r.role, lang)}</small>}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
