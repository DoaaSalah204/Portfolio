import { M } from '../mockups.js'

// Laptop + phone illustration. The markup is our own static HTML from mockups.js.
export default function Mock({ k }) {
  const m = M[k]
  if (!m) return null
  return (
    <>
      <div className="lap" role="img" aria-label={`${k} website preview`} dangerouslySetInnerHTML={{ __html: m.lap }} />
      <div className="pho" aria-hidden="true" dangerouslySetInnerHTML={{ __html: m.pho }} />
    </>
  )
}
