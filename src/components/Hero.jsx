import { useRef } from 'react'
import useNetwork from '../hooks/useNetwork.js'
import { profile, projects } from '../data.js'

export default function Hero() {
  const hero = useRef(null)
  const canvas = useRef(null)
  useNetwork(hero, canvas)

  return (
    <section className="hero" id="hero" ref={hero}>
      <canvas id="net" ref={canvas} aria-hidden="true" />
      <div className="wrap">
        <div className="hcopy">
          <span className="status mono"><b></b>{profile.location} · Open to work</span>
          <h1>
            I build web interfaces for
            <span className="rot" aria-label="stores, learning platforms, booking sites and dashboards">
              <span aria-hidden="true">
                <em>stores.</em><em>learning platforms.</em><em>booking sites.</em><em>dashboards.</em><em>stores.</em>
              </span>
            </span>
          </h1>
          <p className="lead">I turn designs into working React websites, from customer pages to admin dashboards. I studied Computer and Systems Engineering.</p>
          <div className="cta">
            <a className="btn p" href="#work">
              View work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
            </a>
            <a className="btn s" href="#contact">Contact</a>
          </div>
        </div>
        <div className="hstage stage" style={{ position: 'relative' }}>
          <div className="chipf" style={{ left: '-3%', top: '6%', animationDelay: '-1s' }}><small>Projects</small>{projects.length} websites</div>
          <div className="chipf" style={{ right: '2%', top: '-5%', animationDelay: '-3s' }}><small>Languages</small>EN / AR (RTL)</div>
          <div className="chipf" style={{ left: '6%', bottom: '-6%', animationDelay: '-2s' }}><small>Themes</small>Light / Dark</div>
          <figure className="hphoto">
            <img src="/images/doaa.jpg" alt="Portrait of Doaa Salah" width="900" height="1125" fetchpriority="high" />
          </figure>
        </div>
      </div>
    </section>
  )
}
