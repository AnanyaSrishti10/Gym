export default function DumbbellSVG() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 190, filter: "drop-shadow(0 6px 20px rgba(232,255,71,.4))" }}>
      <defs>
        <linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8ff47" /><stop offset="100%" stopColor="#b8cc20" />
        </linearGradient>
        <linearGradient id="dg2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5ff8a" /><stop offset="100%" stopColor="#9fb015" />
        </linearGradient>
      </defs>
      <rect x="2"   y="22" width="36"  height="36" rx="6" fill="url(#dg1)" />
      <rect x="4"   y="28" width="12"  height="24" rx="3" fill="url(#dg2)" />
      <rect x="162" y="22" width="36"  height="36" rx="6" fill="url(#dg1)" />
      <rect x="164" y="28" width="12"  height="24" rx="3" fill="url(#dg2)" />
      <rect x="38"  y="34" width="124" height="12" rx="4" fill="#c8dc30" />
      <rect x="38"  y="34" width="124" height="5"  rx="4" fill="#e8ff47" />
    </svg>
  );
}
