/* Render actual SVG charts from structured data in imageDescription */

export default function ChartVisual({ chartType, type, data }) {
  const ct = chartType || type
  if (!data) return <div className="p-4 text-center text-sm text-gray-400">No chart data available</div>

  switch (ct) {
    case 'bar': return <BarChart data={data} />
    case 'line': return <LineGraph data={data} />
    case 'pie': return <PieChart data={data} />
    case 'table': return <DataTable data={data} />
    case 'process': return <ProcessFlow data={data} />
    case 'map': return <MapComparison data={data} />
    case 'mixed': return <MixedChart data={data} />
    default: return <DataTable data={data} />
  }
}

/* ---- Parse imageDescription into structured data ---- */

export function parseChartDescription(desc) {
  if (!desc) return { type: null, data: null }
  const lower = desc.toLowerCase()

  if (lower.includes('bar chart')) {
    const matches = [...desc.matchAll(/([A-Za-z\s-]+?)\s+(\d+)%/g)]
    if (matches.length > 0) {
      return {
        type: 'bar',
        data: {
          labels: matches.map(m => m[1].trim()),
          values: matches.map(m => parseInt(m[2])),
          title: 'Energy Sources (%)',
        }
      }
    }
  }

  if (lower.includes('line graph')) {
    const lines = []
    const parts = desc.split(',').map(s => s.trim())
    for (const part of parts) {
      const vals = [...part.matchAll(/(\d+)%/g)].map(m => parseInt(m[1]))
      const name = part.replace(/\s*\d+%[^,]*/g, '').trim().replace(/^[A-Za-z]+:/, '').trim()
      if (name && vals.length > 0) {
        lines.push({ name, values: vals })
      }
    }
    if (lines.length > 0) {
      return { type: 'line', data: { lines, title: 'Population Growth (%)' } }
    }
  }

  if (lower.includes('pie chart')) {
    const clean = desc.replace(/^[^:]*:\s*\d+\s*-\s*/, '')
    const matches = [...clean.matchAll(/([A-Za-z\s]+?)\s+(\d+)%/g)]
    if (matches.length > 0) {
      return {
        type: 'pie',
        data: matches.map(m => ({ label: m[1].trim(), value: parseInt(m[2]) }))
      }
    }
  }

  if (lower.includes('table:')) {
    const text = desc.replace(/^table:\s*/i, '').trim()
    if (text.includes('->')) {
      const entries = text.split(/,(?=(?:[^)]*\))?[^(]*$)/).map(s => s.trim()).filter(Boolean)
      const headers = ['Country', 'Year 1', 'Value 1', 'Year 2', 'Value 2', 'Change']
      const rows = entries.map(entry => {
        const match = entry.match(/^([A-Za-z\s]+?)\s+([\d,]+)\((\d{4})\)\s*->\s*([\d,]+)\((\d{4}),\s*([+-]?\d+%)\)/)
        if (match) {
          const [, country, v1, y1, v2, y2, pct] = match
          return [country.trim(), y1, v1, y2, v2, pct]
        }
        return [entry, '', '', '', '', '']
      })
      return { type: 'table', data: { headers, rows } }
    }
    if (text.includes(';')) {
      const entries = text.split(';').map(s => s.trim()).filter(Boolean)
      const headers = ['Country', 'Spending (% of GDP)', 'Life Expectancy']
      const rows = entries.map(entry => {
        const match = entry.match(/^([A-Za-z\s]+?)\s+([\d.]+%)\s*[a-z]+\s*,\s*([\d.]+)\s*years?/)
        if (match) {
          const [, country, spending, lifeExp] = match
          return [country.trim(), spending, lifeExp + ' years']
        }
        const parts = entry.split(',').map(s => s.trim())
        const country = parts[0]?.replace(/\s+[\d.]+.*/, '') || ''
        return [country, parts[0]?.replace(country, '').trim() || '', parts[1] || '']
      })
      return { type: 'table', data: { headers, rows } }
    }
    const entries = text.split(',').map(s => s.trim()).filter(Boolean)
    const rows = entries.map(e => {
      const parts = e.split(/\s+/)
      const country = parts[0] || ''
      const rest = parts.slice(1).join(' ') || ''
      return [country, rest]
    })
    return { type: 'table', data: { headers: ['Item', 'Value'], rows } }
  }

  if (lower.includes('flow diagram') || lower.includes('process')) {
    return { type: 'process', data: desc }
  }

  if (lower.includes('map 1') || lower.includes('map (19')) {
    return { type: 'map', data: desc }
  }

  if (lower.includes('gdp') || lower.includes('unemployment')) {
    return { type: 'mixed', data: desc }
  }

  return { type: 'table', data: { headers: ['Data'], rows: [[desc]] } }
}

