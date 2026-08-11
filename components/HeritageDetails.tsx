export function HeritageRail() {
  return (
    <div className="heritage-rail" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, index) => (
        <span key={index}><i /><b /></span>
      ))}
    </div>
  );
}

export function PattachitraDivider() {
  return (
    <div className="pattachitra-divider" aria-hidden="true">
      <span />
      {Array.from({ length: 11 }).map((_, index) => (
        <i key={index}><b /><em /></i>
      ))}
      <span />
    </div>
  );
}

export function PattachitraMotif({ className = "" }: { className?: string }) {
  return (
    <svg className={`pattachitra-motif ${className}`} viewBox="0 0 260 260" aria-hidden="true">
      <circle cx="130" cy="130" r="102" />
      <circle cx="130" cy="130" r="78" />
      {Array.from({ length: 12 }).map((_, index) => (
        <g key={index} transform={`rotate(${index * 30} 130 130)`}>
          <path d="M130 30c13 14 19 29 0 49-19-20-13-35 0-49Z" />
          <path d="M130 79v23" />
          <circle cx="130" cy="21" r="3" />
        </g>
      ))}
      <path d="M96 130c18-28 50-28 68 0-18 28-50 28-68 0Z" />
      <circle cx="130" cy="130" r="12" />
    </svg>
  );
}

export function Chakra({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={`chakra ${compact ? "chakra--compact" : ""}`} viewBox="0 0 240 240" aria-hidden="true">
      <circle cx="120" cy="120" r="103" />
      <circle cx="120" cy="120" r="79" />
      <circle cx="120" cy="120" r="31" />
      {Array.from({ length: 12 }).map((_, index) => (
        <g key={index} transform={`rotate(${index * 30} 120 120)`}>
          <path d="M120 41c9 10 13 20 0 34-13-14-9-24 0-34Z" />
          <line x1="120" y1="75" x2="120" y2="89" />
        </g>
      ))}
      <text x="120" y="116" textAnchor="middle">CG</text>
      <text className="chakra-small" x="120" y="137" textAnchor="middle">ODISHA · 2026</text>
    </svg>
  );
}
