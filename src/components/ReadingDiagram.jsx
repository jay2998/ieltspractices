export default function ReadingDiagram({ passageId, question }) {
  if (!passageId || !question) return null
  if (passageId === 'r4') {
    if (question.question.includes('side-scan')) return <SideScanSonar />
    if (question.question.includes('ROV')) return <ROVSystem />
  }
  return null
}

function SideScanSonar() {
  return (
    <div className="card bg-gray-50 dark:bg-gray-900/50 mb-4">
      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">🔬 Side-Scan Sonar Operation</p>
      <svg viewBox="0 0 500 280" className="w-full max-w-lg mx-auto">
        <rect width="500" height="280" fill="#f0f9ff" rx="8" />
        {/* Water surface */}
        <line x1="0" y1="40" x2="500" y2="40" stroke="#60a5fa" strokeWidth="2" strokeDasharray="6,4" />
        <text x="250" y="30" textAnchor="middle" className="text-[10px] fill-blue-600 font-medium">Sea Surface</text>
        {/* Boat */}
        <rect x="180" y="10" width="60" height="30" rx="4" fill="#64748b" />
        <polygon points="190,10 230,10 220,0 200,0" fill="#475569" />
        <text x="210" y="30" textAnchor="middle" className="text-[7px] fill-white">Tow Vessel</text>
        {/* Cable */}
        <line x1="210" y1="40" x2="210" y2="100" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Tow fish */}
        <rect x="185" y="100" width="50" height="20" rx="5" fill="#f59e0b" />
        <text x="210" y="114" textAnchor="middle" className="text-[6px] fill-white font-bold">TOW-FISH</text>
        {/* Sonar beams */}
        <path d="M190,120 L30,200" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,3" />
        <path d="M230,120 L370,200" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,3" />
        <path d="M190,120 L50,240" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
        <path d="M230,120 L450,240" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
        <text x="90" y="190" className="text-[7px] fill-red-600 italic">Sonar beam 1</text>
        <text x="310" y="190" className="text-[7px] fill-red-600 italic">Sonar beam 2</text>
        {/* Sea floor */}
        <path d="M0,230 Q50,210 100,220 Q150,240 200,225 Q250,200 300,230 Q350,250 400,220 Q450,200 500,230"
          fill="none" stroke="#8b5cf6" strokeWidth="3" />
        <text x="250" y="265" textAnchor="middle" className="text-[9px] fill-purple-600 font-medium">Sea Floor</text>
        {/* Shadow/object */}
        <rect x="180" y="225" width="20" height="8" rx="2" fill="#f97316" opacity="0.7" />
        <text x="190" y="222" textAnchor="middle" className="text-[6px] fill-orange-600 font-bold">Object</text>
        {/* Labels */}
        <text x="30" y="140" className="text-[8px] fill-gray-500 italic">Port side</text>
        <text x="400" y="140" className="text-[8px] fill-gray-500 italic">Starboard side</text>
        {/* Annotation pointers */}
        <line x1="210" y1="120" x2="210" y2="150" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrowSmall)" />
      </svg>
    </div>
  )
}

function ROVSystem() {
  return (
    <div className="card bg-gray-50 dark:bg-gray-900/50 mb-4">
      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">🤖 Remotely Operated Vehicle (ROV)</p>
      <svg viewBox="0 0 500 300" className="w-full max-w-lg mx-auto">
        <rect width="500" height="300" fill="#f0fdf4" rx="8" />
        {/* Water surface */}
        <line x1="0" y1="30" x2="500" y2="30" stroke="#60a5fa" strokeWidth="2" strokeDasharray="6,4" />
        <text x="80" y="22" className="text-[8px] fill-blue-600">Sea Surface</text>
        {/* Support ship */}
        <rect x="20" y="5" width="70" height="25" rx="4" fill="#64748b" />
        <text x="55" y="21" textAnchor="middle" className="text-[7px] fill-white">Support Ship</text>
        {/* Umbilical cable */}
        <line x1="55" y1="30" x2="55" y2="260" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,3" />
        <text x="20" y="140" className="text-[8px] fill-amber-600 italic">1. Umbilical Cable</text>
        {/* Tether */}
        <line x1="55" y1="260" x2="200" y2="240" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="80" y="260" className="text-[7px] fill-amber-600">2. Tether</text>
        {/* ROV body */}
        <rect x="180" y="220" width="80" height="40" rx="8" fill="#dc2626" />
        <text x="220" y="248" textAnchor="middle" className="text-[8px] fill-white font-bold">ROV</text>
        {/* Cameras */}
        <circle cx="185" cy="230" r="5" fill="#94a3b8" />
        <circle cx="185" cy="250" r="5" fill="#94a3b8" />
        <text x="160" y="227" className="text-[7px] fill-gray-500">3. Camera</text>
        {/* Lights */}
        <circle cx="180" cy="240" r="4" fill="#facc15" />
        <circle cx="180" cy="250" r="4" fill="#facc15" />
        <text x="155" y="253" className="text-[7px] fill-gray-500">Lights</text>
        {/* Manipulator arm */}
        <path d="M260,230 L290,220 L310,240 L320,230" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
        <text x="280" y="218" className="text-[7px] fill-gray-500">4. Arm</text>
        {/* Propellers */}
        <rect x="250" y="255" width="15" height="6" rx="2" fill="#94a3b8" />
        <circle cx="257" cy="258" r="3" fill="#475569" />
        <text x="250" y="272" className="text-[7px] fill-gray-500">5. Thruster</text>
        {/* Sea floor */}
        <path d="M0,280 Q100,270 200,280 Q300,290 400,275 Q450,270 500,280" fill="none" stroke="#8b5cf6" strokeWidth="3" />
        <text x="250" y="295" textAnchor="middle" className="text-[8px] fill-purple-600 font-medium">Sea Floor</text>
      </svg>
    </div>
  )
}
