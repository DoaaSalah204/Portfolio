export default function About() {
  return (
    <section className="sec wrap" id="about">
      <div className="abt">
        <div className="rv">
          <span className="mono eyebrow">About</span>
          <h2>From engineering<br />to interfaces.</h2>
          <figure className="pf">
            <img src="/images/doaa-about.jpg" alt="Doaa Salah holding yellow flowers" width="800" height="1000" loading="lazy" />
          </figure>
        </div>
        <div className="rv">
          <p className="big">I graduated in 2026 with a degree in Computer and Systems Engineering from Al-Azhar University, Cairo. My engineering background shaped my problem-solving skills and analytical thinking, which I now apply to web development.</p>
          <div className="abt-more">
            <p>I build responsive web experiences using React, transforming designs into functional, user-friendly interfaces. I also work on full-stack projects, integrating frontends with backend APIs to create complete web applications.</p>
            <p>Alongside development, I work as a Programming Instructor, teaching frontend fundamentals and helping students build their first web projects.</p>
            <p>I'm looking for opportunities to grow as a developer, contribute to real-world projects, and create digital experiences that combine thoughtful design with solid functionality.</p>
          </div>
          <div className="path" aria-hidden="true"><span className="n"></span><span className="l"></span><span className="n"></span></div>
          <div className="plab"><span>Computer engineering</span><span>Web development</span></div>
        </div>
      </div>
    </section>
  )
}
