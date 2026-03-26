import { useTheme } from '../context/ThemeContext';

const LINKS = ["Home"];

export default function Nav({ page, setPage }) {
  const { dark, setDark } = useTheme();
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => setPage("Home")}>FITFORGE</div>
      <div className="nav-links">
        {.mapLINKS(l => (
          <button key={l} className={`nav-btn ${page === l ? "active" : ""}`} onClick={() => setPage(l)}>{l}</button>
        ))}
      </div>
      <div className="nav-right">
        <button className="theme-btn" onClick={() => setDark(d => !d)}>{dark ? "☀️" : "🌙"}</button>
        <button className="nav-cta" onClick={() => setPage("Workouts")}>Start</button>
      </div>
    </nav>
  );
}
