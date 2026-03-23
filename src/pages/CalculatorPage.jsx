import { useState } from 'react';

const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, 'very active': 1.9,
};

export default function CalculatorPage() {
  const [tab,     setTab]     = useState('BMI');
  const [weight,  setWeight]  = useState(78);
  const [height,  setHeight]  = useState(182);
  const [age,     setAge]     = useState(25);
  const [gender,  setGender]  = useState('male');
  const [activity,setActivity]= useState('moderate');
  const [goal,    setGoal]    = useState('maintain');

  const bmi    = (weight / ((height / 100) ** 2)).toFixed(1);
  const bmiCat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
  const bmr    = gender === 'male'
    ? 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
    : 447.6  + (9.2  * weight) + (3.1 * height) - (4.3 * age);
  const tdee     = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);
  const goalCals = { lose: tdee - 500, maintain: tdee, gain: tdee + 300 }[goal];
  const protein  = Math.round(weight * 2);
  const fat      = Math.round(goalCals * 0.25 / 9);
  const carbs    = Math.round((goalCals - protein * 4 - fat * 9) / 4);

  const TABS = ['BMI', 'TDEE', 'Macros'];

  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Smart Tools</div>
          <h2 className="section-title">FITNESS <span>CALCULATOR</span></h2>
          <p className="section-sub">Calculate your BMI, daily calorie needs, and optimal macro split.</p>
        </div>

        {/* Tab Switcher */}
        <div style={{display:'flex',gap:8,marginBottom:32,justifyContent:'center'}}>
          {TABS.map(t => (
            <button key={t} className={`filter-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>

        {/* BMI TAB */}
        {tab === 'BMI' && (
          <div className="calc-grid">
            <div className="card">
              <div style={{fontFamily:'var(--font-display)',fontSize:24,marginBottom:20}}>YOUR MEASUREMENTS</div>
              <div className="fg"><label className="fl">Weight (kg)</label><input type="number" className="fi" value={weight} onChange={e => setWeight(+e.target.value)}/></div>
              <div className="fg"><label className="fl">Height (cm)</label><input type="number" className="fi" value={height} onChange={e => setHeight(+e.target.value)}/></div>
            </div>
            <div className="calc-result">
              <div style={{fontFamily:'var(--font-display)',fontSize:72,color:'var(--accent)',lineHeight:1}}>{bmi}</div>
              <div style={{fontSize:14,color:'var(--muted)',marginTop:8}}>{bmiCat}</div>
              <div style={{width:'100%',height:12,borderRadius:6,background:'linear-gradient(90deg,#47b8ff,#4caf50,#e8ff47,#ff9f43,#ff4757)',marginTop:20,position:'relative'}}>
                <div style={{position:'absolute',top:-5,left:`${Math.min(95,Math.max(2,(bmi-15)/25*100))}%`,width:6,height:22,background:'#fff',borderRadius:3,transform:'translateX(-50%)',boxShadow:'0 0 6px rgba(0,0,0,.5)'}}/>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',fontSize:10,color:'var(--muted)',marginTop:8}}>
                <span>Under</span><span>Normal</span><span>Over</span><span>Obese</span>
              </div>
            </div>
          </div>
        )}

        {/* TDEE TAB */}
        {tab === 'TDEE' && (
          <div className="calc-grid">
            <div className="card">
              <div style={{fontFamily:'var(--font-display)',fontSize:24,marginBottom:20}}>YOUR STATS</div>
              <div className="form-row" style={{marginBottom:14}}>
                <div className="fg"><label className="fl">Weight (kg)</label><input type="number" className="fi" value={weight} onChange={e => setWeight(+e.target.value)}/></div>
                <div className="fg"><label className="fl">Height (cm)</label><input type="number" className="fi" value={height} onChange={e => setHeight(+e.target.value)}/></div>
              </div>
              <div className="form-row" style={{marginBottom:14}}>
                <div className="fg"><label className="fl">Age</label><input type="number" className="fi" value={age} onChange={e => setAge(+e.target.value)}/></div>
                <div className="fg"><label className="fl">Gender</label>
                  <select className="fsel" value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="male">Male</option><option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="fg"><label className="fl">Activity Level</label>
                <select className="fsel" value={activity} onChange={e => setActivity(e.target.value)}>
                  {Object.keys(ACTIVITY_MULTIPLIERS).map(a => <option key={a} value={a}>{a.charAt(0).toUpperCase()+a.slice(1)}</option>)}
                </select>
              </div>
            </div>
            <div className="calc-result">
              <div style={{fontFamily:'var(--font-display)',fontSize:72,color:'var(--accent)',lineHeight:1}}>{tdee}</div>
              <div style={{fontSize:14,color:'var(--muted)',marginTop:8}}>Calories / Day (TDEE)</div>
              <div style={{fontSize:12,color:'var(--muted)',marginTop:4}}>BMR: {Math.round(bmr)} kcal</div>
              <div style={{marginTop:20,display:'flex',flexDirection:'column',gap:10}}>
                {[['Lose Fat',tdee-500,'var(--accent3)'],['Maintain',tdee,'var(--accent)'],['Build Muscle',tdee+300,'var(--accent2)']].map(([l,v,c]) => (
                  <div key={l} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 14px',background:'var(--surface2)',borderRadius:8}}>
                    <span style={{fontSize:13}}>{l}</span>
                    <span style={{fontFamily:'var(--font-display)',fontSize:22,color:c}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MACROS TAB */}
        {tab === 'Macros' && (
          <div className="calc-grid">
            <div className="card">
              <div style={{fontFamily:'var(--font-display)',fontSize:24,marginBottom:20}}>YOUR GOAL</div>
              <div className="form-row" style={{marginBottom:14}}>
                <div className="fg"><label className="fl">Weight (kg)</label><input type="number" className="fi" value={weight} onChange={e => setWeight(+e.target.value)}/></div>
                <div className="fg"><label className="fl">Height (cm)</label><input type="number" className="fi" value={height} onChange={e => setHeight(+e.target.value)}/></div>
              </div>
              <div className="form-row" style={{marginBottom:14}}>
                <div className="fg"><label className="fl">Age</label><input type="number" className="fi" value={age} onChange={e => setAge(+e.target.value)}/></div>
                <div className="fg"><label className="fl">Gender</label>
                  <select className="fsel" value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="male">Male</option><option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="fg"><label className="fl">Goal</label>
                <select className="fsel" value={goal} onChange={e => setGoal(e.target.value)}>
                  <option value="lose">Lose Fat</option>
                  <option value="maintain">Maintain</option>
                  <option value="gain">Build Muscle</option>
                </select>
              </div>
            </div>
            <div className="calc-result">
              <div style={{fontFamily:'var(--font-display)',fontSize:72,color:'var(--accent)',lineHeight:1}}>{goalCals}</div>
              <div style={{fontSize:14,color:'var(--muted)',marginTop:8}}>Target Calories / Day</div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,marginTop:20}}>
                {[['Protein',protein,'g',protein*4,'var(--accent3)'],['Carbs',carbs,'g',carbs*4,'#ff9f43'],['Fat',fat,'g',fat*9,'var(--accent2)']].map(([l,v,u,c,col]) => (
                  <div key={l} style={{background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:10,padding:14,textAlign:'center'}}>
                    <div style={{fontFamily:'var(--font-display)',fontSize:32,color:col}}>{v}</div>
                    <div style={{fontSize:11,color:'var(--muted)',marginTop:3,textTransform:'uppercase',letterSpacing:1}}>{l} ({u})</div>
                    <div style={{fontSize:11,color:'var(--muted)',marginTop:2}}>{c} kcal</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:14,padding:'12px 16px',background:'var(--surface2)',borderRadius:10,fontSize:13,color:'var(--muted)',lineHeight:1.6}}>
                Goal: <strong style={{color:'var(--text)'}}>{goal === 'lose' ? 'Lose fat' : goal === 'gain' ? 'Build muscle' : 'Maintain weight'}</strong>. Adjust as you progress!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
