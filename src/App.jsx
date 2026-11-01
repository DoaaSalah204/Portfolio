import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="prog" aria-hidden="true"></div>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <section className="sec wrap" id="work" style={{ paddingBottom: 56 }}>
          <div className="sh rv">
            <div>
              <span className="mono eyebrow">Selected work</span>
              <h2>Sites I've<br />built.</h2>
            </div>
            <span className="mono" style={{ color: 'var(--muted)' }}>React · Vite · Node.js</span>
          </div>
        </section>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
