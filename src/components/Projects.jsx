import { useRef } from 'react'
import useTilt from '../hooks/useTilt.js'
import Mock from './Mock.jsx'
import Slider from './Slider.jsx'
import { projects } from '../data.js'

function Stage({ k }) {
  const ref = useRef(null)
  useTilt(ref)
  return (
    <div className="pstage rv">
      <div className="stage" ref={ref}><Mock k={k} /></div>
    </div>
  )
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
)

export default function Projects() {
  return (
    <div id="projects">
      {projects.map((p) => (
        <section
          key={p.key} className={'proj' + (p.shots ? ' wide' : '')}
          style={{ '--pb': p.pb, '--pf': p.pf, '--pa': p.pa }}
        >
          <div className="wrap">
            <div className="ptext rv">
              <span className="ptype">{p.type}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <ul className="facts">{p.facts.map((f) => <li key={f}>{f}</li>)}</ul>
              <div className="tags">{p.tags}</div>
              {(p.video || p.repo) && (
                <div className="plinks">
                  {p.video && <a className="lnk main" href={p.video} target="_blank" rel="noopener noreferrer">Watch the demo <Arrow /></a>}
                  {p.repo && <a className="lnk" href={p.repo} target="_blank" rel="noopener noreferrer">View the code <Arrow /></a>}
                </div>
              )}
            </div>
            {p.shots
              ? <div className="rv"><Slider shots={p.shots} title={p.shotsTitle || p.name} label={p.name} /></div>
              : <Stage k={p.mock} />}
          </div>
        </section>
      ))}
    </div>
  )
}
