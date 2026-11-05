import Stars from './components/Stars.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Credentials from './components/Credentials.jsx'
import Resume from './components/Resume.jsx'
import Reviews from './components/Reviews.jsx'
import Contact, { Footer } from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Stars />
      <div className="prog" aria-hidden="true"></div>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Credentials />
        <Resume />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
