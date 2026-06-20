import { useState } from 'react'
import { toggleBookmark, getBookmarks } from '../utils/storage'

export default function QuestionCard({ question, onAnswer, showResult, questionNumber }) {
  const [selected, setSelected] = useState('')
  const [textAnswer, setTextAnswer] = useState('')
  const [bookmarked, setBookmarked] = useState(() => getBookmarks().includes(question.id))
  const [revealed, setRevealed] = useState(false)

  function handleSubmit() {
    const isSelectedType = question.type === 'multiple-choice' || isDropDownMatch || question.type === 'true-false-not-given' || question.type === 'yes-no-not-given'
    if (isSelectedType) {
      onAnswer(selected === question.answer)
    } else {
      onAnswer(isAnswerCorrect(textAnswer, question.answer))
    }
    setRevealed(true)
  }

  function handleBookmark() {
    const updated = toggleBookmark(question.id)
    setBookmarked(updated.includes(question.id))
  }

  const isMCQ = question.type === 'multiple-choice'
  const isForm = question.type?.includes('form') || question.type?.includes('note') || question.type?.includes('table')
  const isMatching = question.type === 'matching'
  const isDropDownMatch = isMatching || question.type === 'matching-headings' || question.type === 'matching-features' || question.type === 'matching-information'

  function normalizeText(text) {
    return text.trim().toLowerCase().replace(/^(the|a|an)\s+/, '').replace(/\s*\([^)]*\)/g, '').replace(/[^a-z0-9\s\/-]/g, '').trim()
  }

  function isAnswerCorrect(userAnswer, correctAnswer) {
    const user = normalizeText(userAnswer)
    const hasSlashAlternatives = question.type === 'short-answer' || question.type === 'diagram-labeling' || question.type === 'sentence-completion'
    if (hasSlashAlternatives && correctAnswer.includes(' / ')) {
      const alternatives = correctAnswer.split(' / ').map(a => normalizeText(a))
      for (const alt of alternatives) {
        if (user === alt || user.includes(alt) || alt.includes(user)) return true
      }
    }
    const correct = normalizeText(correctAnswer)
    if (user === correct) return true
    if (user.includes(correct) || correct.includes(user)) return true
    const stopWords = new Set(['the', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'of', 'and', 'or', 'is', 'are', 'was', 'were'])
    const userWords = user.split(/\s+/).filter(w => !stopWords.has(w) && w.length > 0)
    const correctWords = correct.split(/\s+/).filter(w => !stopWords.has(w) && w.length > 0)
    if (userWords.length > 0 && correctWords.length > 0) {
      const matchCount = userWords.filter(w => correctWords.some(cw => cw.includes(w) || w.includes(cw))).length
      if (matchCount >= Math.min(userWords.length, correctWords.length)) return true
    }
    return false
  }

  const matchItems = question.matches
    ? Object.entries(question.matches).map(([k, v]) => ({ value: k, label: `${k}. ${v}` }))
    : question.headings
      ? question.headings.map((h, i) => ({ value: String.fromCharCode(65 + i), label: `${String.fromCharCode(65 + i)}. ${h}` }))
      : question.features
        ? question.features.map((f, i) => ({ value: String.fromCharCode(65 + i), label: `${String.fromCharCode(65 + i)}. ${f}` }))
        : isDropDownMatch
          ? Array.from({ length: Math.max(question.answer?.charCodeAt(0) - 64 || 6, 6) }, (_, i) => {
              const letter = String.fromCharCode(65 + i)
              return { value: letter, label: `Paragraph ${letter}` }
            })
          : []

  const answerCorrect = revealed && (
    isMCQ || isDropDownMatch || question.type === 'true-false-not-given' || question.type === 'yes-no-not-given'
      ? selected === question.answer
      : isAnswerCorrect(textAnswer, question.answer)
  )

  return (
    <div className={`card mb-4 border-l-4 ${
      revealed
        ? answerCorrect ? 'border-green-500' : 'border-red-500'
        : 'border-ielts-500'
    }`}>
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm font-bold text-ielts-600 bg-ielts-50 dark:bg-ielts-900/30 px-2 py-0.5 rounded">
          Q{questionNumber} · {question.type?.replace(/-/g, ' ') || 'question'}
        </span>
        <button
          onClick={handleBookmark}
          className={`text-lg transition-colors ${bookmarked ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-400'}`}
          aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark question'}
        >
          {bookmarked ? '★' : '☆'}
        </button>
      </div>

      {/* Question text */}
      <p className="mb-4 text-gray-800 dark:text-gray-100 leading-relaxed">{question.question}</p>

      {question.instructions && (
        <p className="mb-3 text-sm italic text-gray-500 dark:text-gray-400">{question.instructions}</p>
      )}

      {/* Multiple choice */}
      {isMCQ && question.options && (
        <div className="space-y-2 mb-4">
          {question.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx)
            const isSelected = selected === letter
            const isCorrect = letter === question.answer
            return (
              <button
                key={idx}
                onClick={() => !revealed && setSelected(letter)}
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
      )}

      {/* Form/Short answer */}
      {(isForm || question.type === 'short-answer' || question.type === 'sentence-completion' || question.type === 'summary-completion') && (
        <div className="mb-4">
          <input
            type="text"
            value={textAnswer}
            onChange={e => setTextAnswer(e.target.value)}
            placeholder="Type your answer..."
            className="input-field"
            disabled={revealed}
          />
        </div>
      )}

      {/* True/False/Not Given */}
      {(question.type === 'true-false-not-given' || question.type === 'yes-no-not-given') && (
        <div className="flex flex-wrap gap-2 mb-4">
          {['True', 'False', 'Not Given'].map(opt => {
            const value = question.type === 'yes-no-not-given'
              ? opt.replace('True', 'Yes').replace('False', 'No')
              : opt
            const isSelected = selected === value
            const isCorrect = value === question.answer
            return (
              <button
                key={opt}
                onClick={() => !revealed && setSelected(value)}
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
      )}

      {/* Matching dropdown */}
      {isDropDownMatch && matchItems.length > 0 && (
        <div className="mb-4">
          <select
            value={selected}
            onChange={e => setSelected(e.target.value)}
            className="input-field"
            disabled={revealed}
          >
            <option value="">Select...</option>
            {matchItems.map((item, i) => (
              <option key={i} value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
      )}

      {/* Submit */}
      {!revealed && (
        <button
          onClick={handleSubmit}
          disabled={!selected && !textAnswer}
          className="btn-primary text-sm"
        >
          Check Answer
        </button>
      )}

      {/* Results */}
      {revealed && (
        <AnswerReveal
          correct={answerCorrect}
          answer={question.answer}
          explanation={question.explanation}
          userAnswer={isMCQ || isDropDownMatch || question.type === 'true-false-not-given' || question.type === 'yes-no-not-given' ? selected : textAnswer}
        />
      )}
    </div>
  )
}

function AnswerReveal({ correct, answer, explanation, userAnswer }) {
  return (
    <div className={`mt-4 p-4 rounded-lg ${
      correct
        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
        : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{correct ? '✅' : '❌'}</span>
        <span className={`font-bold ${correct ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
          {correct ? 'Correct!' : 'Incorrect'}
        </span>
      </div>
      {!correct && (
        <p className="text-sm mb-1">
          <span className="font-semibold">Your answer:</span> {userAnswer || '(no answer)'}
        </p>
      )}
      <p className="text-sm mb-1">
        <span className="font-semibold">Correct answer:</span> {answer}
      </p>
      {explanation && (
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Explanation:</span> {explanation}
        </p>
      )}
    </div>
  )
}
