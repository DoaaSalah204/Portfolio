import { useContent } from '../i18n.jsx'

export default function Marquee() {
  const { marquee } = useContent()
  const back = [...marquee].reverse()
  return (
    <div className="marq" aria-hidden="true">
      <div className="track">
        {marquee.map((w) => <span key={w}>{w}</span>)}
        {marquee.map((w) => <span key={w + '2'}>{w}</span>)}
      </div>
      <div className="track back out">
        {back.map((w) => <span key={w}>{w}</span>)}
        {back.map((w) => <span key={w + '2'}>{w}</span>)}
      </div>
    </div>
  )
}
