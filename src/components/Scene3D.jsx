const CONFIGS = {
  strength: { color: "#e8ff47", glow: "rgba(232,255,71,.25)", bg: "linear-gradient(160deg,#1a1a08,#080806)" },
  cardio:   { color: "#ff4757", glow: "rgba(255,71,87,.25)",  bg: "linear-gradient(160deg,#180a0a,#060404)" },
  wellness: { color: "#47b8ff", glow: "rgba(71,184,255,.25)", bg: "linear-gradient(160deg,#080e18,#040608)" },
};

export default function Scene3D({ type }) {
  const c = CONFIGS[type];
  return (
    <div style={{ position: "absolute", inset: 0, background: c.bg }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 40%,${c.glow},transparent 62%)` }} />
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .09 }} viewBox="0 0 300 400">
        <polygon points="150,30 270,370 30,370" fill="none" stroke={c.color} strokeWidth="1.5" />
        <circle cx="150" cy="200" r="130" fill="none" stroke={c.color} strokeWidth=".8" />
        <circle cx="150" cy="200" r="90"  fill="none" stroke={c.color} strokeWidth=".8" />
        <circle cx="150" cy="200" r="50"  fill="none" stroke={c.color} strokeWidth=".8" />
        <line x1="20" y1="200" x2="280" y2="200" stroke={c.color} strokeWidth=".5" />
        <line x1="150" y1="30" x2="150" y2="370" stroke={c.color} strokeWidth=".5" />
      </svg>
    </div>
  );
}
