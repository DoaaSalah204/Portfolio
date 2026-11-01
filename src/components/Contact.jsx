import { profile } from '../data.js'

const plain = { textDecoration: 'none' }
const short = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

function Row({ label, href, text, external }) {
  return (
    <div>
      <span className="mono">{label}</span>
      <a href={href} style={plain} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{text}</a>
    </div>
  )
}

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <span className="mono" style={{ color: '#9AA6BA', display: 'block', marginBottom: 18 }}>Contact</span>
        <h2>Open to web development roles.</h2>
        <div className="cl">
          <Row label="Email" href={`mailto:${profile.email}`} text={profile.email} />
          <Row label="LinkedIn" href={profile.linkedin} text={short(profile.linkedin)} external />
          {profile.github && <Row label="GitHub" href={profile.github} text={short(profile.github)} external />}
          {profile.cv && <Row label="CV" href={profile.cv} text="Download my CV" external />}
        </div>
        <div className="foot"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#top">Back to top ↑</a></div>
      </div>
    </section>
  )
}
