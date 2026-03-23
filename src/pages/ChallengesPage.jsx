import { useState } from 'react';

const CHALLENGES = [
  { icon:'🔥', title:'30-Day HIIT',      desc:'Complete at least one HIIT session every day for 30 days straight.', prog:60,  total:30,    done:18,    status:'active', reward:'🥇 Gold Badge + 500 pts' },
  { icon:'💧', title:'Hydration Hero',   desc:'Hit your daily 3L water goal for 14 consecutive days.',              prog:85,  total:14,    done:12,    status:'active', reward:'💧 Hydration Badge'      },
  { icon:'🏃', title:'50K Steps',        desc:'Log 50,000 total steps this week across all activities.',            prog:72,  total:50000, done:36000, status:'active', reward:'👟 Runner Badge'         },
  { icon:'🏋️', title:'Squat King',       desc:'Complete 1000 squats total within 30 days.',                        prog:40,  total:1000,  done:400,   status:'new',    reward:'👑 Squat Crown Badge'   },
  { icon:'🥗', title:'Clean Eating Week',desc:'Log meals within your macro targets for 7 consecutive days.',       prog:100, total:7,     done:7,     status:'done',   reward:'✅ Completed! 200 pts'  },
  { icon:'😴', title:'Sleep Champion',   desc:"Log 8+ hours of sleep for 10 nights in a row.",                    prog:30,  total:10,    done:3,     status:'new',    reward:'😴 Rest Master Badge'    },
];

const LEADERBOARD = [
  { rank:1, av:'🧑‍🦱', name:'Marcus J.',   score:4820 },
  { rank:2, av:'👩',    name:'Priya S.',    score:4350 },
  { rank:3, av:'🧔',    name:'Jake R.',     score:3980 },
  { rank:4, av:'👩‍🦰', name:'Zara M.',     score:3640 },
  { rank:5, av:'🧑‍🦳', name:'Coach Tyler', score:3200 },
];

const BADGES = [
  { icon:'🥇', name:'Gold Champion', desc:'Top 5% athlete'  },
  { icon:'🔥', name:'On Fire',        desc:'30-day streak'   },
  { icon:'💪', name:'Iron Will',      desc:'100 workouts'    },
  { icon:'🥗', name:'Clean Eater',    desc:'Perfect macros'  },
  { icon:'⚡', name:'Speed Demon',    desc:'HIIT master'     },
  { icon:'🏆', name:'Elite',          desc:'Premium member'  },
];

const RANK_MEDALS = { 1:'🥇', 2:'🥈', 3:'🥉' };
const STATUS_BADGE = { active:'cb-active', new:'cb-new', done:'cb-done' };
const STATUS_LABEL = { active:'active', new:'new', done:'done' };

export default function ChallengesPage() {
  const [joined, setJoined] = useState([]);

  const toggle = i => setJoined(j => j.includes(i) ? j.filter(x => x !== i) : [...j, i]);

  return (
    <div className="page fade-in">
      <div className="section">
        <div className="section-header">
          <div className="section-tag">Compete & Earn</div>
          <h2 className="section-title">CHALLENGES <span>& LEADERBOARD</span></h2>
          <p className="section-sub">Push your limits. Earn badges. Climb the ranks.</p>
        </div>

        {/* Challenge Cards */}
        <div className="challenge-grid">
          {CHALLENGES.map((c,i) => (
            <div key={i} className="challenge-card">
              <div className={STATUS_BADGE[c.status]} style={{position:'absolute',top:16,right:16,fontSize:11,fontWeight:800,padding:'3px 10px',borderRadius:16,textTransform:'uppercase',letterSpacing:.8,
                background: c.status==='active'?'rgba(76,175,80,.15)': c.status==='new'?'rgba(232,255,71,.12)':'rgba(71,184,255,.12)',
                color: c.status==='active'?'#4caf50': c.status==='new'?'var(--accent)':'var(--accent3)',
                border:`1px solid ${c.status==='active'?'rgba(76,175,80,.3)': c.status==='new'?'rgba(232,255,71,.25)':'rgba(71,184,255,.25)'}`}}>
                {STATUS_LABEL[c.status]}
              </div>
              <div style={{fontSize:44,marginBottom:14}}>{c.icon}</div>
              <div style={{fontFamily:'var(--font-display)',fontSize:26,marginBottom:6}}>{c.title}</div>
              <div style={{fontSize:13,color:'var(--muted)',lineHeight:1.55,marginBottom:4}}>{c.desc}</div>
              <div className="challenge-prog"><div className="challenge-fill" style={{width:`${c.prog}%`}}/></div>
              <div style={{fontSize:11,color:'var(--muted)',display:'flex',justifyContent:'space-between',marginBottom:4}}>
                <span>{c.status==='done' ? `${c.done}/${c.total} ✓` : `${c.done.toLocaleString()} / ${c.total.toLocaleString()}`}</span>
                <span>{c.prog}%</span>
              </div>
              <div style={{fontSize:11,color:'var(--accent)',marginTop:8,fontWeight:700}}>🎁 {c.reward}</div>
              {c.status !== 'done' && (
                <button className={joined.includes(i) ? 'btn-primary' : 'btn-outline'} style={{width:'100%',marginTop:14,padding:'10px',fontSize:13}} onClick={() => toggle(i)}>
                  {joined.includes(i) ? '✓ Joined!' : 'Join Challenge'}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Leaderboard + Badges */}
        <div className="lb-layout" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:28,marginTop:40}}>
          <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--r)',overflow:'hidden'}}>
            <div style={{padding:'20px 24px',borderBottom:'1px solid var(--border)',fontFamily:'var(--font-display)',fontSize:28}}>🏆 TOP ATHLETES</div>
            {LEADERBOARD.map(l => (
              <div key={l.rank} style={{display:'flex',alignItems:'center',gap:16,padding:'14px 24px',borderBottom:'1px solid var(--border)',transition:'background .2s'}}
                onMouseEnter={e => e.currentTarget.style.background='var(--surface2)'}
                onMouseLeave={e => e.currentTarget.style.background=''}>
                <div style={{fontFamily:'var(--font-display)',fontSize:22,width:32,color:l.rank<=3?['#f5c518','#c0c0c0','#cd7f32'][l.rank-1]:'var(--muted)'}}>
                  {RANK_MEDALS[l.rank] || l.rank}
                </div>
                <div style={{width:38,height:38,borderRadius:'50%',background:'var(--surface2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18}}>{l.av}</div>
                <div style={{flex:1,fontWeight:600,fontSize:14}}>{l.name}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:22,color:'var(--accent)'}}>{l.score.toLocaleString()}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{fontFamily:'var(--font-display)',fontSize:28,marginBottom:20}}>YOUR BADGES</div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
              {BADGES.map(b => (
                <div key={b.name} style={{background:'linear-gradient(135deg,rgba(232,255,71,.12),rgba(232,255,71,.04))',border:'1px solid rgba(232,255,71,.2)',borderRadius:'var(--r)',padding:18,textAlign:'center',transition:'all .2s',cursor:'default'}}
                  onMouseEnter={e => e.currentTarget.style.transform='scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform=''}>
                  <div style={{fontSize:40,marginBottom:8}}>{b.icon}</div>
                  <div style={{fontWeight:700,fontSize:13}}>{b.name}</div>
                  <div style={{fontSize:11,color:'var(--muted)',marginTop:3}}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
