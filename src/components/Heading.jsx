// Centered section heading: the last word is purple, with a muted subtitle underneath.
export default function Heading({ title, sub }) {
  const words = title.replace(/\n/g, ' ').trim().split(' ')
  const last = words.pop()
  return (
    <div className="sh rv">
      <h2>{words.length > 0 && <>{words.join(' ')} </>}<span>{last}</span></h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}
