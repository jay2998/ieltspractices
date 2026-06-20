import { useState, useCallback } from 'react'
import { listeningData } from '../data/listening'
import { readingData } from '../data/reading'
import { writingData } from '../data/writing'
import { saveProgress } from '../utils/storage'
import QuestionCard from '../components/QuestionCard'
import ProgressBar from '../components/ProgressBar'
import Timer from '../components/Timer'
import ReviewPanel from '../components/ReviewPanel'

const phases = ['listening', 'reading', 'writing']

const phaseConfig = {
  listening: { label: 'Listening', icon: '🎧', time: 30, sections: [listeningData.sections[0], listeningData.sections[1], listeningData.sections[2], listeningData.sections[3]] },
  reading: { label: 'Reading', icon: '📖', time: 60, passages: [readingData.passages[0], readingData.passages[1], readingData.passages[2]] },
  writing: { label: 'Writing', icon: '✍️', time: 60, task1: writingData.task1[0], task2: writingData.task2[0] },
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

  const questions = config.sections
    ? config.sections.flatMap(s => s.questions)
    : config.passages
      ? config.passages.flatMap(p => p.questions)
      : []

  function handleAnswer(questionId, correct) {
    setAnswers(prev => ({ ...prev, [questionId]: correct }))
    saveProgress(phases[phase], questionId, { correct })
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
    } else {
      setFinished(true)
    }
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
              <span className="ml-auto text-sm text-gray-400">{i === 0 ? '' : 'after previous'}</span>
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

        <ProgressBar
          current={answeredCount}
          total={questions.length}
          label={`${answeredCount}/${questions.length} answered`}
        />
      </div>

      {/* Writing phase */}
      {phases[phase] === 'writing' && (
        <div className="card mb-6">
          <h3 className="font-semibold mb-2">{config.task1.title || 'Task 1'}</h3>
          <p className="text-sm mb-4 whitespace-pre-line">{config.task1.prompt}</p>
          <hr className="my-4" />
          <h3 className="font-semibold mb-2">{config.task2.title || 'Task 2'}</h3>
          <p className="text-sm mb-4 whitespace-pre-line">{config.task2.prompt}</p>
          <textarea
            value={writingAnswer}
            onChange={e => setWritingAnswer(e.target.value)}
            placeholder="Write your essays here..."
            className="input-field min-h-[300px] font-mono text-sm"
          />
          <div className="mt-3 text-sm text-gray-500">
            Words: {writingAnswer.split(/\s+/).filter(Boolean).length}
          </div>
        </div>
      )}

      {/* Questions */}
      {phases[phase] !== 'writing' && (
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              questionNumber={idx + 1}
              onAnswer={(correct) => handleAnswer(q.id, correct)}
              showResult={showResults}
            />
          ))}
        </div>
      )}

      {showResults && (
        <div className="mt-6 text-center">
          <button onClick={nextPhase} className="btn-primary text-lg">
            {phase < phases.length - 1 ? `Next: ${phaseConfig[phases[phase + 1]].label} →` : 'Finish Test'}
          </button>
        </div>
      )}

      {answeredCount === questions.length && !showResults && (
        <div className="mt-6 text-center">
          <button onClick={() => { setShowResults(true); setTimerRunning(false) }} className="btn-primary text-lg">
            {phase < phases.length - 1 ? `Review & Continue →` : 'Review & Finish'}
          </button>
        </div>
      )}
    </div>
  )
}
