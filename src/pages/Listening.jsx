import { useState } from 'react'
import { listeningData } from '../data/listening'
import { saveProgress } from '../utils/storage'
import AudioPlayer from '../components/AudioPlayer'
import QuestionCard from '../components/QuestionCard'
import ProgressBar from '../components/ProgressBar'
import Timer from '../components/Timer'
import ListeningMap from '../components/ListeningMap'
import ReviewPanel from '../components/ReviewPanel'

const listeningGuide = {
  title: '🎧 Listening Test Guide',
  tips: [
    'The test has 4 sections with 40 questions total, lasting 30 minutes',
    'Sections get progressively harder — Section 1 is the easiest',
    'You hear each recording ONCE only — no repeats',
    'Use the 30-60 second prep time to read questions carefully',
    'Predict the type of answer (name, date, place, number) before listening',
    'Listen for signposting words: "firstly", "however", "the main point is"',
    'Check spelling and grammar when transferring answers — 10 min given',
    'If you miss a question, move on immediately — don\'t lose focus',
    'Common section types: conversation (social), monologue (social), conversation (academic), lecture (academic)',
    'Practice with British English accents — BBC, Channel 4, British podcasts',
  ],
}

export default function Listening() {
  const [showGuide, setShowGuide] = useState(false)
  const sections = listeningData.sections
  const [activeSection, setActiveSection] = useState(null)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [timerRunning, setTimerRunning] = useState(false)
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('')

  const totalSections = sections.length
  const sectionTypes = [...new Set(sections.map(s => s.type))]
  const filteredSections = sections.filter(s => {
    if (search && !s.title.toLowerCase().includes(search.toLowerCase())) return false
    if (filterType && s.type !== filterType) return false
    return true
  })

  function startSection(id) {
    setActiveSection(id)
    setAnswers({})
    setShowResults(false)
    setTimerRunning(true)
  }

  const section = sections.find(s => s.id === activeSection)
  const sectionQs = section?.questions || []

  function handleAnswer(questionId, correct) {
    setAnswers(prev => ({ ...prev, [questionId]: correct }))
    const q = sectionQs.find(x => x.id === questionId)
    saveProgress('listening', questionId, { correct, type: q?.type })
  }

  const answeredCount = Object.keys(answers).length
  const correctCount = Object.values(answers).filter(Boolean).length

  function handleTimeUp() {
    setShowResults(true)
    setTimerRunning(false)
  }

  function handleBack() {
    if (answeredCount > 0 && !window.confirm('You have unanswered questions. Are you sure you want to leave?')) return
    setActiveSection(null)
    setTimerRunning(false)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">🎧 Listening</h1>
        <p className="text-gray-500 dark:text-gray-400">Practice with real IELTS listening sections — each with transcript, questions, and answers.</p>
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
            <h3 className="font-semibold text-sm mb-2">{listeningGuide.title}</h3>
            <ul className="space-y-1.5">
              {listeningGuide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <span className="text-ielts-500 mt-0.5">▸</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Search & filter */}
      {!activeSection && (
        <div className="flex flex-wrap gap-3 mb-6">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search sections..."
            className="input-field flex-1 min-w-[200px]"
          />
          <select
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
            className="input-field w-auto"
          >
            <option value="">All types</option>
            {sectionTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      )}

      {/* Section selector */}
      {!activeSection && (
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {filteredSections.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => startSection(s.id)}
              className="card text-left hover:border-red-400 border-2 border-transparent transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-2xl">{s.type === 'conversation' ? '👥' : s.type === 'lecture' ? '🎓' : '🎙️'}</span>
                <span className="text-xs bg-ielts-100 dark:bg-ielts-900/30 text-ielts-700 dark:text-ielts-300 px-2 py-0.5 rounded">
                  Section {idx + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 capitalize">{s.type} · {s.questions.length} questions</p>
              <div className="text-ielts-600 dark:text-ielts-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Start section →
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Active section */}
      {section && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleBack}
              className="btn-secondary text-sm"
            >
              ← Back to sections
            </button>
            <Timer
              initialMinutes={section.type === 'lecture' ? 7 : 5}
              onTimeUp={handleTimeUp}
              running={timerRunning}
            />
          </div>

          <AudioPlayer
            transcript={section.transcript}
            sectionTitle={section.title}
          />

          <ProgressBar
            current={answeredCount}
            total={sectionQs.length}
            label={`${section.title} — ${answeredCount}/${sectionQs.length} answered`}
          />

          {/* Map for map-labeling sections */}
          {sectionQs.filter(q => q.type === 'map-labeling').length > 0 && (
            <ListeningMap sectionId={section.id} />
          )}

          <div className="space-y-4">
            {sectionQs.map((q, idx) => (
              <QuestionCard
                key={q.id}
                question={q}
                questionNumber={idx + 1}
                onAnswer={(correct) => handleAnswer(q.id, correct)}
                showResult={showResults}
              />
            ))}
          </div>

          {answeredCount === sectionQs.length && sectionQs.length > 0 && (
            <ReviewPanel
              questions={sectionQs}
              answers={answers}
              onRetry={() => startSection(section.id)}
              onBack={() => setActiveSection(null)}
            />
          )}

          {showResults && answeredCount < sectionQs.length && (
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200 text-center">
              ⏰ Time's up! You answered {answeredCount} of {sectionQs.length} questions.
              <button onClick={() => setShowResults(false)} className="ml-3 underline">Continue anyway</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
