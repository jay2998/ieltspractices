export default function MatchingDropdown({ question, revealed, selected, onSelect }) {
  const matchItems = question.matches
    ? Object.entries(question.matches).map(([k, v]) => ({ value: k, label: `${k} — ${v}` }))
    : question.headings
      ? question.headings.map((h, i) => ({ value: String.fromCharCode(65 + i), label: `${String.fromCharCode(65 + i)}. ${h}` }))
      : question.features
        ? question.features.map((f, i) => ({ value: String.fromCharCode(65 + i), label: `${String.fromCharCode(65 + i)}. ${f}` }))
        : Array.from({ length: Math.max(question.answer?.charCodeAt(0) - 64 || 6, 6) }, (_, i) => {
            const letter = String.fromCharCode(65 + i)
            return { value: letter, label: `Paragraph ${letter}` }
          })

  return (
    <div className="mb-4">
      <label htmlFor={`match-${question.id}`} className="sr-only">Select match</label>
      <select
        id={`match-${question.id}`}
        value={selected}
        onChange={e => !revealed && onSelect(e.target.value)}
        className="input-field"
        disabled={revealed}
      >
        <option value="">Select...</option>
        {matchItems.map((item, i) => (
          <option key={i} value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  )
}