/* ---- SVG Chart Components ---- */

function BarChart({ data }) {
  const labels = data.labels || []
  const values = data.values || []
  if (labels.length === 0) return <div className="p-4 text-center text-sm text-gray-400">Bar chart data unavailable</div>

  const w = 400, h = 250, pad = 40
  const n = labels.length
  const barW = Math.min(28, (w - pad * 2) / n - 4)
  const max = Math.max(...values, 1)

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md mx-auto">
      <rect x="0" y="0" width={w} height={h} fill="#f8f8f8" rx="8" />
      <text x={w / 2} y="18" textAnchor="middle" className="text-[10px] fill-gray-600 font-semibold">{data.title || ''}</text>
      {values.map((v, i) => {
        const barH = (v / max) * (h - 80)
        const x = pad + i * ((w - pad * 2) / n)
        return (
          <g key={i}>
            <rect x={x + 6} y={h - 40 - barH} width={barW} height={barH}
              fill={['#dc2626', '#f87171', '#fca5a5', '#ef4444', '#b91c1c', '#fecaca'][i % 6]} rx="3" />
            <text x={x + 6 + barW / 2} y={h - 45 - barH}
              textAnchor="middle" className="text-[9px] fill-gray-700 font-bold">{v}%</text>
            <text x={x + 6 + barW / 2} y={h - 24}
              textAnchor="middle" className="text-[7px] fill-gray-500">{labels[i].substring(0, 10)}</text>
          </g>
        )
      })}
      <line x1={pad} y1={h - 40} x2={w - 10} y2={h - 40} stroke="#d1d5db" strokeWidth="1" />
    </svg>
  )
}

function LineGraph({ data }) {
  const lines = data.lines || []
  if (lines.length === 0) return <div className="p-4 text-center text-sm text-gray-400">Line graph data unavailable</div>

  const w = 420, h = 250, pad = 45
  const allVals = lines.flatMap(l => l.values)
  const max = Math.max(...allVals, 1)
  const colors = ['#dc2626', '#2563eb', '#16a34a', '#ca8a04', '#8b5cf6']
  const pts = lines[0]?.values?.length || 3

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full max-w-md mx-auto">
      <rect x="0" y="0" width={w} height={h} fill="#f8f8f8" rx="8" />
      <text x={w / 2} y="18" textAnchor="middle" className="text-[10px] fill-gray-600 font-semibold">{data.title || ''}</text>
      {lines.map((line, li) => {
        if (line.values.length < 2) return null
        const points = line.values.map((v, i) => ({
          x: pad + (i / Math.max(pts - 1, 1)) * (w - pad * 2),
          y: h - 40 - ((v) / max) * (h - 80)
        }))
        const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
        return (
          <g key={li}>
            <path d={path} fill="none" stroke={colors[li % colors.length]} strokeWidth="2.5" />
            {points.map((p, pi) => (
              <circle key={pi} cx={p.x} cy={p.y} r="4" fill={colors[li % colors.length]} stroke="white" strokeWidth="1.5" />
            ))}
          </g>
        )
      })}
      {lines.length > 1 && (
        <g transform={`translate(${w - 90}, 10)`}>
          {lines.map((l, li) => (
            <g key={li} transform={`translate(0, ${li * 15})`}>
              <rect x="0" y="0" width="10" height="10" fill={colors[li % colors.length]} rx="2" />
              <text x="14" y="9" className="text-[7px] fill-gray-600">{l.name.substring(0, 12)}</text>
            </g>
          ))}
        </g>
      )}
      <line x1={pad} y1={h - 40} x2={w - 10} y2={h - 40} stroke="#d1d5db" strokeWidth="1" />
      {/* Y axis labels */}
      <text x={pad - 8} y={h - 40} textAnchor="end" className="text-[7px] fill-gray-400">0</text>
      <text x={pad - 8} y={h - 40 - (h - 80) / 2} textAnchor="end" className="text-[7px] fill-gray-400">{Math.round(max / 2)}</text>
      <text x={pad - 8} y={h - 80} textAnchor="end" className="text-[7px] fill-gray-400">{max}</text>
    </svg>
  )
}

