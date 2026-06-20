export default function ListeningMap({ sectionId }) {
  if (sectionId === 'l2') return <MuseumFloorPlan />
  return null
}

function MuseumFloorPlan() {
  return (
    <div className="card bg-gray-50 dark:bg-gray-900/50 mb-4">
      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">🏛️ Museum Floor Plan</p>
      <svg viewBox="0 0 500 380" className="w-full max-w-lg mx-auto">
        <rect width="500" height="380" fill="#fefce8" rx="8" />

        {/* Main entrance */}
        <rect x="200" y="5" width="100" height="20" rx="3" fill="#64748b" />
        <text x="250" y="18" textAnchor="middle" className="text-[8px] fill-white font-bold">ENTRANCE</text>
        <polygon points="230,25 250,40 270,25" fill="#64748b" />

        {/* Corridor */}
        <rect x="220" y="40" width="60" height="15" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />
        <text x="250" y="52" textAnchor="middle" className="text-[6px] fill-gray-500">HALL</text>

        {/* Central Hall — large */}
        <rect x="70" y="60" width="360" height="250" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Room A — left wing */}
        <rect x="85" y="75" width="150" height="100" rx="4" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1" />
        <text x="160" y="130" textAnchor="middle" className="text-[9px] fill-red-600 font-bold">A</text>
        <text x="160" y="145" textAnchor="middle" className="text-[7px] fill-gray-500">Gallery A</text>

        {/* Room B — right wing */}
        <rect x="265" y="75" width="150" height="100" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
        <text x="340" y="130" textAnchor="middle" className="text-[9px] fill-blue-600 font-bold">B</text>
        <text x="340" y="145" textAnchor="middle" className="text-[7px] fill-gray-500">Gallery B</text>

        {/* Room C — center bottom */}
        <rect x="160" y="190" width="180" height="105" rx="4" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
        <text x="250" y="235" textAnchor="middle" className="text-[9px] fill-green-600 font-bold">C</text>
        <text x="250" y="250" textAnchor="middle" className="text-[7px] fill-gray-500">Special Exhibitions</text>

        {/* Room D — bottom left */}
        <rect x="85" y="190" width="60" height="105" rx="4" fill="#fef3c7" stroke="#fde68a" strokeWidth="1" />
        <text x="115" y="240" textAnchor="middle" className="text-[9px] fill-amber-600 font-bold">D</text>
        <text x="115" y="255" textAnchor="middle" className="text-[7px] fill-gray-500">Cafe</text>

        {/* Room E — bottom right */}
        <rect x="355" y="190" width="60" height="105" rx="4" fill="#f3e8ff" stroke="#d8b4fe" strokeWidth="1" />
        <text x="385" y="240" textAnchor="middle" className="text-[9px] fill-purple-600 font-bold">E</text>
        <text x="385" y="255" textAnchor="middle" className="text-[7px] fill-gray-500">Shop</text>

        {/* Doors */}
        {[
          [125, 175], [200, 175], [300, 175], [375, 175],
          [85, 75], [265, 75], [265, 295],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="8" height="3" rx="1" fill="#94a3b8" />
        ))}

        {/* You are here */}
        <circle cx="250" cy="55" r="6" fill="#dc2626" />
        <text x="250" y="57" textAnchor="middle" className="text-[6px] fill-white font-bold">●</text>
        <text x="270" y="58" className="text-[7px] fill-red-600 font-bold">You are here</text>

        {/* Ticketing */}
        <rect x="400" y="45" width="50" height="20" rx="3" fill="#475569" />
        <text x="425" y="57" textAnchor="middle" className="text-[6px] fill-white">Ticketing</text>

        {/* Welcome text */}
        <text x="250" y="340" textAnchor="middle" className="text-[8px] fill-gray-500 italic">
          Main Entrance → Hall → Galleries & Facilities
        </text>
      </svg>
    </div>
  )
}
