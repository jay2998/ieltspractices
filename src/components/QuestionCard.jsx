import { useState, useMemo } from 'react'
import { toggleBookmark, getBookmarks } from '../utils/storage'
import MultipleChoice from './questions/MultipleChoice'
import TrueFalse from './questions/TrueFalse'
import TextInput from './questions/TextInput'
import MatchingDropdown from './questions/MatchingDropdown'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function normalizeText(text) {
  return text.trim().toLowerCase().replace(/^(the|a|an)\s+/, '').replace(/\s*\([^)]*\)/g, '').replace(/[^a-z0-9\s\/-]/g, '').trim()
}

function wordsEqual(a, b) {
  if (a === b) return true
  const aWords = a.split(/\s+/)
  const bWords = b.split(/\s+/)
  if (aWords.length !== bWords.length) return false
  return aWords.every((w, i) => w === bWords[i])
}

function checkAnswer(userAnswer, correctAnswer, questionType) {
  const user = normalizeText(userAnswer)
  const correct = normalizeText(correctAnswer)
  if (user === correct) return true

  if (correctAnswer.includes(' / ')) {
    const multiPart = questionType === 'summary-completion' || questionType === 'note-completion' || questionType === 'table-completion' || questionType === 'form-completion'
    if (multiPart) {
      const parts = correct.split('/').map(a => a.trim()).filter(Boolean)
      const userParts = user.split('/').map(a => a.trim()).filter(Boolean)
      if (userParts.length === 0) return false
      if (userParts.length !== parts.length) return false
      return parts.every((part, i) => wordsEqual(part, userParts[i]))
    }
    const hasSlashAlternatives = questionType === 'short-answer' || questionType === 'diagram-labeling' || questionType === 'map-labeling' || questionType === 'sentence-completion'
    if (hasSlashAlternatives) {
      const alternatives = correct.split('/').map(a => a.trim())
      return alternatives.some(alt => wordsEqual(user, alt))
    }
  }
  return false
}

export default function QuestionCard({ question, onAnswer, showResult, questionNumber }) {
  const [selected, setSelected] = useState('')
  const [textAnswer, setTextAnswer] = useState('')
  const [bookmarked, setBookmarked] = useState(() => getBookmarks().includes(question.id))
  const [revealed, setRevealed] = useState(false)

  const isMCQ = question.type === 'multiple-choice'
  const isForm = question.type?.includes('form') || question.type?.includes('note') || question.type?.includes('table')
  const isMatching = question.type === 'matching'
  const isTextInput = isForm || question.type === 'short-answer' || question.type === 'sentence-completion' || question.type === 'summary-completion' || question.type === 'map-labeling' || question.type === 'diagram-labeling'
  const isDropDownMatch = isMatching || question.type === 'matching-headings' || question.type === 'matching-features' || question.type === 'matching-information'
  const isTFNG = question.type === 'true-false-not-given' || question.type === 'yes-no-not-given'

  const shuffled = useMemo(() => {
    if (isMCQ && question.options) {
      const shuffled = shuffle(question.options)
      const correctText = question.options[question.answer.charCodeAt(0) - 65]
      const newIdx = shuffled.indexOf(correctText)
      const newAnswer = String.fromCharCode(65 + newIdx)
      return { options: shuffled, answer: newAnswer }
    }
    if (question.matches) {
      const entries = shuffle(Object.entries(question.matches))
      return { matches: Object.fromEntries(entries) }
    }
    if (question.headings) {
      const shuffled = shuffle(question.headings)
      const correctText = question.headings[question.answer.charCodeAt(0) - 65]
      const newIdx = shuffled.indexOf(correctText)
      const newAnswer = String.fromCharCode(65 + newIdx)
      return { headings: shuffled, answer: newAnswer }
    }
    if (question.features) {
      const shuffled = shuffle(question.features)
      const correctText = question.features[question.answer.charCodeAt(0) - 65]
      const newIdx = shuffled.indexOf(correctText)
      const newAnswer = String.fromCharCode(65 + newIdx)
      return { features: shuffled, answer: newAnswer }
    }
    return {}
  }, [question.id, question.options, question.matches, question.headings, question.features])

  const displayAnswer = shuffled.answer || question.answer

  function handleSubmit() {
    const isSelectedType = isMCQ || isDropDownMatch || isTFNG
    if (isSelectedType) {
      onAnswer(selected === displayAnswer)
    } else {
      onAnswer(checkAnswer(textAnswer, question.answer, question.type))
    }
    setRevealed(true)
  }

  function handleBookmark() {
    const updated = toggleBookmark(question.id)
    setBookmarked(updated.includes(question.id))
  }

  const answerCorrect = revealed && (
    isMCQ || isDropDownMatch || isTFNG
      ? selected === displayAnswer
      : checkAnswer(textAnswer, question.answer, question.type)
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

      <p className="mb-4 text-gray-800 dark:text-gray-100 leading-relaxed">{question.question}</p>

      {question.instructions && (
        <p className="mb-3 text-sm italic text-gray-500 dark:text-gray-400">{question.instructions}</p>
      )}

      {isMCQ && (
        <MultipleChoice
          question={{ ...question, options: shuffled.options || question.options, answer: displayAnswer }}
          revealed={revealed}
          selected={selected}
          onSelect={setSelected}
        />
      )}

      {isTextInput && (
        <TextInput
          question={question}
          revealed={revealed}
          value={textAnswer}
          onChange={setTextAnswer}
        />
      )}

      {isTFNG && (
        <TrueFalse
          question={question}
          revealed={revealed}
          selected={selected}
          onSelect={setSelected}
        />
      )}

      {isDropDownMatch && (
        <MatchingDropdown
          question={question}
          revealed={revealed}
          selected={selected}
          onSelect={setSelected}
        />
      )}

      {!revealed && (
        <button
          onClick={handleSubmit}
          disabled={!selected && !textAnswer}
          className="btn-primary text-sm"
        >
          Check Answer
        </button>
      )}

      {revealed && (
        <AnswerReveal
          correct={answerCorrect}
          answer={question.answer}
          explanation={question.explanation}
          userAnswer={isMCQ || isDropDownMatch || isTFNG ? selected : textAnswer}
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
