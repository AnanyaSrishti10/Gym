import { useState } from 'react';

const BODY_LOG = [
  { date:'Mar 22', weight:'78.0 kg', fat:'16.2%', muscle:'42.1 kg' },
  { date:'Mar 15', weight:'78.8 kg', fat:'16.8%', muscle:'41.9 kg' },
  { date:'Mar 8',  weight:'79.5 kg', fat:'17.1%', muscle:'41.7 kg' },
  { date:'Mar 1',  weight:'80.2 kg', fat:'17.5%', muscle:'41.5 kg' },
];

export default function MetricsPage() {
  const [weight, setWeight] = useState(78);
  const [height, setHeight] = useState(182);
  const [water,  setWater]  = useState(5);

  const bmi      = (weight / ((height / 100) ** 2)).toFixed(1);
  const bmiPos   = Math.min(95, Math.max(5, ((bmi - 15) / 25) * 100));
  const bmiCat   = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
  const bmiColor = bmi < 18.5 ? 'var(--accent3)' : bmi < 25 ? '#4caf50' : bmi < 30 ? 'var(--accent)' : 'var(--accent2)';

  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Your Body</div>
          <h2 className="section-title">BODY <span>METRICS</span></h2>
          <p className="section-sub">Track your physical data and monitor progress over time.</p>
        </div>

        {/* Metric Cards */}
        <div className="metrics-grid">
          <div className="card" style={{textAlign:'center',transition:'all .2s',cursor:'default'}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.transform='translateY(-2px)';}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='';}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:48,color:'var(--accent)',lineHeight:1}}>{weight}</div>
            <div style={{fontSize:13,color:'var(--muted)',marginTop:2}}>kg</div>
            <div style={{fontSize:11,color:'var(--muted)',marginTop:6,textTransform:'uppercase',letterSpacing:1.2}}>Body Weight</div>
            <input type="range" min={40} max={150} value={weight} onChange={e => setWeight(+e.target.value)} style={{width:'100%',marginTop:12,accentColor:'var(--accent)'}}/>
          </div>
          <div className="card" style={{textAlign:'center',transition:'all .2s',cursor:'default'}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.transform='translateY(-2px)';}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='';}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:48,color:'var(--accent)',lineHeight:1}}>{height}</div>
            <div style={{fontSize:13,color:'var(--muted)',marginTop:2}}>cm</div>
            <div style={{fontSize:11,color:'var(--muted)',marginTop:6,textTransform:'uppercase',letterSpacing:1.2}}>Height</div>
            <input type="range" min={140} max={220} value={height} onChange={e => setHeight(+e.target.value)} style={{width:'100%',marginTop:12,accentColor:'var(--accent)'}}/>
          </div>
          <div className="card" style={{textAlign:'center',borderColor:bmiColor,transition:'all .2s'}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:48,color:bmiColor,lineHeight:1}}>{bmi}</div>
            <div style={{fontSize:13,color:'var(--muted)',marginTop:2}}>BMI</div>
            <div style={{fontSize:11,color:bmiColor,marginTop:6,textTransform:'uppercase',letterSpacing:1.2}}>{bmiCat}</div>
          </div>
        </div>

        {/* BMI Gauge */}
        <div className="card" style={{marginBottom:28}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:26,marginBottom:20}}>BMI GAUGE</div>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:'var(--muted)',marginBottom:6}}>
            {['Underweight','Normal','Overweight','Obese'].map(l => <span key={l}>{l}</span>)}
          </div>
          <div style={{position:'relative',height:18,borderRadius:9,overflow:'hidden',background:'linear-gradient(90deg,#47b8ff 0%,#4caf50 25%,#e8ff47 55%,#ff9f43 75%,#ff4757 100%)'}}>
            <div style={{position:'absolute',top:-4,left:`${bmiPos}%`,width:4,height:26,background:'#fff',borderRadius:2,transform:'translateX(-50%)',transition:'left .8s',boxShadow:'0 0 8px rgba(0,0,0,.5)'}}/>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:'var(--muted)',marginTop:4}}>
            <span>15</span><span>18.5</span><span>25</span><span>30</span><span>40</span>
          </div>
        </div>

        {/* Water Tracker */}
        <div className="card" style={{marginBottom:28}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:26,marginBottom:20}}>💧 DAILY HYDRATION</div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:24}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontFamily:'var(--font-display)',fontSize:48,color:'var(--accent3)'}}>{water}/8</div>
              <div style={{fontSize:13,color:'var(--muted)'}}>glasses today · {(water * 0.25).toFixed(2)}L / 2.0L goal</div>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:10,justifyContent:'center'}}>
              {Array.from({length:8},(_,i) => (
                <div key={i} onClick={() => setWater(i < water ? i : i+1)}
                  style={{fontSize:30,cursor:'pointer',transition:'transform .2s',filter:i<water?'none':'grayscale(1)',opacity:i<water?1:.4}}
                  onMouseEnter={e => e.currentTarget.style.transform='scale(1.2)'}
                  onMouseLeave={e => e.currentTarget.style.transform=''}>🥤</div>
              ))}
            </div>
            <div style={{display:'flex',gap:10}}>
              <button className="btn-outline" style={{padding:'8px 18px',fontSize:13}} onClick={() => setWater(Math.max(0,water-1))}>− Remove</button>
              <button className="btn-primary" style={{padding:'8px 18px',fontSize:13}} onClick={() => setWater(Math.min(8,water+1))}>+ Add Glass</button>
            </div>
          </div>
        </div>

        {/* Body Log */}
        <div className="card">
          <div style={{fontFamily:'var(--font-display)',fontSize:26,marginBottom:20}}>MEASUREMENT LOG</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:10,padding:'10px 16px',fontSize:11,color:'var(--muted)',textTransform:'uppercase',letterSpacing:1,borderBottom:'1px solid var(--border)'}}>
            <span>Date</span><span>Weight</span><span>Body Fat</span><span>Muscle</span>
          </div>
          {BODY_LOG.map((r,i) => (
            <div key={i} style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:10,padding:'14px 18px',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:10,marginTop:8}}>
              <span style={{fontSize:13,color:'var(--muted)'}}>{r.date}</span>
              <span style={{fontWeight:700}}>{r.weight}</span>
              <span style={{color:'var(--accent2)'}}>{r.fat}</span>
              <span style={{color:'var(--accent3)'}}>{r.muscle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
