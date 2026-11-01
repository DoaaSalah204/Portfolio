import { marqueeWords } from '../data.js'

export default function Marquee() {
  const row = marqueeWords.map((w) => <span key={w}>{w}</span>)
  return (
    <div className="marq" aria-hidden="true">
      <div className="track">
        {row}
        {marqueeWords.map((w) => <span key={w + '2'}>{w}</span>)}
      </div>
    </div>
  )
}
