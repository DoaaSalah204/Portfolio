import { skills } from '../data.js'

export default function Skills() {
  return (
    <section className="sec wrap" id="skills" style={{ paddingTop: 24 }}>
      <div className="sh rv"><div><span className="mono eyebrow">Skills</span><h2>What I work with.</h2></div></div>
      <div className="sk rv">
        {skills.map((g) => (
          <div className="sg" key={g.title}>
            <span className="mono">{g.title}</span>
            <div className="chips">{g.items.map((i) => <span key={i}>{i}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
