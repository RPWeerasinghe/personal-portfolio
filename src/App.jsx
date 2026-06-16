import { useState, useEffect } from 'react';
import {
  Sun, Moon, Mail, GitBranch,
  Code2, Layout, Database, GraduationCap, Briefcase,
  Palette, ArrowRight, Heart
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Poppins Font එක load කිරීම
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const glassStyle = {
    backgroundColor: darkMode ? 'rgba(20, 20, 20, 0.75)' : 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: darkMode ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 112, 243, 0.1)',
    borderRadius: '24px',
    boxShadow: darkMode ? '0 8px 32px 0 rgba(0, 0, 0, 0.3)' : '0 8px 32px 0 rgba(31, 38, 135, 0.04)',
    transition: 'all 0.5s ease',
  };

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: darkMode 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' 
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh',
      color: darkMode ? '#f8fafc' : '#0f172a',
      transition: 'all 0.5s ease',
    }}>
      
      {/* ─── Navigation Bar ─── */}
      <nav style={{
        position: 'fixed',
        top: 0, right: 0, left: 0, zIndex: 1000,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: scrolled ? '15px 40px' : '25px 40px',
        backgroundColor: scrolled ? (darkMode ? 'rgba(15, 15, 15, 0.85)' : 'rgba(255, 255, 255, 0.85)') : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? (darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.05)') : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '800', background: 'linear-gradient(45deg, #0070f3, #00dfd8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>RPW.</div>
        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item)} style={{ background: 'none', border: 'none', color: darkMode ? '#94a3b8' : '#475569', fontWeight: '500', cursor: 'pointer', textTransform: 'capitalize', fontFamily: "'Poppins', sans-serif" }}>
              {item}
            </button>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)', border: 'none', borderRadius: '50%', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: darkMode ? '#fff' : '#000' }}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Main Wrapper */}
      <div style={{ padding: '120px 20px 40px 20px', maxWidth: '850px', margin: '0 auto' }}>
        
        {/* ─── Hero Section ─── */}
        <section style={{ ...glassStyle, padding: '60px 40px', marginBottom: '35px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#10b981', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '25px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block' }} />
            Available for Opportunities
          </div>

          <h1 style={{ margin: '0 0 20px 0', fontSize: '3.8rem', fontWeight: '800', display: 'inline-block', background: 'linear-gradient(45deg, #0070f3, #00dfd8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1px', lineHeight: '1.2' }}>
            RP Weerasinghe
          </h1>

          <p style={{ maxWidth: '650px', margin: '0 auto 35px auto', color: darkMode ? '#cbd5e1' : '#475569', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Computer Science undergraduate passionate about crafting pixel-perfect, performant, and accessible web experiences. I transform complex problems into elegant, user-friendly solutions through modern frontend technologies.
          </p>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button onClick={() => scrollTo('projects')} style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '25px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 14px rgba(0, 112, 243, 0.25)', fontFamily: "'Poppins', sans-serif" }}>
              View My Work <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo('contact')} style={{ backgroundColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)', color: darkMode ? '#fff' : '#000', border: 'none', padding: '12px 28px', borderRadius: '25px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Poppins', sans-serif" }}>
              <Mail size={18} /> Contact Me
            </button>
          </div>
        </section>

        {/* ─── About Section ─── */}
        <section id="about" style={{ ...glassStyle, padding: '50px 35px', marginBottom: '35px' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <span style={{ color: '#0070f3', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>About Me</span>
            <h2 style={{ fontSize: '2rem', margin: '5px 0 0 0', fontWeight: '700' }}>The Story Behind the Code</h2>
          </div>

          <div style={{ textAlign: 'left', lineHeight: '1.7', color: darkMode ? '#cbd5e1' : '#475569' }}>
            <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
              I am a Computer Science undergraduate at <strong style={{ color: darkMode ? '#38bdf8' : '#0070f3' }}>NSBM Green University</strong>, currently pursuing my BSc (Hons) in Computer Science. My journey into technology began with a curiosity about how digital products shape our daily lives, which evolved into a deep passion for frontend engineering and full-stack experimentation.
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '30px' }}>
              I believe that <strong>great design is invisible</strong> — it should feel so natural that users never have to think about how to use an interface. This philosophy drives me to focus on writing clean, maintainable code and optimizing user experiences.
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-around', background: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,112,243,0.02)', padding: '20px', borderRadius: '16px', textAlign: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0070f3' }}>3+</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Years Coding</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#e91e63' }}>MERN</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Stack Focus</div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#10b981' }}>100%</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Commitment</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Skills Section ─── */}
        <section id="skills" style={{ ...glassStyle, padding: '50px 35px', marginBottom: '35px' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <span style={{ color: '#0070f3', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem' }}>Technical Arsenal</span>
            <h2 style={{ fontSize: '2rem', margin: '5px 0 0 0', fontWeight: '700' }}>Skills & Technologies</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', textAlign: 'left' }}>
            {[
              { title: 'Frontend Core', icon: <Layout size={16} />, color: '#0070f3', bg: 'rgba(0, 112, 243, 0.08)', tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Flexbox', 'CSS Grid'] },
              { title: 'Styling & Tools', icon: <Palette size={16} />, color: '#e91e63', bg: 'rgba(233, 30, 99, 0.08)', tags: ['Tailwind CSS', 'Bootstrap', 'Git & GitHub', 'VS Code', 'Vite'] },
              { title: 'Backend & Data', icon: <Database size={16} />, color: '#10b981', bg: 'rgba(16, 185, 129, 0.08)', tags: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase'] },
              { title: 'Languages', icon: <Code2 size={16} />, color: '#7928ca', bg: 'rgba(121, 40, 202, 0.08)', tags: ['Python', 'Java', 'C', 'REST APIs'] }
            ].map((cat, idx) => (
              <div key={idx} style={{ background: darkMode ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)', padding: '20px', borderRadius: '16px', border: darkMode ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontWeight: '700', color: cat.color, fontSize: '0.95rem' }}>
                  {cat.icon} {cat.title}
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {cat.tags.map(t => (
                    <span key={t} style={{ background: cat.bg, color: cat.color, padding: '3px 8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '500' }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Experience & Education ─── */}
        <section id="experience" style={{ ...glassStyle, padding: '50px 35px', marginBottom: '35px' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <span style={{ color: '#0070f3', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem' }}>Timeline</span>
            <h2 style={{ fontSize: '2rem', margin: '5px 0 0 0', fontWeight: '700' }}>Education & Experience</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', textAlign: 'left' }}>
            {[
              { date: '2021 — Present', title: 'BSc (Hons) in Computer Science', org: 'NSBM Green University, Sri Lanka', icon: <GraduationCap size={18} />, desc: 'Building a strong foundation in software engineering principles, data structures, algorithms, and full-stack web architectures.' },
              { date: '2023 — 2024', title: 'Full-Stack Project Lead', org: 'Academic Final Year Project', icon: <Briefcase size={18} />, desc: 'Led the lifecycle development of SPAREHUBLK, an AI-powered marketplace platform tailored for the automotive spare parts sector in Sri Lanka.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '15px', borderLeft: '2px solid #0070f3', paddingLeft: '20px', marginLeft: '5px' }}>
                <div style={{ color: '#0070f3', marginTop: '2px' }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#00dfd8' }}>{item.date}</div>
                  <h4 style={{ fontSize: '1.1rem', margin: '3px 0', fontWeight: '700' }}>{item.title}</h4>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '6px', fontWeight: '500' }}>{item.org}</div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: darkMode ? '#cbd5e1' : '#475569', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Projects Section ─── */}
        <section id="projects" style={{ ...glassStyle, padding: '50px 35px', marginBottom: '35px' }}>
          <div style={{ marginBottom: '30px', textAlign: 'center' }}>
            <span style={{ color: '#0070f3', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem' }}>Portfolio</span>
            <h2 style={{ fontSize: '2rem', margin: '5px 0 0 0', fontWeight: '700' }}>Featured Project</h2>
          </div>

          <div style={{ textAlign: 'left' }}>
            <div style={{ background: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,112,243,0.01)', borderRadius: '20px', border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0, 112, 243, 0.08)', overflow: 'hidden' }}>
              <div style={{ padding: '24px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3rem', fontWeight: '700', color: darkMode ? '#38bdf8' : '#0070f3' }}>🚀 SPAREHUBLK</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: darkMode ? '#cbd5e1' : '#475569', marginBottom: '15px' }}>
                  An intelligent marketplace platform built specifically for Sri Lanka's automotive spare parts industry. SPAREHUBLK leverages core full-stack mechanisms to optimize matching buyers with verification streams, featuring clean user dashboards and structural data tracking.
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {['React', 'Node.js', 'MongoDB', 'Express', 'REST API'].map(t => <span key={t} style={{ background: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,112,243,0.05)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '500', color: darkMode ? '#94a3b8' : '#0070f3' }}>{t}</span>)}
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href="https://github.com/RPWeerasinghe" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: darkMode ? '#fff' : '#0070f3', fontSize: '0.85rem', fontWeight: '600' }}><GitBranch size={14} /> GitHub Source</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Contact Section ─── */}
        <section id="contact" style={{ ...glassStyle, padding: '50px 35px', marginBottom: '35px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '12px' }}>Let's Connect</h2>
          <p style={{ maxWidth: '550px', margin: '0 auto 25px auto', color: darkMode ? '#cbd5e1' : '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
            I am open to full-time frontend developer roles, internship opportunities, and exciting tech collaborations. Feel free to reach out!
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/RPWeerasinghe" target="_blank" rel="noreferrer" style={{ backgroundColor: '#0070f3', color: '#fff', textDecoration: 'none', padding: '10px 24px', borderRadius: '25px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><GitBranch size={16} /> GitHub</a>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer style={{ textAlign: 'center', padding: '15px 0', fontSize: '0.85rem', opacity: 0.7 }}>
          <p style={{ margin: 0 }}>Designed & Built with <span style={{ color: '#ef4444', verticalAlign: 'middle' }}><Heart size={12} fill="#ef4444" /></span> by RP Weerasinghe</p>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem' }}>© {new Date().getFullYear()} All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;