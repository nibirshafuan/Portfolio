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
  Mail,
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
    name: 'Kindora',
    category: 'Full-Stack Development',
    image: '/projects/kindora.png',
    description:
      'A community-driven social development platform that connects people with meaningful volunteer opportunities. Users can discover events, create activities, join events and manage their profiles.',
    stack: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB', 'Better Auth', 'JWT'],
    github: 'https://github.com/nibirshafuan/kindora-client',
    backend: 'https://github.com/nibirshafuan/kindora-server',
    live: 'https://kindora-client-five.vercel.app',
    featured: true,
  },
  {
    number: '02',
    name: 'BazarDor',
    category: 'Full-Stack Web Application',
    image: '/projects/bazardor.png',
    description:
      'A market price exploration platform where users can browse products, explore categories, check price movements and manage their accounts.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Better Auth'],
    github: 'https://github.com/nibirshafuan/Bazar-Dor',
    live: 'https://bazar-dor-psi-ashy.vercel.app/',
    featured: true,
  },
  {
    number: '03',
    name: 'FitLog',
    category: 'Fitness & API Integration',
    image: '/projects/fitlog.png',
    description:
      'A workout library and daily planning application. Users can explore exercises, view detailed instructions, create workout plans and save favourite workouts.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'LocalStorage'],
    github: 'https://github.com/nibirshafuan/workout-tracker',
    live: 'https://workout-tracker-henna-iota.vercel.app/',
    featured: false,
  },
  {
    number: '04',
    name: 'Dev Stack Builder',
    category: 'Frontend Development',
    image: '/projects/dev-stack-builder.png',
    description:
      'An interactive technology stack builder that helps developers explore technologies and create their own custom development stack.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'DaisyUI'],
    github: 'https://github.com/nibirshafuan/dev-stack-builder',
    live: 'https://dev-stack-builder-psi.vercel.app/',
    featured: false,
  },
]

function LinkedInIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.696 4.533-4.696 1.313 0 2.686.237 2.686.237v2.97h-1.514c-1.49 0-1.955.93-1.955 1.884v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.9 2.3 3.22 1.63.1-.72.4-1.2.72-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.49 0 .13 5.35.13 11.94c0 2.1.55 4.15 1.61 5.96L.04 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.47h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.51-8.4zM12.08 21.8a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.86 9.86 0 1 1 8.35 4.61zm5.41-7.39c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.09 4.49.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
    </svg>
  )
}
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
  <div className="project-preview">
    <img
      src={project.image}
      alt={`${project.name} project screenshot`}
      loading="lazy"
    />
    <span className="project-number">{project.number}</span>
  </div>

  <div className="project-main">
    <p className="project-category">{project.category}</p>
    <h3>{project.name}</h3>
    <p className="project-description">{project.description}</p>

    <div className="project-stack">
      {project.stack.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>

    <div className="project-actions">
      <a
        className="project-link project-link-primary"
        href={project.live}
        target="_blank"
        rel="noreferrer"
      >
        Live Demo <ArrowUpRight size={15} />
      </a>

      <a
        className="project-link"
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub <ArrowUpRight size={15} />
      </a>

      {project.backend && (
        <a
          className="project-link"
          href={project.backend}
          target="_blank"
          rel="noreferrer"
        >
          Backend Repo <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  </div>
</article>
              ))}
            </div>

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
    <p className="eyebrow">05 — GET IN TOUCH</p>
    <h2>
      Have an idea?
      <br />
      <span>Let's build something.</span>
    </h2>
    <p className="contact-description">
      I'm always interested in learning, collaborating and discussing
      meaningful projects. Feel free to reach out through any platform.
    </p>

    <div className="contact-social-grid">
      <a className="contact-social-card" href="mailto:nibirshafuan124@gmail.com" aria-label="Send an email">
        <Mail size={21} />
        <span>Email</span>
        <ArrowUpRight size={16} />
      </a>

      <a className="contact-social-card" href="https://github.com/nibirshafuan" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
        <GitHubIcon />
        <span>GitHub</span>
        <ArrowUpRight size={16} />
      </a>

      <a className="contact-social-card" href="https://www.linkedin.com/in/nibirshafuan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
        <LinkedInIcon />
        <span>LinkedIn</span>
        <ArrowUpRight size={16} />
      </a>

      <a className="contact-social-card" href="https://www.facebook.com/nibir.shafuan/" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile">
        <FacebookIcon />
        <span>Facebook</span>
        <ArrowUpRight size={16} />
      </a>

      <a className="contact-social-card" href="https://wa.me/8801521785391" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
        <span>WhatsApp</span>
        <ArrowUpRight size={16} />
      </a>
    </div>
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


