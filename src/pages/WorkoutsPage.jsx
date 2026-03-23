import { useState } from 'react';
import { WORKOUTS, EXERCISES } from '../data/constants';

const CATS = ['All','Strength','Cardio','Core','Flexibility'];

export default function WorkoutsPage() {
  const [filter, setFilter] = useState('All');
  const [modal, setModal]   = useState(null);
  const [done, setDone]     = useState([]);

  const filtered = filter === 'All' ? WORKOUTS : WORKOUTS.filter(w => w.cat === filter);
  const toggleDone = i => setDone(d => d.includes(i) ? d.filter(x => x !== i) : [...d, i]);

  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Train Smart</div>
          <h2 className="section-title">WORKOUT <span>LIBRARY</span></h2>
          <p className="section-sub">Choose your session and get moving.</p>
        </div>

        {/* Filters */}
        <div style={{display:'flex',gap:8,marginBottom:28,flexWrap:'wrap'}}>
          {CATS.map(c => (
            <button key={c} className={`filter-btn ${filter === c ? 'active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:18}}>
          {filtered.map(w => (
            <div key={w.id} className="wcard" onClick={() => { setModal(w); setDone([]); }}>
              <div style={{height:150,display:'flex',alignItems:'center',justifyContent:'center',fontSize:60,position:'relative',background:`linear-gradient(135deg,${w.bg} 0%,var(--bg) 100%)`}}>
                <span>{w.emoji}</span>
                <span className={`wcard-badge ${w.diff.toLowerCase()}`}>{w.diff}</span>
              </div>
              <div style={{padding:18}}>
                <div className="wcard-title" style={{fontWeight:700,fontSize:15,marginBottom:6}}>{w.name}</div>
                <div className="wcard-meta" style={{fontSize:12,color:'var(--muted)',display:'flex',gap:14,marginBottom:14}}>
                  <span>⏱ {w.time}</span><span>🔥 {w.cal} kcal</span><span>📂 {w.cat}</span>
                </div>
                <div style={{height:3,background:'var(--border)',borderRadius:2,overflow:'hidden'}}>
                  <div style={{height:'100%',background:'var(--accent)',borderRadius:2,width:`${w.prog}%`}}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)}>✕</button>
            <div style={{fontSize:44,marginBottom:6}}>{modal.emoji}</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:46,marginBottom:4}}>{modal.name}</div>
            <div style={{color:'var(--muted)',marginBottom:28,fontSize:14}}>{modal.time} · {modal.cal} kcal · {modal.diff}</div>
            <div style={{marginBottom:28}}>
              {EXERCISES.map((e,i) => (
                <div key={i} className="ex-item">
                  <div>
                    <div style={{fontWeight:700,fontSize:14}}>{e.name}</div>
                    <div style={{fontSize:12,color:'var(--muted)',marginTop:2}}>{e.detail}</div>
                  </div>
                  <button className={`ex-check ${done.includes(i) ? 'done' : ''}`} onClick={() => toggleDone(i)}>
                    {done.includes(i) ? '✓' : ''}
                  </button>
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{width:'100%'}}>
              {done.length === EXERCISES.length ? '🎉 Workout Complete!' : `Start (${done.length}/${EXERCISES.length})`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
