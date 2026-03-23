import { MEALS } from '../data/constants';

const MACROS_CONFIG = [
  { name:'CALORIES', key:'cals', target:2500, unit:'kcal', color:'var(--accent)'  },
  { name:'PROTEIN',  key:'p',    target:180,  unit:'g',    color:'var(--accent3)' },
  { name:'CARBS',    key:'c',    target:280,  unit:'g',    color:'#ff9f43'        },
  { name:'FAT',      key:'f',    target:80,   unit:'g',    color:'var(--accent2)' },
];

export default function NutritionPage() {
  const total = MEALS.reduce(
    (s,m) => ({ cals:s.cals+m.cals, p:s.p+m.p, c:s.c+m.c, f:s.f+m.f }),
    { cals:0, p:0, c:0, f:0 }
  );

  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Fuel Your Body</div>
          <h2 className="section-title">NUTRITION <span>TRACKER</span></h2>
          <p className="section-sub">Today's intake at a glance.</p>
        </div>

        <div className="nut-grid">
          {/* Macro Cards */}
          {MACROS_CONFIG.map(m => (
            <div key={m.name} className="card">
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:16}}>
                <div style={{fontFamily:'var(--font-display)',fontSize:26}}>{m.name}</div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:46,color:m.color,lineHeight:1}}>{total[m.key]}</div>
                  <div style={{fontSize:12,color:'var(--muted)',marginTop:2}}>/ {m.target} {m.unit}</div>
                </div>
              </div>
              <div className="macro-bar">
                <div className="macro-fill" style={{width:`${Math.min(100,(total[m.key]/m.target)*100)}%`,background:m.color}}/>
              </div>
            </div>
          ))}

          {/* Meal Log */}
          <div style={{gridColumn:'span 2'}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:32,marginBottom:18}}>MEAL LOG</div>
            {MEALS.map((m,i) => (
              <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 18px',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:10,marginBottom:8,cursor:'pointer',transition:'border-color .2s'}}
                onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div style={{width:42,height:42,borderRadius:10,background:'var(--surface2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>{m.icon}</div>
                  <div>
                    <div style={{fontWeight:600,fontSize:14}}>{m.name}</div>
                    <div style={{fontSize:11,color:'var(--muted)',marginTop:2}}>{m.time} · P:{m.p}g · C:{m.c}g · F:{m.f}g</div>
                  </div>
                </div>
                <div style={{fontFamily:'var(--font-display)',fontSize:24,color:'var(--accent)'}}>{m.cals}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
