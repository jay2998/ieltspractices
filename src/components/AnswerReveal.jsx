export default function AnswerReveal({ answer, explanation, userAnswer }) {
  return (
    <div className="card bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">🔑 Answer Key</h4>

      {userAnswer && (
        <div className="mb-3">
          <span className="text-sm font-medium text-gray-500">Your answer:</span>
          <div className="mt-1 p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 text-sm">
            {userAnswer || '(no answer)'}
          </div>
        </div>
      )}

      <div className="mb-3">
        <span className="text-sm font-medium text-green-600 dark:text-green-400">Correct answer:</span>
        <div className="mt-1 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800 text-sm font-semibold">
          {answer}
        </div>
      </div>

      {explanation && (
        <div>
          <span className="text-sm font-medium text-ielts-600">Explanation:</span>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{explanation}</p>
        </div>
      )}
    </div>
  )
}
