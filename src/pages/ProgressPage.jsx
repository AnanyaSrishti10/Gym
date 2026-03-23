import { WEEKLY, DAYS } from '../data/constants';

const STATS = [
  { icon:'⚡', val:'12',  label:'Day Streak',     change:'+3 this week'    },
  { icon:'🔥', val:'4.2K',label:'Kcal This Week', change:'+8% vs last week'},
  { icon:'💪', val:'18',  label:'Workouts Done',  change:'+2 this month'   },
  { icon:'⏱',  val:'14h', label:'Active Time',    change:'+1.5h this week' },
];

const RECORDS = [
  { ex:'Bench Press', val:'102.5 kg', date:'Mar 18' },
  { ex:'Squat',       val:'140 kg',   date:'Mar 12' },
  { ex:'Deadlift',    val:'175 kg',   date:'Mar 5'  },
  { ex:'Pull-ups',    val:'22 reps',  date:'Mar 20' },
  { ex:'5K Run',      val:'21:34',    date:'Mar 15' },
  { ex:'Plank',       val:'3:45 min', date:'Mar 22' },
];

export default function ProgressPage() {
  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Your Journey</div>
          <h2 className="section-title">PROGRESS <span>REPORT</span></h2>
          <p className="section-sub">You're crushing it. Keep going.</p>
        </div>

        {/* Stat Cards */}
        <div className="prog-overview">
          {STATS.map(s => (
            <div key={s.label} className="stat-card">
              <div style={{fontSize:26,marginBottom:12}}>{s.icon}</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:44,color:'var(--accent)',lineHeight:1}}>{s.val}</div>
              <div style={{fontSize:10,color:'var(--muted)',marginTop:5,textTransform:'uppercase',letterSpacing:1.5}}>{s.label}</div>
              <div style={{fontSize:11,color:'#4caf50',marginTop:5,fontWeight:700}}>{s.change}</div>
            </div>
          ))}
        </div>

        {/* Weekly Bar Chart */}
        <div className="chart-cont">
          <div style={{fontFamily:'var(--font-display)',fontSize:28,marginBottom:20}}>WEEKLY ACTIVITY</div>
          <div className="bar-chart">
            {WEEKLY.map((v,i) => (
              <div key={i} className="bar-wrap">
                <div className="bar" style={{height:`${v}%`}}/>
                <div style={{fontSize:10,color:'var(--muted)'}}>{DAYS[i]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Records */}
        <div className="chart-cont">
          <div style={{fontFamily:'var(--font-display)',fontSize:28,marginBottom:20}}>PERSONAL RECORDS</div>
          <div className="pr-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
            {RECORDS.map(r => (
              <div key={r.ex} style={{background:'var(--surface2)',borderRadius:10,padding:'16px 18px'}}>
                <div style={{fontSize:10,color:'var(--muted)',textTransform:'uppercase',letterSpacing:1,marginBottom:5}}>{r.ex}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:30,color:'var(--accent)'}}>{r.val}</div>
                <div style={{fontSize:10,color:'var(--muted)',marginTop:3}}>Set {r.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
