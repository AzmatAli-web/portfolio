import { useEffect, useRef, useState } from 'react';
import './App.css';

const projects = [
  { name: 'Campus Marketplace', category: 'Full-stack web', type: 'Web', code: 'web-project', description: 'A student marketplace built with the MERN stack.', visual: 'market', label: 'CAMPUS', sub: 'Good finds. Great connections.', tags: ['React', 'Node.js', 'MongoDB'] },
  { name: 'SMC Trainer', category: 'Interactive learning', type: 'Web', code: 'smctrainer', description: 'An interactive space to practice chart structure and trading concepts.', visual: 'chart', label: 'STRUCTURE LAB', sub: 'See the structure. Build your intuition.', tags: ['JavaScript', 'Charts', 'Learning'] },
  { name: 'Mobile App Collection', category: 'Flutter development', type: 'Mobile', code: 'mad-project', description: 'Mobile development work, interfaces, and application experiments.', visual: 'mobile', label: 'MADE FOR MOBILE.', sub: 'Small screens. Thoughtful experiences.', tags: ['Flutter', 'Dart', 'Mobile UI'] },
];
const services = [
  ['01', 'AI & machine learning', 'Python, data analysis, and intelligent application features. Exploring retrieval-augmented generation through my IqraVerse final-year project.', 'Python / ML / RAG'],
  ['02', 'Full-stack development', 'Responsive websites and web applications, from the first interface to APIs, databases, and deployment.', 'React / Node.js / MongoDB'],
  ['03', 'Flutter applications', 'Thoughtful mobile interfaces, API integration, Firebase, and bug fixing for cross-platform applications.', 'Flutter / Dart / Firebase'],
  ['04', 'Interfaces with personality', 'Clear layouts, purposeful animation, and responsive experiences that make a product feel good to use.', 'UI development / Motion / Responsive design'],
];

function Avatar({ happy }) {
  return <svg viewBox="0 0 500 560" className={`avatar ${happy ? 'is-happy' : ''}`} role="img" aria-label="Interactive illustrated developer with glasses">
    <defs>
      <linearGradient id="skin" x1="0" x2="1"><stop stopColor="#c58663"/><stop offset=".5" stopColor="#efba8e"/><stop offset="1" stopColor="#c88b68"/></linearGradient>
      <linearGradient id="jacket" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#45485c"/><stop offset="1" stopColor="#151723"/></linearGradient>
      <linearGradient id="hair" x1="0" x2="1" y2="1"><stop stopColor="#35333e"/><stop offset="1" stopColor="#101019"/></linearGradient>
      <radialGradient id="light"><stop stopColor="#d8a4ff" stopOpacity=".32"/><stop offset="1" stopColor="#bf6aff" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse cx="250" cy="300" rx="245" ry="245" fill="url(#light)"/>
    <g className="avatar-body"><path d="M67 560 Q72 431 172 415 L326 415 Q427 427 441 560" fill="url(#jacket)"/><path d="M198 408 L250 447 L303 408 L331 560 H169Z" fill="#a6afc3"/><path d="M210 363 H290 V418 Q251 454 210 418Z" fill="url(#skin)"/><path d="M175 415 L210 405 L246 448 L195 478 L174 449 L145 560 H88 Q97 445 175 415M325 415 L290 405 L254 448 L305 478 L326 449 L355 560 H416 Q403 445 325 415" fill="#303342" stroke="#626173" strokeWidth="2"/><path d="M250 449 V560" stroke="#e4e4e8" strokeWidth="4"/><text x="337" y="518" fill="#dfb3fd" fontSize="21" fontFamily="monospace">&lt;/&gt;</text></g>
    <g className="avatar-head"><ellipse cx="149" cy="277" rx="22" ry="35" fill="#c78b69"/><ellipse cx="351" cy="277" rx="22" ry="35" fill="#c78b69"/><path d="M150 212 Q150 135 250 134 Q350 138 350 217 L337 321 Q322 389 250 405 Q179 390 163 323Z" fill="url(#skin)"/><path d="M149 260 Q117 194 150 155 Q130 109 191 106 Q216 60 265 101 Q328 77 347 133 Q389 160 351 264 L333 208 Q296 215 266 174 Q215 206 169 200Z" fill="url(#hair)"/><path d="M166 164 Q208 123 258 135 M200 120 Q258 100 307 137" fill="none" stroke="#5b5260" strokeWidth="5" strokeLinecap="round" opacity=".6"/>
      <path d="M178 242 Q205 230 229 240 M271 240 Q298 230 322 242" fill="none" stroke="#3b2929" strokeWidth="9" strokeLinecap="round"/>
      <g className="eyes"><ellipse cx="206" cy="271" rx="21" ry="15" fill="#f6eadb"/><ellipse cx="294" cy="271" rx="21" ry="15" fill="#f6eadb"/><g className="pupils"><ellipse cx="207" cy="271" rx="9" ry="12" fill="#3c302e"/><ellipse cx="293" cy="271" rx="9" ry="12" fill="#3c302e"/><circle cx="210" cy="267" r="3" fill="white"/><circle cx="296" cy="267" r="3" fill="white"/></g></g>
      <g fill="#c2c6ff" fillOpacity=".08" stroke="#c7bbd0" strokeWidth="5"><rect x="165" y="249" width="73" height="47" rx="13"/><rect x="262" y="249" width="73" height="47" rx="13"/><path d="M239 261 Q250 254 261 261 M150 253 L165 258 M335 258 L350 253" fill="none"/></g>
      <path d="M250 272 L242 310 Q252 315 262 309" fill="none" stroke="#b67c5d" strokeWidth="4" strokeLinecap="round"/><path d="M176 319 Q182 375 250 391 Q320 374 326 319 L310 342 Q284 328 250 338 Q216 328 191 342Z" fill="#3b2e2e" opacity=".86"/><path className="smile" d="M223 349 Q250 370 278 349" fill="#fff2e3" stroke="#9d5b52" strokeWidth="3" strokeLinejoin="round"/><path d="M224 334 Q250 322 276 334" fill="none" stroke="#3b2e2e" strokeWidth="8" strokeLinecap="round"/>
    </g>
  </svg>;
}

