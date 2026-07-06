export default function MatchingDropdown({ question, revealed, selected, onSelect }) {
  if (question.matches) {
    const items = Object.keys(question.matches)
    const options = Object.values(question.matches).map((v, i) => ({
      value: String.fromCharCode(65 + i),
      label: `${String.fromCharCode(65 + i)}. ${v}`
    }))

    return (
      <div className="mb-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 flex-wrap">
            <span className="min-w-[200px] font-medium">{item}</span>
            <select
              value={selected?.[item] || ''}
              onChange={e => onSelect({ ...selected, [item]: e.target.value })}
              disabled={revealed}
              className="input-field"
            >
              <option value="">Select...</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    )
  }

  const matchItems = question.headings
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
