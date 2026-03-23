import { useState, useEffect } from 'react';
import { TRACKS } from '../data/constants';

const MOODS = [
  { emoji:'⚡', name:'High Energy', desc:'HIIT & Power',       color:'var(--accent)'  },
  { emoji:'🧘', name:'Calm Focus',  desc:'Yoga & Stretch',     color:'var(--accent3)' },
  { emoji:'🏃', name:'Running',     desc:'Steady Cardio',      color:'#4caf50'        },
  { emoji:'🏋️', name:'Strength',   desc:'Heavy Lifting',      color:'var(--accent2)' },
  { emoji:'🌅', name:'Morning',     desc:'Wake-up Activation', color:'#ff9f43'        },
  { emoji:'🌙', name:'Evening',     desc:'Wind-down Workout',  color:'var(--accent4)' },
];

export default function MusicPage() {
  const [current,  setCurrent]  = useState(0);
  const [playing,  setPlaying]  = useState(false);
  const [progress, setProgress] = useState(32);
  const [vol,      setVol]      = useState(80);
  const [liked,    setLiked]    = useState([0, 2]);

  useEffect(() => {
    let t;
    if (playing) t = setInterval(() => setProgress(p => p >= 100 ? 0 : p + 0.5), 500);
    return () => clearInterval(t);
  }, [playing]);

  const track    = TRACKS[current];
  const totalSec = parseInt(track.duration.split(':')[0]) * 60 + parseInt(track.duration.split(':')[1]);
  const curSec   = Math.floor(totalSec * progress / 100);
  const fmt      = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2,'0')}`;

  const toggleLike = (i, e) => {
    e.stopPropagation();
    setLiked(l => l.includes(i) ? l.filter(x => x !== i) : [...l, i]);
  };

  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Stay In The Zone</div>
          <h2 className="section-title">WORKOUT <span>MUSIC</span></h2>
          <p className="section-sub">Curated tracks to fuel your grind.</p>
        </div>

        <div className="music-layout" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,alignItems:'start'}}>
          {/* Player */}
          <div className="card" style={{maxWidth:420,margin:'0 auto',width:'100%'}}>
            {/* Album Art */}
            <div style={{width:140,height:140,borderRadius:'50%',margin:'0 auto 20px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:60,background:'linear-gradient(135deg,#1a1a0a,#111)',border:'3px solid rgba(232,255,71,.2)',animation:playing?'spin 6s linear infinite':undefined}}>
              <span style={{filter:'drop-shadow(0 0 20px rgba(232,255,71,.4))'}}>{track.emoji}</span>
            </div>

            <div style={{fontFamily:'var(--font-display)',fontSize:32,textAlign:'center'}}>{track.title}</div>
            <div style={{fontSize:13,color:'var(--muted)',textAlign:'center',marginTop:4,marginBottom:20}}>{track.artist}</div>

            {/* Progress */}
            <div className="music-progress" onClick={e => { const r = e.currentTarget.getBoundingClientRect(); setProgress(Math.round((e.clientX - r.left) / r.width * 100)); }}>
              <div className="music-prog-fill" style={{width:`${progress}%`}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:'var(--muted)',marginBottom:20}}>
              <span>{fmt(curSec)}</span><span>{track.duration}</span>
            </div>

            {/* Controls */}
            <div className="music-controls">
              <button className="m-btn" onClick={() => setCurrent(c => (c - 1 + TRACKS.length) % TRACKS.length)}>⏮</button>
              <button className="m-play" onClick={() => setPlaying(p => !p)}>{playing ? '⏸' : '▶'}</button>
              <button className="m-btn" onClick={() => setCurrent(c => (c + 1) % TRACKS.length)}>⏭</button>
            </div>

            {/* Volume */}
            <div style={{display:'flex',alignItems:'center',gap:10,marginTop:16}}>
              <span style={{fontSize:16}}>🔊</span>
              <input type="range" className="vol-slider" min={0} max={100} value={vol} onChange={e => setVol(+e.target.value)}/>
              <span style={{fontSize:12,color:'var(--muted)',width:28}}>{vol}%</span>
            </div>

            {/* Playlist */}
            <div style={{marginTop:24,borderTop:'1px solid var(--border)',paddingTop:16}}>
              <div style={{fontFamily:'var(--font-display)',fontSize:20,marginBottom:12}}>PLAYLIST</div>
              {TRACKS.map((t,i) => (
                <div key={i} className={`playlist-item ${current === i ? 'active' : ''}`} onClick={() => { setCurrent(i); setPlaying(true); setProgress(0); }}>
                  <div style={{fontSize:12,color:'var(--muted)',width:20}}>{current === i && playing ? '▶' : i+1}</div>
                  <div style={{fontSize:18}}>{t.emoji}</div>
                  <div style={{flex:1,fontSize:13,fontWeight:500}}>
                    {t.title}
                    <div style={{fontSize:11,color:'var(--muted)'}}>{t.artist}</div>
                  </div>
                  <button style={{background:'none',border:'none',cursor:'pointer',fontSize:18,color:liked.includes(i)?'var(--accent2)':'var(--muted)'}} onClick={e => toggleLike(i, e)}>
                    {liked.includes(i) ? '♥' : '♡'}
                  </button>
                  <div style={{fontSize:11,color:'var(--muted)'}}>{t.duration}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Moods */}
          <div>
            <div style={{fontFamily:'var(--font-display)',fontSize:28,marginBottom:20}}>WORKOUT MOODS</div>
            <div className="music-moods" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
              {MOODS.map(m => (
                <div key={m.name} className="card" style={{cursor:'pointer',transition:'all .25s'}}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=m.color; e.currentTarget.style.transform='translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform=''; }}>
                  <div style={{fontSize:32,marginBottom:10}}>{m.emoji}</div>
                  <div style={{fontFamily:'var(--font-display)',fontSize:22,color:m.color}}>{m.name}</div>
                  <div style={{fontSize:12,color:'var(--muted)',marginTop:4}}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
