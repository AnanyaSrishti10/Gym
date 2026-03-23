import { useState } from 'react';
import DumbbellSVG from '../components/DumbbellSVG';
import Scene3D from '../components/Scene3D';
import { TESTIMONIALS, PLANS, TEAM } from '../data/constants';

const FEATURES = [
  { icon:"🏋️", title:"WORKOUTS",    desc:"300+ curated programs from beginner to elite. Strength, HIIT, cardio, yoga and more.", page:"Workouts" },
  { icon:"🥗",  title:"NUTRITION",   desc:"Track macros, log meals, and get AI-powered plans tailored to your specific goals.",    page:"Nutrition" },
  { icon:"📊",  title:"PROGRESS",    desc:"Visualise your transformation with detailed charts, streaks, and personal records.",     page:"Progress" },
  { icon:"📅",  title:"SCHEDULE",    desc:"Plan your week, set smart reminders, and build the habits that produce results.",       page:"Schedule" },
  { icon:"🏆",  title:"CHALLENGES",  desc:"Compete on community leaderboards, earn badges, and hit milestone rewards.",            page:"Challenges" },
  { icon:"📏",  title:"BODY METRICS",desc:"Track BMI, body fat, water intake, and your measurement log over time.",                page:"Metrics" },
  { icon:"🧮",  title:"CALCULATOR",  desc:"BMI, TDEE, and macro split — all calculated in real-time from your stats.",            page:"Calculator" },
  { icon:"🎵",  title:"MUSIC",       desc:"Curated workout playlists across 6 moods to keep you in the zone.",                    page:"Music" },
  { icon:"🤖",  title:"AI COACH",    desc:"Chat with FORGE AI anytime — your 24/7 personal coach at the bottom of every page.",   page:"Home" },
];

const SHOWCASE = [
  { type:"strength", emoji:"🏋️", title:"STRENGTH", sub:"Power Lifting Programs", label:"Build Muscle →", lc:"var(--accent)"  },
  { type:"cardio",   emoji:"⚡",  title:"CARDIO",   sub:"HIIT & Endurance",       label:"Burn Fat →",    lc:"var(--accent2)" },
  { type:"wellness", emoji:"🧘",  title:"WELLNESS", sub:"Yoga & Recovery",        label:"Find Balance →",lc:"var(--accent3)" },
];