function PieChart({ data }) {
  const items = data
  if (!items || items.length === 0) return <div className="p-4 text-center text-sm text-gray-400">Pie chart data unavailable</div>

  const colors = ['#dc2626', '#f87171', '#fca5a5', '#fecaca', '#fee2e2', '#b91c1c', '#ef4444', '#f59e0b']
  const total = items.reduce((s, d) => s + d.value, 0)
  let angle = 0
  const cx = 130, cy = 130, r = 95

  const slices = items.map((d, i) => {
    const pct = (d.value / total) * 360
    const a1 = (angle * Math.PI) / 180
    const a2 = ((angle + pct) * Math.PI) / 180
    const x1 = cx + r * Math.cos(a1)
    const y1 = cy + r * Math.sin(a1)
    const x2 = cx + r * Math.cos(a2)
    const y2 = cy + r * Math.sin(a2)
    const large = pct > 180 ? 1 : 0
    angle += pct
    return {
      path: `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`,
      color: colors[i % colors.length],
      label: d.label,
      pct: Math.round((d.value / total) * 100)
    }
  })

  return (
    <svg viewBox="0 0 400 280" className="w-full max-w-md mx-auto">
      <rect x="0" y="0" width="400" height="280" fill="#f8f8f8" rx="8" />
      {slices.map((s, i) => (
        <path key={i} d={s.path} fill={s.color} stroke="white" strokeWidth="2" />
      ))}
      <g transform="translate(260, 20)">
        {slices.map((s, i) => (
          <g key={i} transform={`translate(0, ${i * 22})`}>
            <rect x="0" y="0" width="14" height="14" fill={s.color} rx="3" />
            <text x="20" y="11" className="text-[9px] fill-gray-700 font-medium">{s.label} ({s.pct}%)</text>
          </g>
        ))}
      </g>
    </svg>
  )
}

