export default function TrueFalse({ question, revealed, selected, onSelect }) {
  const labels = ['True', 'False', 'Not Given']

  return (
    <fieldset className="mb-4">
      <legend className="sr-only">Select true, false, or not given</legend>
      <div className="flex flex-wrap gap-2">
        {labels.map(opt => {
          const value = question.type === 'yes-no-not-given'
            ? opt.replace('True', 'Yes').replace('False', 'No')
            : opt
          const isSelected = selected === value
          const isCorrect = value === question.answer
          return (
            <button
              key={opt}
              role="radio"
              aria-checked={isSelected}
              onClick={() => !revealed && onSelect(value)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                revealed
                  ? isCorrect
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                    : isSelected && !isCorrect
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-500'
                      : 'border-gray-200 dark:border-gray-600'
                  : isSelected
                    ? 'bg-ielts-50 border-ielts-500'
                    : 'border-gray-200 dark:border-gray-600 hover:border-ielts-300'
              }`}
              disabled={revealed}
            >
              {value}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