function ProjectVisual({ project }) {
  return <div className={`project-visual ${project.visual}`} aria-hidden="true"><div className="mock-top"><span>● ● ●</span><span>{project.label.toLowerCase()}</span><span>↗</span></div>
    {project.visual === 'market' ? <><div className="market-copy"><small>THE STUDENT EXCHANGE</small><strong>Less searching.<br/>More finding.</strong><span>Discover something good ↗</span></div><div className="market-objects"><div className="book">DESIGN<br/><b>IS<br/>EVERY<br/>WHERE.</b></div><div className="headphones">◖<span>∩</span>◗</div><div className="plant">✳</div></div></> : project.visual === 'chart' ? <><div className="chart-copy"><small>LEARN. PRACTICE. REPEAT.</small><strong>Find your edge.</strong></div><svg className="chart-art" viewBox="0 0 600 210"><defs><pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse"><path d="M50 0H0V40" fill="none" stroke="#ffffff13"/></pattern></defs><rect width="600" height="210" fill="url(#grid)"/><path d="M0 180L40 160L65 172L95 125L120 145L155 105L185 125L218 65L250 95L280 53L310 75L340 40L370 64L400 22L430 48L470 15L510 40L550 10L600 25" fill="none" stroke="#b8ff74" strokeWidth="3"/><path d="M0 125H600" stroke="#c391ff" strokeDasharray="6 5"/><text x="460" y="115" fill="#c391ff" fontSize="13">BREAK OF STRUCTURE</text></svg></> : <><div className="mobile-copy"><small>FLUTTER / DART</small><strong>Every tap.<br/>Considered.</strong></div><div className="phone"><div className="phone-notch"/><small>YOUR DAILY SPACE</small><strong>Hello, there <span>✦</span></strong><div className="phone-card">Make room<br/>for good ideas.<b>↗</b></div><div className="phone-lines"><i/><i/><i/></div><div className="phone-nav">⌂  ⊞  ♡  ○</div></div></>}
  </div>;
}

export default function App() {
  const hero = useRef(null);
  const [happy, setHappy] = useState(false);
  const [filter, setFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  function move(event) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = hero.current.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - .5;
    const y = (event.clientY - box.top) / box.height - .5;
    hero.current.style.setProperty('--look-x', `${x * 10}px`);
    hero.current.style.setProperty('--look-y', `${y * 8}px`);
    hero.current.style.setProperty('--turn', `${x * 7}deg`);
  }
  function reset() { ['--look-x', '--look-y', '--turn'].forEach(key => hero.current.style.removeProperty(key)); }
  async function copyEmail() {
    try { await navigator.clipboard.writeText('azmatali082003@gmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 2500); }
    catch { setCopied(false); }
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#home" aria-label="Azmat Ali home">azmat<span>®</span></a><nav aria-label="Main navigation"><a href="#projects">Work <span>01</span></a><a href="#about">About <span>02</span></a><a href="#services">Expertise <span>03</span></a></nav><a className="header-contact" href="#contact">Let’s talk <span>↗</span></a></header>
    <main id="main">
      <section id="home" className="hero" ref={hero} onPointerMove={move} onPointerLeave={reset}>
        <div className="hero-topline"><span>DEVELOPER. THINKER. BUILDER.</span><span className="availability"><i/> Open to remote opportunities</span></div>
        <h1>HI, I’M <span>AZMAT.</span></h1>
        <div className="hero-stage"><div className="hero-intro"><span className="tiny-label">A LITTLE CODE.<br/>A LOT OF CURIOSITY.</span><p>I turn ideas into<br/>digital experiences<br/>with <em>personality.</em></p><a className="text-link" href="#projects">Explore my work <span>↘</span></a></div>
          <button className="character" onClick={() => setHappy(value => !value)} aria-label="Change the character’s expression" aria-pressed={happy}><Avatar happy={happy}/><span className="character-tip">{happy ? 'Good ideas make me smile.' : 'Move your cursor. Say hello.'}</span></button>
          <div className="hero-side"><span className="orbit-star">✳</span><span className="side-label">BASED IN PAKISTAN<br/>BUILDING FOR EVERYWHERE</span><a className="pill accent" href="mailto:azmatali082003@gmail.com">Have an idea? <span>↗</span></a></div>
        </div>
        <div className="hero-bottom"><span>AI / ML · FULL-STACK · FLUTTER</span><span>SCROLL TO DISCOVER ↓</span><span>PORTFOLIO — {new Date().getFullYear()}</span></div>
      </section>
      <div className="ticker" aria-hidden="true"><div>{Array.from({length: 4}, (_, i) => <span key={i}>THOUGHTFUL CODE <b>✳</b> PLAYFUL EXPERIENCES <b>✳</b> REAL POSSIBILITIES <b>✳</b> </span>)}</div></div>
      <section id="projects" className="work section-pad"><div className="section-heading reveal"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Built with<br/><em>intention.</em></h2></div><div className="work-heading-right"><p>A few things I’ve been<br/>turning from “what if” into real.</p><div className="filters" role="group" aria-label="Filter projects">{['All', 'Web', 'Mobile'].map(item => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}</div></div></div>
        <div className="projects-list">{projects.map((project, index) => <article key={project.name} className={`project-card ${filter !== 'All' && filter !== project.type ? 'filtered-out' : ''}`}><div className="project-heading"><span className="project-number">0{index + 1}</span><div><span className="eyebrow">{project.category}</span><h3>{project.name}</h3></div><a className="pill" href={`https://github.com/AzmatAli-web/${project.code}`} target="_blank" rel="noreferrer">View project <span>↗</span></a></div><ProjectVisual project={project}/><div className="project-footer"><p>{project.description}</p><div>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><a className="text-link all-work" href="https://github.com/AzmatAli-web" target="_blank" rel="noreferrer">More experiments on GitHub <span>↗</span></a>
      </section>
      <section id="services" className="services section-pad"><div className="section-heading reveal"><div><span className="eyebrow">02 / WHAT I DO</span><h2>Ideas, meet<br/><em>execution.</em></h2></div><p>From a first sketch to a final build.<br/>Here’s where I can help.</p></div><div className="service-list">{services.map(([number, title, description, stack]) => <article className="service-row reveal" key={number}><span className="service-number">{number}</span><div><h3>{title}</h3><p>{description}</p><span className="stack">{stack}</span></div><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></section>
      <section id="about" className="about section-pad"><div className="about-image reveal"><img src="/images/azmat.jpeg" alt="Azmat Ali" loading="lazy" width="504" height="539"/><span className="photo-note">THE HUMAN BEHIND THE CODE ↗</span></div><div className="about-copy reveal"><span className="eyebrow">03 / A BIT ABOUT ME</span><h2>Curiosity is<br/>my <em>default.</em></h2><p>I’m Azmat, a Software Engineering student at COMSATS University Islamabad, Abbottabad Campus. I enjoy making complex ideas feel simple, useful, and a little unexpected.</p><p>My main direction is AI and machine learning, alongside hands-on work in full-stack web development and Flutter. I’m currently exploring RAG-based learning with IqraVerse, my final-year project.</p><div className="about-facts"><div><span>EDUCATION</span><strong>BS Software Engineering</strong></div><div><span>LANGUAGES</span><strong>English · Urdu · Pashto</strong></div></div><a className="text-link" href="https://www.linkedin.com/in/azmat-ali-software-engineer/" target="_blank" rel="noreferrer">Let’s connect on LinkedIn <span>↗</span></a></div></section>
      <section id="contact" className="contact section-pad"><div className="contact-top"><span className="eyebrow">04 / YOUR NEXT IDEA STARTS HERE</span><span className="availability"><i/> Let’s build something</span></div><h2>LET’S MAKE<br/><a href="mailto:azmatali082003@gmail.com">IT HAPPEN.<span>↗</span></a></h2><div className="contact-bottom"><div><a className="email" href="mailto:azmatali082003@gmail.com">azmatali082003@gmail.com</a><button className="copy-button" onClick={copyEmail} aria-label="Copy email address">{copied ? 'Copied ✓' : 'Copy ↗'}</button><span className="sr-only" role="status">{copied ? 'Email copied to clipboard' : ''}</span></div><p>Remote internships, freelance projects,<br/>and interesting collaborations.</p></div></section>
    </main><footer><a className="wordmark" href="#home">azmat<span>®</span></a><span>© {new Date().getFullYear()} Azmat Ali</span><div><a href="https://github.com/AzmatAli-web" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/azmat-ali-software-engineer/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
