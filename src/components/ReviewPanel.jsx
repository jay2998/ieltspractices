import { useState } from 'react'

export default function ReviewPanel({ questions, answers, onRetry, onBack }) {
  const [showAll, setShowAll] = useState(false)
  const allAnswered = questions.every(q => answers[q.id] !== undefined)
  const correctCount = questions.filter(q => answers[q.id] === true).length
  const total = questions.length
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0

  if (!allAnswered) return null

  return (
    <div className="mt-6 space-y-6">
      {/* Score card */}
      <div className="card bg-gradient-to-r from-ielts-50 to-red-50 dark:from-ielts-900/20 dark:to-red-900/20 border border-ielts-200 dark:border-ielts-800">
        <div className="text-center py-4">
          <div className="text-5xl font-bold text-ielts-600 mb-2">{correctCount}/{total}</div>
          <div className="text-lg text-gray-600 dark:text-gray-400 mb-1">
            {pct >= 100 ? '🎉 Perfect score! Excellent work!' :
             pct >= 70 ? '👍 Good job! You\'re on track for Band 7+' :
             '💪 Keep practicing — review the details below.'}
          </div>
          <div className="text-sm text-gray-500 mb-4">{pct}% accuracy</div>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={onRetry} className="btn-primary">Retry</button>
            <button onClick={onBack} className="btn-secondary">Try another</button>
            <button onClick={() => setShowAll(!showAll)} className="btn-secondary">
              {showAll ? 'Hide details' : 'Review details'}
            </button>
          </div>
        </div>
      </div>

      {/* Detailed review */}
      {showAll && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">📋 Detailed Review</h3>
          {questions.map((q, idx) => {
            const correct = answers[q.id]
            return (
              <div
                key={q.id}
                className={`card border-l-4 ${
                  correct === true ? 'border-green-500' : correct === false ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-bold text-ielts-600 bg-ielts-50 dark:bg-ielts-900/30 px-2 py-0.5 rounded">
                    Q{idx + 1} · {q.type?.replace(/-/g, ' ') || 'question'}
                  </span>
                  <span className={`text-sm font-semibold ${
                    correct === true ? 'text-green-600' : correct === false ? 'text-red-600' : 'text-gray-400'
                  }`}>
                    {correct === true ? '✅ Correct' : correct === false ? '❌ Incorrect' : '⏳ Unanswered'}
                  </span>
                </div>
                <p className="text-sm text-gray-800 dark:text-gray-100 mb-2">{q.question}</p>
                <p className="text-sm">
                  <span className="font-semibold">Answer:</span> <span className="text-green-700 dark:text-green-300">{q.answer}</span>
                </p>
                {q.explanation && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">{q.explanation}</p>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