export default function HomePage({ setPage }) {
  const [form, setForm] = useState({ name:'', email:'', subject:'', msg:'' });
  const [sent, setSent] = useState(false);

  const sendForm = () => {
    if (form.name && form.email) {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name:'', email:'', subject:'', msg:'' });
    }
  };

  return (
    <div className="page fade-in">

      {/* ── HERO ── */}
      <div className="hero">
        <div className="blob b1"/><div className="blob b2"/><div className="blob b3"/>
        <div>
          <div className="hero-tag">🔥 #1 Fitness Platform 2025</div>
          <h1 className="hero-title">
            FORGE YOUR<br/><span>PERFECT</span><br/><span className="outline">BODY</span>
          </h1>
          <p className="hero-sub">
            Science-backed training, intelligent nutrition, and real-time analytics —
            all designed to make you unstoppable.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setPage('Workouts')}>Start Training Free</button>
            <button className="btn-outline" onClick={() => setPage('Calculator')}>Calculate My Macros</button>
          </div>
          <div className="hero-stats">
            {[['50K+','Athletes'],['300+','Workouts'],['4.9★','Rating']].map(([v,l]) => (
              <div key={l}><div className="h-sv">{v}</div><div className="h-sl">{l}</div></div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="orb-wrap">
            <div className="orb-ring r1"/><div className="orb-ring r2"/><div className="orb-ring r3"/>
            <div className="orb">
              <div className="orb-inner">
                <div className="orb-emoji">⚡</div>
                <div style={{margin:'0 auto 8px'}}><DumbbellSVG/></div>
                <div className="orb-text">TRAIN HARD</div>
              </div>
            </div>
          </div>
          <div className="fc fc1">
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <span style={{fontSize:20}}>🔥</span>
              <div><div className="fc-val">847</div><div className="fc-label">Kcal Burned</div></div>
            </div>
          </div>
          <div className="fc fc2">
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <span style={{fontSize:20}}>🏆</span>
              <div><div className="fc-val">12</div><div className="fc-label">Day Streak</div></div>
            </div>
          </div>
          <div className="fc fc3">
            <div><div className="fc-val" style={{fontSize:18}}>💪 PR!</div><div className="fc-label">Bench 102.5 kg</div></div>
          </div>
        </div>
      </div>

      {/* ── TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker">
          {['TRAIN HARDER','EAT SMARTER','TRACK EVERYTHING','BUILD YOUR LEGACY','FORGE YOUR BODY','NEVER SKIP A DAY',
            'TRAIN HARDER','EAT SMARTER','TRACK EVERYTHING','BUILD YOUR LEGACY','FORGE YOUR BODY','NEVER SKIP A DAY'].map((t,i) => (
            <span key={i} className="ticker-item">{t} ◆</span>
          ))}
        </div>
      </div>

      {/* ── SHOWCASE ── */}
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Explore Programs</div>
          <h2 className="section-title">CHOOSE YOUR <span>PATH</span></h2>
          <p className="section-sub">Three disciplines. One platform. Infinite potential.</p>
        </div>
        <div className="showcase-grid">
          {SHOWCASE.map((s,i) => (
            <div key={i} className="sc-card" onClick={() => setPage('Workouts')}>
              <div className="sc-inner">
                <Scene3D type={s.type}/>
                <div className="sc-content">
                  <span className="sc-emoji">{s.emoji}</span>
                  <div className="sc-title">{s.title}</div>
                  <div className="sc-sub">{s.sub}</div>
                </div>
                <div className="sc-label" style={{color:s.lc}}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"/>

      {/* ── FEATURES ── */}
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Everything You Need</div>
          <h2 className="section-title">YOUR FITNESS <span>HUB</span></h2>
          <p className="section-sub">Ten powerful modules built to work together seamlessly.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="feat-card" onClick={() => setPage(f.page)}>
              <div className="feat-icon-wrap">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
              <div className="feat-arrow">→</div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"/>

      {/* ── ABOUT ── */}
      <div className="section">
        <div className="about-layout">
          <div style={{position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className="about-3d">
              <div className="about-3d-content">
                <span style={{fontSize:90,display:'block',filter:'drop-shadow(0 0 28px rgba(232,255,71,.4))'}}>🏆</span>
                <div style={{fontFamily:'var(--font-display)',fontSize:20,color:'var(--accent)',letterSpacing:3,marginTop:10}}>CHAMPIONS</div>
                <div style={{marginTop:18}}>
                  <svg viewBox="0 0 160 80" style={{width:150,opacity:.75}}>
                    <defs>
                      <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e8ff47" stopOpacity="0"/>
                        <stop offset="50%" stopColor="#e8ff47"/>
                        <stop offset="100%" stopColor="#e8ff47" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <polyline points="10,60 30,40 50,50 70,20 90,35 110,15 130,30 150,10"
                      fill="none" stroke="url(#lg1)" strokeWidth="2.5" strokeLinecap="round"/>
                    {[10,30,50,70,90,110,130,150].map((x,i) => {
                      const y = [60,40,50,20,35,15,30,10][i];
                      return <circle key={i} cx={x} cy={y} r="3.5" fill="#e8ff47"/>;
                    })}
                  </svg>
                </div>
              </div>
            </div>
            <div className="about-ftag t1">✦ Est. 2021</div>
            <div className="about-ftag t2">⚡ 50K Athletes</div>
          </div>
          <div>
            <div className="section-tag" style={{marginBottom:14}}>Our Story</div>
            <h2 className="about-title">WE BUILT THIS<br/>FOR THE <span>OBSESSED</span></h2>
            <p style={{fontSize:15,color:'var(--muted)',lineHeight:1.8,marginBottom:16}}>
              FitForge was born in a garage gym in 2021. Two former athletes, one goal: a platform as serious as their training. No fluff, no gimmicks — just results.
            </p>
            <p style={{fontSize:15,color:'var(--muted)',lineHeight:1.8,marginBottom:28}}>
              Today, 50,000+ athletes across 80 countries use FitForge to track, plan, and crush their goals every single day.
            </p>
            <div style={{marginBottom:36}}>
              {['Science-backed programming by certified sports scientists','AI nutrition engine that adapts to your body in real time','Community of elite and everyday athletes who push each other','Privacy-first: your data is yours, always'].map(item => (
                <div key={item} className="about-li"><div className="a-check">✓</div><span>{item}</span></div>
              ))}
            </div>
            <button className="btn-primary" onClick={() => setPage('Workouts')}>Join the Movement</button>
          </div>
        </div>

        {/* TEAM */}
        <div style={{marginTop:80}}>
          <div className="section-header" style={{marginBottom:40}}>
            <div className="section-tag">The Crew</div>
            <h3 className="section-title" style={{fontSize:'clamp(34px,4vw,56px)'}}>THE MINDS <span>BEHIND IT</span></h3>
          </div>
          <div className="team-grid">
            {TEAM.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-av">{m.emoji}</div>
                <div style={{fontWeight:700,fontSize:14}}>{m.name}</div>
                <div style={{fontSize:11,color:'var(--muted)',marginTop:3}}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider"/>

      {/* ── STATS BAND ── */}
      <div className="stats-band-grid" style={{padding:'40px 32px',display:'grid',gridTemplateColumns:'repeat(4,1fr)',background:'var(--surface)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        {[['50,000+','Active Athletes'],['300+','Workout Plans'],['4.9/5','App Rating'],['80+','Countries']].map(([v,l]) => (
          <div key={l} style={{textAlign:'center',padding:'8px'}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(28px,4vw,58px)',color:'var(--accent)',lineHeight:1}}>{v}</div>
            <div style={{fontSize:11,color:'var(--muted)',marginTop:7,textTransform:'uppercase',letterSpacing:1.5}}>{l}</div>
          </div>
        ))}
      </div>

      {/* ── TESTIMONIALS ── */}
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Real Results</div>
          <h2 className="section-title">WHAT ATHLETES <span>SAY</span></h2>
        </div>
        <div className="test-grid">
          {TESTIMONIALS.map((t,i) => (
            <div key={i} className="test-card">
              <div style={{color:'var(--accent)',fontSize:13,letterSpacing:2,marginBottom:14}}>{'★'.repeat(t.stars)}</div>
              <p style={{fontSize:14,lineHeight:1.7,color:'var(--muted)',marginBottom:20,fontStyle:'italic'}}>"{t.text}"</p>
              <div style={{display:'flex',alignItems:'center',gap:12}}>
                <div style={{width:42,height:42,borderRadius:'50%',background:t.bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,border:'2px solid rgba(232,255,71,.15)'}}>{t.av}</div>
                <div><div style={{fontWeight:700,fontSize:13}}>{t.name}</div><div style={{fontSize:11,color:'var(--muted)',marginTop:1}}>{t.handle}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"/>

      {/* ── PRICING ── */}
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Simple Pricing</div>
          <h2 className="section-title">INVEST IN YOUR <span>GAINS</span></h2>
        </div>
        <div className="pricing-grid">
          {PLANS.map(p => (
            <div key={p.name} className={`price-card ${p.featured ? 'featured' : ''}`}>
              {p.featured && <div className="price-popular">Most Popular</div>}
              <div style={{fontFamily:'var(--font-display)',fontSize:28,marginBottom:4}}>{p.name}</div>
              <div style={{fontSize:12,color:'var(--muted)',marginBottom:24}}>{p.desc}</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:54,color:'var(--accent)',lineHeight:1}}>{p.price}</div>
              <div style={{fontSize:13,color:'var(--muted)',marginBottom:24}}>{p.period}</div>
              <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:28}}>
                {p.feats.map(f => (
                  <div key={f} style={{display:'flex',alignItems:'center',gap:9,fontSize:13,color:'var(--muted)'}}>
                    <span style={{color:'var(--accent)'}}>✦</span>{f}
                  </div>
                ))}
              </div>
              <button className={p.featured ? 'btn-primary' : 'btn-outline'} style={{width:'100%'}}>
                {p.price === 'Free' ? 'Get Started Free' : `Get ${p.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"/>

      {/* ── CONTACT ── */}
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">CONTACT <span>US</span></h2>
        </div>
        <div className="contact-layout">
          <div>
            <h3 className="contact-title">LET'S <span>TALK</span></h3>
            <p style={{fontSize:15,color:'var(--muted)',lineHeight:1.7,marginBottom:36}}>
              Whether you're a solo athlete, gym owner, or brand looking to partner — we're all ears.
            </p>
            <div style={{display:'flex',flexDirection:'column',gap:18}}>
              {[{icon:'📧',label:'Email',val:'hello@fitforge.io'},{icon:'📍',label:'Location',val:'San Francisco, CA'},{icon:'📞',label:'Phone',val:'+1 (415) 234-5678'},{icon:'💬',label:'Live Chat',val:'9am–9pm PST'}].map(c => (
                <div key={c.label} style={{display:'flex',alignItems:'center',gap:14}}>
                  <div style={{width:46,height:46,borderRadius:10,background:'var(--surface2)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0}}>{c.icon}</div>
                  <div>
                    <div style={{fontSize:11,color:'var(--muted)',textTransform:'uppercase',letterSpacing:1}}>{c.label}</div>
                    <div style={{fontSize:14,fontWeight:600,marginTop:1}}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-form">
            <div style={{fontFamily:'var(--font-display)',fontSize:30,marginBottom:24}}>SEND A MESSAGE</div>
            {sent && <div className="form-success">✓ Message sent! We'll respond within 24 hours.</div>}
            <div className="form-row" style={{marginBottom:14}}>
              <div className="fg"><label className="fl">Name</label><input className="fi" placeholder="Alex Morgan" value={form.name} onChange={e => setForm({...form,name:e.target.value})}/></div>
              <div className="fg"><label className="fl">Email</label><input className="fi" placeholder="alex@email.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})}/></div>
            </div>
            <div className="fg"><label className="fl">Subject</label><input className="fi" placeholder="How can we help?" value={form.subject} onChange={e => setForm({...form,subject:e.target.value})}/></div>
            <div className="fg"><label className="fl">Message</label><textarea className="fta" rows={4} placeholder="Tell us more…" value={form.msg} onChange={e => setForm({...form,msg:e.target.value})}/></div>
            <button className="btn-primary" style={{width:'100%'}} onClick={sendForm}>Send Message →</button>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">FITFORGE</div>
            <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.7,maxWidth:240}}>The ultimate fitness platform for athletes who are serious about results.</p>
            <div style={{display:'flex',gap:8,marginTop:18}}>
              {['𝕏','in','f','▶'].map(s => <div key={s} className="soc-btn">{s}</div>)}
            </div>
          </div>
          <div><div className="footer-col-title">PLATFORM</div>{['Workouts','Nutrition','Progress','Schedule','Challenges'].map(l => <span key={l} className="footer-link">{l}</span>)}</div>
          <div><div className="footer-col-title">COMPANY</div>{['About Us','Team','Blog','Careers','Press'].map(l => <span key={l} className="footer-link">{l}</span>)}</div>
          <div><div className="footer-col-title">SUPPORT</div>{['Help Center','Contact Us','Privacy Policy','Terms','Status'].map(l => <span key={l} className="footer-link">{l}</span>)}</div>
        </div>
        <div className="footer-bottom">
          <div style={{fontSize:12,color:'var(--muted)'}}>© 2025 FitForge Inc. All rights reserved.</div>
          <div style={{display:'flex',gap:18}}>{['Privacy','Terms','Cookies'].map(l => <span key={l} className="footer-link" style={{marginBottom:0}}>{l}</span>)}</div>
        </div>
      </footer>
    </div>
  );
}
