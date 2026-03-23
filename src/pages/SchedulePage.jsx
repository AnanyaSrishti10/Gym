import { useState } from 'react';
import { DAYS, SCHEDULE } from '../data/constants';

const STATUS_CLASS = { done:'s-done', upcoming:'s-upcoming', missed:'s-missed' };
const STATUS_LABEL = { done:'✓ Done', upcoming:'Upcoming', missed:'Missed' };

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(2);

  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Plan Ahead</div>
          <h2 className="section-title">WEEKLY <span>SCHEDULE</span></h2>
          <p className="section-sub">Stay consistent. Show up every day.</p>
        </div>

        {/* Day Selector */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:10,marginBottom:36}}>
          {DAYS.map((d,i) => (
            <div key={d} className={`day-card ${activeDay === i ? 'active' : ''}`} onClick={() => setActiveDay(i)}>
              <div style={{fontSize:10,color:'var(--muted)',letterSpacing:1,textTransform:'uppercase',marginBottom:6}}>{d}</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:28}}>{18+i}</div>
              {[0,2,3].includes(i) && <div style={{width:5,height:5,borderRadius:'50%',background:'var(--accent)',margin:'6px auto 0'}}/>}
            </div>
          ))}
        </div>

        {/* Schedule Items */}
        <div>
          {SCHEDULE.map((s,i) => (
            <div key={i} className="sched-item">
              <div style={{fontSize:26}}>{s.emoji}</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:20,color:'var(--accent)',minWidth:64}}>{s.time}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:15}}>{s.name}</div>
                <div style={{fontSize:12,color:'var(--muted)',marginTop:2}}>{s.meta}</div>
              </div>
              <span className={`sched-status ${STATUS_CLASS[s.status]}`} style={{padding:'5px 12px',borderRadius:18,fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:.8}}>
                {STATUS_LABEL[s.status]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
