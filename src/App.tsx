import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Menu,
  X,
  Terminal,
  Database,
  Globe,
  Layers3,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import './App.css'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Globe,
    items: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    items: ['Node.js', 'Oracle SQL', 'PL/SQL', 'Database Design'],
  },
  {
    title: 'Tools & Workflow',
    icon: Terminal,
    items: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
]

const projects = [
  {
    number: '01',
    name: 'Dev Stack Builder',
    category: 'Frontend Development',
    description:
      'A developer-focused project built with React, TypeScript and Vite. A place to showcase practical frontend development and component-building skills.',
    stack: ['React', 'TypeScript', 'Vite'],
  },
  {
    number: '02',
    name: 'FitLog',
    category: 'Web Application',
    description:
      'A workout tracking application built with Next.js and TypeScript, focused on organizing fitness activities through a modern web interface.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '03',
    name: 'Library Management System',
    category: 'Database Application',
    description:
      'An academic project exploring library operations, data organization and database management using Java and SQL.',
    stack: ['Java', 'SQL', 'Database'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            nibir<span>.</span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            {navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="https://github.com/nibirshafuan"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="availability">
                <span className="availability-dot" />
                OPEN TO LEARNING & COLLABORATION
              </div>

              <p className="eyebrow">HELLO, I'M</p>
              <h1>
                Nibir
                <br />
                <span>Shafuan.</span>
              </h1>
              <h2 className="hero-role">
                Computer Science Student <span>&</span> Developer
              </h2>
              <p className="hero-description">
                I enjoy turning ideas into practical digital experiences.
                Currently exploring modern web technologies, software
                development and problem solving.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/nibirshafuan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} /> GitHub
                </a>
              </div>

              <a className="scroll-cue" href="#about">
                <ArrowDown size={15} /> SCROLL TO EXPLORE
              </a>
            </div>

            <div className="hero-visual">
              <div className="visual-topline">
                <span>PORTFOLIO / 2026</span>
                <span>01 â€” 06</span>
              </div>
              <div className="profile-frame">
                <div className="frame-grid" />
                <img className="profile-photo" src="/profile.png" alt="Nibir Shafuan - Developer" />
                <div className="profile-caption">
                  <span className="caption-line" />
                  <span>BUILDING WITH CURIOSITY</span>
                </div>
                <div className="floating-tag tag-code">
                  <Code2 size={16} /> <span>Clean code</span>
                </div>
                <div className="floating-tag tag-creative">
                  <Sparkles size={16} /> <span>Creative thinking</span>
                </div>
              </div>
              <div className="visual-bottomline">
                <span>BASED IN BANGLADESH</span>
                <span>AVAILABLE ONLINE <span className="tiny-dot" /></span>
              </div>
            </div>
          </div>
          <div className="hero-index">01 / INTRODUCTION</div>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">01 â€” ABOUT ME</p>
              <h2>
                Curious mind.
                <br />
                <span>Builder's mindset.</span>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-copy">
                <p className="lead">
                  Iâ€™m Nibir Shafuan, a Computer Science and Engineering student
                  at Daffodil International University.
                </p>
                <p>
                  Iâ€™m passionate about software development and enjoy learning
                  how technology can solve real-world problems. My interests
                  include frontend engineering, application development,
                  databases and exploring new tools.
                </p>
                <p>
                  I believe in learning by building, improving through practice
                  and writing code that is useful, understandable and
                  maintainable.
                </p>
                <a className="text-link" href="#contact">
                  Let's connect <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="about-facts">
                <div className="fact-card">
                  <span className="fact-number">01</span>
                  <Layers3 size={21} />
                  <h3>Learn by building</h3>
                  <p>Turning concepts into practical projects.</p>
                </div>
                <div className="fact-card">
                  <span className="fact-number">02</span>
                  <Code2 size={21} />
                  <h3>Think & solve</h3>
                  <p>Breaking problems down into clear steps.</p>
                </div>
                <div className="fact-card fact-card-wide">
                  <span className="fact-number">03</span>
                  <Sparkles size={21} />
                  <h3>Keep improving</h3>
                  <p>Staying curious and growing with every project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">02 â€” MY TOOLKIT</p>
                <h2>
                  Skills & <span>technologies.</span>
                </h2>
              </div>
              <p className="section-note">
                Technologies I have worked with and continue to explore.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((group, index) => {
                const Icon = group.icon
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-card-top">
                      <span className="skill-index">0{index + 1}</span>
                      <Icon size={22} />
                    </div>
                    <h3>{group.title}</h3>
                    <div className="skill-tags">
                      {group.items.map((item) => (
                        <span className="skill-tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">03 â€” SELECTED WORK</p>
                <h2>
                  Things I've <span>built.</span>
                </h2>
              </div>
              <p className="section-note">
                A selection of academic and personal development projects.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-main">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-stack">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-arrow" aria-hidden="true">
                    <ArrowUpRight size={22} />
                  </div>
                </article>
              ))}
            </div>
            <p className="projects-footnote">
              More project details and repository links will be added after
              verifying each project.
            </p>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">04 â€” EDUCATION</p>
              <h2>
                My learning <span>journey.</span>
              </h2>
            </div>

            <article className="education-card">
              <div className="education-icon">
                <GraduationCap size={26} />
              </div>
              <div className="education-content">
                <p className="project-category">UNDERGRADUATE</p>
                <h3>B.Sc. in Computer Science & Engineering</h3>
                <p className="education-institute">
                  Daffodil International University
                </p>
                <p className="education-meta">Expected graduation: January 2028</p>
              </div>
              <span className="education-status">IN PROGRESS</span>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">05 â€” GET IN TOUCH</p>
            <h2>
              Have an idea?
              <br />
              <span>Let's build something.</span>
            </h2>
            <p className="contact-description">
              I'm always interested in learning, collaborating and discussing
              meaningful projects.
            </p>
            <a
              className="button button-primary"
              href="https://github.com/nibirshafuan"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} /> Connect on GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            nibir<span>.</span>
          </a>
          <p>Designed & built with curiosity.</p>
          <a
            className="footer-github"
            href="https://github.com/nibirshafuan"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Code2 size={19} />
          </a>
          <span className="copyright">Â© 2026 Nibir Shafuan</span>
        </div>
      </footer>
    </>
  )
}

export default App


