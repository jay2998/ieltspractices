export default function MultipleChoice({ question, revealed, selected, onSelect }) {
  return (
    <div className="space-y-2 mb-4" role="radiogroup" aria-label="Answer options">
      {question.options.map((opt, idx) => {
        const letter = String.fromCharCode(65 + idx)
        const isSelected = selected === letter
        const isCorrect = letter === question.answer
        return (
          <button
            key={idx}
            role="radio"
            aria-checked={isSelected}
            onClick={() => !revealed && onSelect(letter)}
            className={`w-full text-left p-3 rounded-lg border transition-colors ${
              revealed
                ? isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-200'
                  : isSelected && !isCorrect
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-200'
                    : 'border-gray-200 dark:border-gray-600'
                : isSelected
                  ? 'bg-ielts-50 border-ielts-500 dark:bg-ielts-900/30'
                  : 'border-gray-200 dark:border-gray-600 hover:border-ielts-300'
            }`}
            disabled={revealed}
          >
            <span className="font-bold mr-2">{letter}.</span>
            {opt.text || opt}
          </button>
        )
      })}
    </div>
  )
}
