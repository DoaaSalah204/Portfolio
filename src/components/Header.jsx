function toggleTheme() {
  const root = document.documentElement
  let cur = root.getAttribute('data-theme')
  if (!cur) cur = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const next = cur === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  try { localStorage.setItem('doaa-theme', next) } catch (e) { /* storage blocked */ }
}

export default function Header() {
  return (
    <header>
      <div className="wrap bar">
        <a className="logo" href="#top"><i></i>Doaa</a>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button className="tgl" type="button" onClick={toggleTheme} aria-label="Switch light and dark theme">
            <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
