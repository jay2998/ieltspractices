import { useState, useEffect } from 'react'
import { getMistakes, getProgress, saveProgress } from '../utils/storage'
import { listeningData } from '../data/listening'
import { readingData } from '../data/reading'
import QuestionCard from '../components/QuestionCard'

function findQuestion(id) {
  for (const section of listeningData.sections) {
    const q = section.questions.find(x => x.id === id)
    if (q) return q
  }
  for (const passage of readingData.passages) {
    const q = passage.questions.find(x => x.id === id)
    if (q) return q
  }
  return null
}

export default function Mistakes() {
  const [mistakes, setMistakes] = useState([])
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const m = getMistakes()
    setMistakes(m)
    const qs = m.map(m => findQuestion(m.id)).filter(Boolean)
    setQuestions(qs)
  }, [])

  function handleAnswer(questionId, correct) {
    const m = mistakes.find(x => x.id === questionId)
    if (m) saveProgress(m.skill, questionId, { correct: true, type: m.type })
    setQuestions(prev => prev.filter(q => q.id !== questionId))
  }

  if (questions.length === 0) {
    return (
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">✅ Review Mistakes</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">Practice questions you got wrong.</p>
        {mistakes.length === 0 ? (
          <div className="card text-center py-8">
            <div className="text-4xl mb-3">🎉</div>
            <p className="text-gray-600 dark:text-gray-400">No mistakes to review! Keep up the great work.</p>
          </div>
        ) : (
          <div className="card text-center py-8">
            <div className="text-4xl mb-3">✅</div>
            <p className="text-gray-600 dark:text-gray-400">All mistakes have been corrected!</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">✅ Review Mistakes</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {questions.length} question{questions.length !== 1 ? 's' : ''} to review.
        </p>
      </div>
      <div className="space-y-4">
        {questions.map((q, idx) => (
          <QuestionCard
            key={q.id}
            question={q}
            questionNumber={idx + 1}
            onAnswer={(correct) => handleAnswer(q.id, correct)}
            showResult={false}
          />
        ))}
      </div>
    </div>
  )
}
