import { useState } from 'react'
import { readingData } from '../data/reading'
import { saveProgress } from '../utils/storage'
import QuestionCard from '../components/QuestionCard'
import ProgressBar from '../components/ProgressBar'
import Timer from '../components/Timer'
import ReadingDiagram from '../components/ReadingDiagram'
import ReviewPanel from '../components/ReviewPanel'

const readingGuide = {
  title: '📖 Reading Test Guide',
  tips: [
    '3 passages, 40 questions, 60 minutes — roughly 20 min per passage',
    'Passages increase in difficulty — passage 1 is the easiest',
    'Skim each passage FIRST (2-3 min) for main ideas and structure',
    'Scan for keywords and synonyms from the questions',
    'True/False/Not Given: use ONLY the passage text, not your own knowledge',
    'Matching headings: read all headings first before matching',
    'Summary completion: check word limits (ONE WORD / TWO WORDS / NO MORE THAN THREE)',
    'Don\'t spend too long on any single question — mark and move on',
    'Build academic reading speed with The Guardian, BBC News, National Geographic',
    'Learn to identify: topic sentences, supporting details, and conclusions in paragraphs',
  ],
}

export default function Reading() {
  const [showGuide, setShowGuide] = useState(false)
  const passages = readingData.passages
  const [activePassage, setActivePassage] = useState(null)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [timerRunning, setTimerRunning] = useState(false)
  const [showPassage, setShowPassage] = useState(true)
  const [search, setSearch] = useState('')

  const filteredPassages = passages.filter(p => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  function startPassage(id) {
    setActivePassage(id)
    setAnswers({})
    setShowResults(false)
    setTimerRunning(true)
    setShowPassage(true)
  }

  const passage = passages.find(p => p.id === activePassage)
  const passageQs = passage?.questions || []

  function handleAnswer(questionId, correct) {
    setAnswers(prev => ({ ...prev, [questionId]: correct }))
    const q = passageQs.find(x => x.id === questionId)
    saveProgress('reading', questionId, { correct, type: q?.type })
  }

  const answeredCount = Object.keys(answers).length
  const correctCount = Object.values(answers).filter(Boolean).length

  function handleTimeUp() {
    setShowResults(true)
    setTimerRunning(false)
  }

  function handleBack() {
    if (answeredCount > 0 && !window.confirm('You have unanswered questions. Are you sure you want to leave?')) return
    setActivePassage(null)
    setTimerRunning(false)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">📖 Reading</h1>
        <p className="text-gray-500 dark:text-gray-400">Academic passages with comprehension questions. Practice skimming, scanning, and detailed reading.</p>
        <button
          onClick={() => setShowGuide(!showGuide)}
          className="mt-3 text-sm text-ielts-600 dark:text-ielts-400 hover:text-ielts-700 font-medium flex items-center gap-1"
        >
          <svg className={`w-4 h-4 transition-transform ${showGuide ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {showGuide ? 'Hide guide' : 'Show prep guide & tips'}
        </button>
        {showGuide && (
          <div className="mt-3 p-4 bg-ielts-50 dark:bg-ielts-900/20 rounded-lg border border-ielts-200 dark:border-ielts-800">
            <h3 className="font-semibold text-sm mb-2">{readingGuide.title}</h3>
            <ul className="space-y-1.5">
              {readingGuide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <span className="text-ielts-500 mt-0.5">▸</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Search */}
      {!activePassage && (
        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search passages..."
            className="input-field"
          />
        </div>
      )}

      {/* Passage selector */}
      {!activePassage && (
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {filteredPassages.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => startPassage(p.id)}
              className="card text-left hover:border-red-400 border-2 border-transparent transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-300 px-2 py-0.5 rounded">
                  Passage {idx + 1}
                </span>
                <span className="text-xs text-gray-400">{p.questions.length} questions</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{p.text?.substring(0, 100).replace(/<[^>]*>/g, '')}...</p>
              <div className="text-red-600 dark:text-red-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Start passage →
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Active passage */}
      {passage && (
        <div>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <button
              onClick={handleBack}
              className="btn-secondary text-sm"
            >
              ← Back to passages
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPassage(!showPassage)}
                className="btn-secondary text-sm"
              >
                {showPassage ? 'Hide passage' : 'Show passage'}
              </button>
              <Timer initialMinutes={20} onTimeUp={handleTimeUp} running={timerRunning} />
            </div>
          </div>

          {/* Passage text */}
          {showPassage && (
            <div className="card mb-6 max-h-96 overflow-y-auto">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-lg">{passage.title}</h2>
                <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">Reading passage</span>
              </div>
              <div
                className="prose prose-sm dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: passage.text }}
              />
            </div>
          )}

          <ProgressBar
            current={answeredCount}
            total={passageQs.length}
            label={`Questions answered: ${answeredCount}/${passageQs.length}`}
          />

          {/* Diagrams for diagram-labeling questions */}
          {passageQs.filter(q => q.type === 'diagram-labeling').length > 0 && (
            <ReadingDiagram passageId={passage.id} question={passageQs.find(q => q.type === 'diagram-labeling')} />
          )}

          <div className="space-y-4">
            {passageQs.map((q, idx) => (
              <QuestionCard
                key={q.id}
                question={q}
                questionNumber={idx + 1}
                onAnswer={(correct) => handleAnswer(q.id, correct)}
                showResult={showResults}
              />
            ))}
          </div>

          {answeredCount === passageQs.length && passageQs.length > 0 && (
            <ReviewPanel
              questions={passageQs}
              answers={answers}
              onRetry={() => startPassage(passage.id)}
              onBack={() => setActivePassage(null)}
            />
          )}

          {showResults && answeredCount < passageQs.length && (
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200 text-center">
              ⏰ Time's up! You answered {answeredCount} of {passageQs.length} questions.
              <button onClick={() => setShowResults(false)} className="ml-3 underline">Continue anyway</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
