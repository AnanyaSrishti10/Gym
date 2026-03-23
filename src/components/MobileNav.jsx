import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const PRIMARY = [
  { id:"Home",      icon:"🏠", label:"Home"  },
  { id:"Workouts",  icon:"🏋️", label:"Train" },
  { id:"Nutrition", icon:"🥗", label:"Eat"   },
  { id:"Progress",  icon:"📊", label:"Stats" },
  { id:"more",      icon:"☰",  label:"More"  },
];
const SECONDARY = [
  { id:"Schedule",   icon:"📅", label:"Schedule"   },
  { id:"Challenges", icon:"🏆", label:"Challenges" },
  { id:"Metrics",    icon:"📏", label:"Metrics"    },
  { id:"Calculator", icon:"🧮", label:"Calc"       },
  { id:"Music",      icon:"🎵", label:"Music"      },
];

export default function MobileNav({ page, setPage }) {
  const { dark, setDark } = useTheme();
  const [drawer, setDrawer] = useState(false);

  const handlePrimary = (id) => {
    if (id === "more") { setDrawer(d => !d); return; }
    setPage(id); setDrawer(false);
  };

  return (
    <>
      {drawer && <div className="mob-overlay" onClick={() => setDrawer(false)} />}
      {drawer && (
        <div className="mob-drawer">
          <div className="mob-drawer-handle" />
          <div style={{ fontFamily:"var(--font-display)", fontSize:22, marginBottom:14, color:"var(--muted)" }}>MORE PAGES</div>
          <div className="mob-drawer-grid">
            {SECONDARY.map(s => (
              <div key={s.id} className={`mob-drawer-item ${page === s.id ? "active" : ""}`} onClick={() => { setPage(s.id); setDrawer(false); }}>
                <span>{s.icon}</span><span>{s.label}</span>
              </div>
            ))}
            <div className="mob-drawer-item" onClick={() => setDark(d => !d)}>
              <span>{dark ? "☀️" : "🌙"}</span><span>{dark ? "Light" : "Dark"}</span>
            </div>
          </div>
        </div>
      )}
      <nav className="mobile-nav">
        <div className="mobile-nav-inner">
          {PRIMARY.map(p => (
            <button
              key={p.id}
              className={`mob-btn ${(p.id !== "more" && page === p.id) || (p.id === "more" && drawer) ? "active" : ""}`}
              onClick={() => handlePrimary(p.id)}
            >
              <span className="mob-icon">{p.icon}</span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
