import Image from "next/image";
import { LuArrowDownRight, LuArrowUpRight, LuMoveUpRight } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { interests, profile, projects, repositories, repositoryProfile, technologies } from "@/data/portfolio";
import GithubRepositories from "@/components/GithubRepositories";

function ExternalLink({ href, children, className = "", ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>{children}<LuMoveUpRight aria-hidden="true" size={14} /></a>;
}

export default function PortfolioHome() {
  return (
    <main className="portfolio-shell">
      <header className="portfolio-nav">
        <a className="wordmark" href="#top" aria-label="Aquin Anil, home"><span>AQ</span><i>—</i> ANIL</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#github">GitHub</a><a href="#contact">Contact</a>
        </nav>
        <ExternalLink href={profile.links.github} className="nav-social">Open to connect</ExternalLink>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow"><span className="status-dot" /> STUDENT DEVELOPER <span className="eyebrow-divider">/</span> KERALA, INDIA</p>
          <h1>Aquin Anil.<br /><span>Curious by nature.</span></h1>
          <p className="hero-copy">{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">Explore projects <LuArrowDownRight size={16} /></a>
            <a className="button-quiet" href="#contact">Get in touch <LuArrowUpRight size={15} /></a>
          </div>
          <div className="hero-links">
            <ExternalLink href={profile.links.github}><FaGithub size={15} /> GitHub</ExternalLink>
            <ExternalLink href={profile.links.linkedin}><FaLinkedin size={15} /> LinkedIn</ExternalLink>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>PORTFOLIO / 2026</span><span>01 — 05</span></div>
        <div className="hero-orbit" aria-hidden="true"><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="orbit-core"><Image src={profile.avatar} alt="Aquin Anil" width={112} height={112} sizes="112px" className="orbit-avatar" priority /></div><span className="orbit-caption">DESIGN · CODE · CURIOSITY</span></div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-kicker"><span>01</span><span>ABOUT</span><i /></div>
        <div className="about-grid">
          <h2>A practical developer<br />with a <em>curious mind.</em></h2>
          <div className="about-copy"><p>{profile.about}</p><p>I enjoy building useful things, learning how systems fit together, and approaching each new tool with curiosity. Right now, I’m continuing to grow across software development, AI, and cybersecurity—one project at a time.</p><div className="interest-list"><span className="mini-label">AREAS OF INTEREST</span>{interests.map((item, i) => <span className="interest-item" key={item}><b>0{i + 1}</b>{item}</span>)}</div></div>
        </div>
      </section>

      <section className="projects section-wrap" id="projects">
        <div className="section-kicker"><span>02</span><span>SELECTED PROJECTS</span><i /></div>
        <div className="section-heading"><h2>Made along<br />the <em>way.</em></h2><p>Selected builds, ideas, and infrastructure work—shared with their public project details, without claims beyond what can be verified.</p></div>
        <div className="project-list">{projects.map((project, i) => <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.name}>
          <div className="project-number">0{i + 1}</div><div className="project-main"><div className="project-topline"><span>{project.category}</span>{project.featured && <span className="featured-label">FEATURED</span>}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.repo && <ExternalLink href={project.repo} className="repo-link"><FaGithub size={14}/> Repository</ExternalLink>}</div>{project.href && <ExternalLink href={project.href} className="project-arrow" aria-label={`Visit ${project.name}`}><LuMoveUpRight size={18}/></ExternalLink>}
        </article>)}</div>
      </section>

      <section className="github-band" id="github"><div className="github-mark"><FaGithub size={24}/></div><div><p className="mini-label">OPEN SOURCE / GITHUB</p><h2>Learning in public.</h2><p>{repositoryProfile.count} public repositories, with names and source links verified against GitHub. Browse the complete list below.</p></div><ExternalLink href={repositoryProfile.url} className="github-cta">View GitHub profile <LuMoveUpRight size={15}/></ExternalLink></section>
      <GithubRepositories repositories={repositories} />

      <section className="skills section-wrap"><div className="section-kicker"><span>04</span><span>TOOLS & TOPICS</span><i /></div><div className="skills-grid"><h2>Things I’m<br /><em>exploring.</em></h2><div className="skill-groups">{technologies.map(group => <div className="skill-group" key={group.category}><span>{group.category}</span><div>{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

      <section className="contact section-wrap" id="contact"><div className="section-kicker"><span>05</span><span>CONTACT</span><i /></div><div className="contact-content"><p className="mini-label">HAVE AN IDEA? LET’S TALK.</p><h2>Build something<br /><em>meaningful.</em></h2><p>Interested in technology, software, or making something useful? I’d be glad to hear from you.</p><a className="email-link" href={`mailto:${profile.email}`}><FaEnvelope size={17}/>{profile.email}<LuMoveUpRight size={15}/></a><div className="contact-socials"><ExternalLink href={profile.links.linkedin}><FaLinkedin size={15}/> LinkedIn</ExternalLink><ExternalLink href={profile.links.github}><FaGithub size={15}/> GitHub</ExternalLink></div></div></section>

      <footer className="portfolio-footer"><a className="wordmark" href="#top"><span>AQ</span><i>—</i> ANIL</a><span>Built with curiosity · {profile.location}</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
