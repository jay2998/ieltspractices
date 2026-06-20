export default function TextInput({ question, revealed, value, onChange }) {
  const placeholder = question.type === 'form-completion' || question.type === 'note-completion' || question.type === 'table-completion'
    ? 'ONE WORD AND/OR A NUMBER'
    : question.type === 'summary-completion'
      ? 'NO MORE THAN THREE WORDS'
      : 'Type your answer...'

  return (
    <div className="mb-4">
      <label htmlFor={`answer-${question.id}`} className="sr-only">Your answer</label>
      <input
        id={`answer-${question.id}`}
        type="text"
        value={value}
        onChange={e => !revealed && onChange(e.target.value)}
        placeholder={placeholder}
        className="input-field"
        disabled={revealed}
      />
    </div>
  )
}