function DataTable({ data }) {
  const headers = data?.headers || ['Item', 'Value']
  const rows = data?.rows || []
  if (rows.length === 0) return <div className="p-4 text-center text-sm text-gray-400">Table data unavailable</div>

  return (
    <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-red-100 dark:bg-red-900/30">
            {headers.map((h, i) => (
              <th key={i} className="p-2.5 border border-gray-300 dark:border-gray-600 text-left font-semibold text-xs">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700/50'}>
              {(Array.isArray(row) ? row : [row]).map((cell, j) => (
                <td key={j} className="p-2.5 border border-gray-300 dark:border-gray-600 text-xs">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ProcessFlow({ data }) {
  if (!data || typeof data !== 'string') return null
  const steps = data.split('->').map(s => s.trim().replace(/^\d+\.\s*/, '')).filter(Boolean)
  const svgW = Math.max(500, steps.length * 110)

  return (
    <svg viewBox={`0 0 ${svgW} 150`} className="w-full mx-auto">
      <rect x="0" y="0" width={svgW} height="150" fill="#f8f8f8" rx="8" />
      <text x={svgW / 2} y="18" textAnchor="middle" className="text-[10px] fill-gray-600 font-semibold">Process Flow</text>
      {steps.map((s, i) => {
        const x = 10 + i * (svgW - 20) / steps.length
        return (
          <g key={i}>
            <rect x={x} y="40" width="85" height="60" rx="6" fill="#dc2626" />
            <text x={x + 42} y="76" textAnchor="middle" className="fill-white text-[8px]" dominantBaseline="middle">
              {s.substring(0, 20)}
              {s.length > 20 ? '...' : ''}
            </text>
            <text x={x + 42} y="120" textAnchor="middle" className="text-[8px] fill-gray-500">Step {i + 1}</text>
            {i < steps.length - 1 && (
              <g transform={`translate(${x + 88}, 68)`}>
                <polygon points="0,-6 12,0 0,6" fill="#9ca3af" />
              </g>
            )}
          </g>
        )
      })}
    </svg>
  )
}

function MapComparison({ data }) {
  if (!data || typeof data !== 'string') return null
  const parts = data.split('Map 2').map(s => s.trim())
  const map1 = parts[0]?.replace(/map\s*1\s*[:(]/i, '').trim() || ''
  const map2 = parts[1]?.replace(/^[:\s]*/, '').replace(/present[)\s]*/i, '').trim() || ''

  return (
    <div className="grid grid-cols-2 gap-3">
      {[['1980', map1, '#fef2f2'], ['Present', map2, '#fee2e2']].map(([label, desc, bg], idx) => (
        <div key={idx} className="text-center">
          <div className="font-semibold text-sm mb-1 text-ielts-600">{label}</div>
          <svg viewBox="0 0 280 200" className="w-full border border-gray-300 dark:border-gray-600 rounded-lg">
            <rect width="280" height="200" fill={bg} rx="4" />
            <text x="140" y="18" textAnchor="middle" className="text-[8px] fill-gray-500 font-medium">
              {idx === 0 ? 'Fishing Village' : 'Tourist Town'}
            </text>
            <rect x="15" y="35" width="35" height="80" rx="3" fill="#94a3b8" opacity="0.6" />
            <text x="32" y="80" textAnchor="middle" className="text-[6px] fill-gray-500">Harbour</text>
            <line x1="65" y1="45" x2="245" y2="45" stroke="#64748b" strokeWidth="2" />
            <line x1="65" y1="58" x2="245" y2="58" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,3" />
            <rect x="15" y="140" width="40" height="25" rx="2" fill="#22c55e" opacity="0.5" />
            <text x="35" y="157" textAnchor="middle" className="text-[6px] fill-gray-600">Farm</text>
            {idx === 1 && (
              <>
                <rect x="180" y="120" width="60" height="35" rx="4" fill="#dc2626" opacity="0.5" />
                <text x="210" y="142" textAnchor="middle" className="text-[6px] fill-gray-600">Hotel</text>
                <rect x="100" y="130" width="50" height="35" rx="4" fill="#f87171" opacity="0.5" />
                <text x="125" y="152" textAnchor="middle" className="text-[6px] fill-gray-600">Shops</text>
                <rect x="180" y="30" width="55" height="12" rx="2" fill="#a855f7" opacity="0.4" />
                <text x="207" y="39" textAnchor="middle" className="text-[5px] fill-gray-500">Airport</text>
              </>
            )}
            <text x="140" y="190" textAnchor="middle" className="text-[7px] fill-gray-400 italic">
              {idx === 0 ? 'Small fishing village' : 'Expanded resort'}
            </text>
          </svg>
          <p className="text-[9px] text-gray-500 mt-1 leading-tight">{desc.substring(0, 60)}</p>
        </div>
      ))}
    </div>
  )
}

function MixedChart({ data }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">GDP Growth &amp; Unemployment</p>
      <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto">
        <rect x="0" y="0" width="400" height="200" fill="#f8f8f8" rx="8" />
        <rect x="50" y="35" width="35" height="115" fill="#dc2626" rx="3" />
        <text x="67" y="30" textAnchor="middle" className="text-[8px] fill-gray-700 font-bold">5.2%</text>
        <text x="67" y="165" textAnchor="middle" className="text-[8px] fill-gray-500">A</text>
        <rect x="105" y="55" width="35" height="95" fill="#f87171" rx="3" />
        <text x="122" y="50" textAnchor="middle" className="text-[8px] fill-gray-700 font-bold">3.8%</text>
        <text x="122" y="165" textAnchor="middle" className="text-[8px] fill-gray-500">B</text>
        <rect x="160" y="75" width="35" height="75" fill="#fca5a5" rx="3" />
        <text x="177" y="70" textAnchor="middle" className="text-[8px] fill-gray-700 font-bold">2.1%</text>
        <text x="177" y="165" textAnchor="middle" className="text-[8px] fill-gray-500">C</text>
        <line x1="220" y1="155" x2="370" y2="45" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5,3" />
        <text x="295" y="95" className="text-[8px] fill-blue-600 font-medium">Unemployment</text>
        <text x="260" y="170" className="text-[7px] fill-gray-400">(falling trend)</text>
        <line x1="40" y1="165" x2="380" y2="165" stroke="#d1d5db" strokeWidth="1" />
        <text x="30" y="169" textAnchor="end" className="text-[7px] fill-gray-400">0%</text>
      </svg>
    </div>
  )
}
