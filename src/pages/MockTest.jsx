import { useState } from 'react'
import { listeningData } from '../data/listening'
import { readingData } from '../data/reading'
import { writingData } from '../data/writing'
import { saveProgress } from '../utils/storage'
import QuestionCard from '../components/QuestionCard'
import ProgressBar from '../components/ProgressBar'
import Timer from '../components/Timer'
import AudioPlayer from '../components/AudioPlayer'
import ReviewPanel from '../components/ReviewPanel'
import ListeningMap from '../components/ListeningMap'
import ReadingDiagram from '../components/ReadingDiagram'

const phases = ['listening', 'reading', 'writing']

const phaseConfig = {
  listening: { label: 'Listening', icon: '🎧', time: 30 },
  reading: { label: 'Reading', icon: '📖', time: 60 },
  writing: { label: 'Writing', icon: '✍️', time: 60 },
}

export default function MockTest() {
  const [phase, setPhase] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [timerRunning, setTimerRunning] = useState(false)
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [writingAnswer, setWritingAnswer] = useState('')

  const config = phaseConfig[phases[phase]]

  const sections = listeningData.sections
  const passages = readingData.passages

  const listeningQuestions = sections.flatMap(s => s.questions)
  const readingQuestions = passages.flatMap(p => p.questions)

  const questions = phase === 0 ? listeningQuestions : phase === 1 ? readingQuestions : []

  function handleAnswer(questionId, correct) {
    setAnswers(prev => ({ ...prev, [questionId]: correct }))
    const q = questions.find(x => x.id === questionId)
    saveProgress(phases[phase], questionId, { correct, type: q?.type })
  }

  const answeredCount = questions.filter(q => answers[q.id] !== undefined).length

  function handleTimeUp() {
    setShowResults(true)
    setTimerRunning(false)
  }

  function nextPhase() {
    if (phase < phases.length - 1) {
      setPhase(p => p + 1)
      setAnswers({})
      setShowResults(false)
      setTimerRunning(true)
      setWritingAnswer('')
    } else {
      setFinished(true)
    }
  }

  function handleFinishWriting() {
    setShowResults(true)
    setTimerRunning(false)
  }

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="text-6xl mb-6">📝</div>
        <h1 className="text-3xl font-bold mb-3">Full Mock Test</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Simulate the real IELTS exam: Listening (30 min) → Reading (60 min) → Writing (60 min).
        </p>
        <div className="space-y-3 mb-8 text-left">
          {phases.map((p, i) => (
            <div key={p} className="card flex items-center gap-4">
              <span className="text-2xl">{phaseConfig[p].icon}</span>
              <div>
                <div className="font-semibold capitalize">{p}</div>
                <div className="text-sm text-gray-500">{phaseConfig[p].time} minutes</div>
              </div>
              <span className="ml-auto text-sm text-gray-400">
                {p === 'listening' ? `${listeningQuestions.length} questions` : p === 'reading' ? `${readingQuestions.length} questions` : '2 tasks'}
              </span>
            </div>
          ))}
        </div>
        <button onClick={() => { setStarted(true); setTimerRunning(true) }} className="btn-primary text-lg px-10">
          Start Mock Test →
        </button>
      </div>
    )
  }

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-3">Mock Test Complete!</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Great effort! Review your answers in each skill section.
        </p>
        <button onClick={() => window.location.reload()} className="btn-primary">
          Take another test
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">{config.icon} Mock Test — {config.label}</h1>
            <p className="text-sm text-gray-500">
              Phase {phase + 1} of {phases.length}
              {phase === 0 && ` · ${listeningQuestions.length} questions`}
              {phase === 1 && ` · ${readingQuestions.length} questions`}
            </p>
          </div>
          <Timer
            initialMinutes={config.time}
            onTimeUp={handleTimeUp}
            running={timerRunning}
          />
        </div>

        <div className="flex gap-1 mb-4">
          {phases.map((p, i) => (
            <div
              key={p}
              className={`flex-1 h-1.5 rounded-full ${
                i < phase ? 'bg-green-500' : i === phase ? 'bg-ielts-500' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>

        {phase < 2 && (
          <ProgressBar
            current={answeredCount}
            total={questions.length}
            label={`${answeredCount}/${questions.length} answered`}
          />
        )}
      </div>

      {/* Listening phase */}
      {phase === 0 && (
        <div>
          {sections.map((section, sIdx) => (
            <div key={section.id} className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-bold text-ielts-600 bg-ielts-50 dark:bg-ielts-900/30 px-2 py-0.5 rounded">
                  Section {sIdx + 1}
                </span>
                <span className="text-sm font-semibold">{section.title}</span>
                <span className="text-xs text-gray-400 capitalize">({section.type})</span>
              </div>

              <AudioPlayer
                transcript={section.transcript}
                sectionTitle={section.title}
              />

              {section.questions.filter(q => q.type === 'map-labeling').length > 0 && (
                <ListeningMap sectionId={section.id} />
              )}

              <div className="space-y-4">
                {section.questions.map((q, idx) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    questionNumber={listeningQuestions.indexOf(q) + 1}
                    onAnswer={(correct) => handleAnswer(q.id, correct)}
                    showResult={showResults}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reading phase */}
      {phase === 1 && (
        <div>
          {passages.map((passage, pIdx) => (
            <div key={passage.id} className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-bold text-red-600 bg-red-50 dark:bg-red-900/30 px-2 py-0.5 rounded">
                  Passage {pIdx + 1}
                </span>
                <span className="text-sm font-semibold">{passage.title}</span>
                <span className="text-xs text-gray-400">({passage.questions.length} questions)</span>
              </div>

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

              {passage.questions.filter(q => q.type === 'diagram-labeling').length > 0 && (
                <ReadingDiagram passageId={passage.id} question={passage.questions.find(q => q.type === 'diagram-labeling')} />
              )}

              <div className="space-y-4">
                {passage.questions.map((q, idx) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    questionNumber={readingQuestions.indexOf(q) + 1}
                    onAnswer={(correct) => handleAnswer(q.id, correct)}
                    showResult={showResults}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Writing phase */}
      {phase === 2 && (
        <div>
          <div className="card mb-6">
            <h3 className="font-semibold mb-2">{writingData.task1[0].title || 'Task 1'}</h3>
            <p className="text-sm text-gray-500 mb-2">Task 1 · 20 min recommended (150 words)</p>
            <p className="text-sm mb-4 whitespace-pre-line">{writingData.task1[0].prompt}</p>
            {writingData.task1[0].imageDescription && (
              <p className="text-xs text-gray-400 italic mb-4">📊 {writingData.task1[0].imageDescription}</p>
            )}
            <hr className="my-4" />
            <h3 className="font-semibold mb-2">{writingData.task2[0].title || 'Task 2'}</h3>
            <p className="text-sm text-gray-500 mb-2">Task 2 · 40 min recommended (250 words)</p>
            <p className="text-sm mb-4 whitespace-pre-line">{writingData.task2[0].prompt}</p>
            <textarea
              value={writingAnswer}
              onChange={e => setWritingAnswer(e.target.value)}
              placeholder="Write your essays here...\n\nTask 1: Describe the visual information\nTask 2: Write your essay response"
              className="input-field min-h-[400px] font-mono text-sm"
            />
            <div className="mt-3 text-sm text-gray-500">
              Words: {writingAnswer.split(/\s+/).filter(Boolean).length}
            </div>
          </div>
        </div>
      )}

      {/* Time's up notice */}
      {showResults && phase < 2 && answeredCount < questions.length && (
        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200 text-center">
          ⏰ Time's up! You answered {answeredCount} of {questions.length} questions.
          <button onClick={() => setShowResults(false)} className="ml-3 underline">Continue anyway</button>
        </div>
      )}

      {/* Phase transition buttons */}
      {phase < 2 && showResults && (
        <div className="mt-6 text-center">
          <button onClick={nextPhase} className="btn-primary text-lg">
            {phase < phases.length - 1 ? `Next: ${phaseConfig[phases[phase + 1]].label} →` : 'Finish Test'}
          </button>
        </div>
      )}

      {phase < 2 && answeredCount === questions.length && !showResults && (
        <div className="mt-6 text-center">
          <button onClick={() => { setShowResults(true); setTimerRunning(false) }} className="btn-primary text-lg">
            {phase < phases.length - 1 ? `Review & Continue →` : 'Review & Finish'}
          </button>
        </div>
      )}

      {/* Writing submit */}
      {phase === 2 && !showResults && (
        <div className="mt-6 text-center">
          <button onClick={handleFinishWriting} className="btn-primary text-lg">
            Submit Writing & Finish Test
          </button>
        </div>
      )}

      {phase === 2 && showResults && (
        <div className="mt-6 text-center">
          <button onClick={nextPhase} className="btn-primary text-lg">
            Finish Test
          </button>
        </div>
      )}
    </div>
  )
}
