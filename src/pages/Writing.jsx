import { useState, useEffect } from 'react'
import { writingData } from '../data/writing'
import { saveProgress, getActiveUser } from '../utils/storage'
import Timer from '../components/Timer'
import ProgressBar from '../components/ProgressBar'
import ChartVisual, { parseChartDescription } from '../components/ChartVisual'

const writingGuide = {
  title: '✍️ Writing Test Guide',
  tips: [
    'Task 1 (150 words, 20 min): describe a chart, graph, table, map, or process',
    'Task 2 (250 words, 40 min): write an essay responding to an opinion/discussion/problem prompt',
    'Task 2 is worth 66% of your writing score — allocate more time to it',
    'Always plan for 5 minutes before writing — structure saves time',
    'Task 1 structure: Introduction (paraphrase) → Overview (main trends) → Body (specific data)',
    'Task 2 structure: Introduction (thesis) → Body paragraphs (topic sentence + explain + example) → Conclusion',
    'Use a range of sentence structures: simple, compound, complex',
    'Learn high-level topic vocabulary — avoid repeating simple words',
    'Check word count: well under means incomplete task response',
    'Leave 3-5 minutes to proofread for grammar, spelling, and punctuation errors',
  ],
}

const DRAFT_KEY = () => `ielts_${getActiveUser()}_writing_draft`

function loadDraft() {
  try {
    const saved = localStorage.getItem(DRAFT_KEY())
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

function saveDraft(taskId, answer) {
  localStorage.setItem(DRAFT_KEY(), JSON.stringify({ taskId, answer }))
}

function clearDraft() {
  localStorage.removeItem(DRAFT_KEY())
}

export default function Writing() {
  const [showGuide, setShowGuide] = useState(false)
  const [activeTab, setActiveTab] = useState('task1')
  const [activeTask, setActiveTask] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [showModel, setShowModel] = useState(false)
  const [timerRunning, setTimerRunning] = useState(false)
  const [submittedTasks, setSubmittedTasks] = useState(0)

  const tasks = activeTab === 'task1' ? writingData.task1 : writingData.task2

  useEffect(() => {
    if (activeTask) {
      const draft = loadDraft()
      if (draft && draft.taskId === activeTask.id) {
        setUserAnswer(draft.answer)
      }
    }
  }, [activeTask])

  useEffect(() => {
    if (activeTask && userAnswer) {
      const timer = setTimeout(() => saveDraft(activeTask.id, userAnswer), 500)
      return () => clearTimeout(timer)
    }
  }, [userAnswer, activeTask])

  function startTask(task) {
    setActiveTask(task)
    setUserAnswer('')
    setShowModel(false)
    setTimerRunning(true)
  }

  function submitAnswer() {
    setShowModel(true)
    setTimerRunning(false)
    setSubmittedTasks(prev => prev + 1)
    saveProgress('writing', activeTask.id, { correct: true, wordCount: userAnswer.split(/\s+/).filter(Boolean).length })
    clearDraft()
  }

  const wordCount = userAnswer.split(/\s+/).filter(Boolean).length

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">✍️ Writing</h1>
        <p className="text-gray-500 dark:text-gray-400">Practice Task 1 and Task 2 with real prompts and Band 7+ model answers.</p>
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
            <h3 className="font-semibold text-sm mb-2">{writingGuide.title}</h3>
            <ul className="space-y-1.5">
              {writingGuide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <span className="text-ielts-500 mt-0.5">▸</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tab selector */}
      <div className="flex gap-2 mb-6">
          <button
            onClick={() => { if (activeTask && userAnswer && !window.confirm('Discard your current answer?')) return; setActiveTab('task1'); setActiveTask(null); setShowModel(false); clearDraft() }}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'task1'
                ? 'bg-red-700 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            📊 Task 1 (Academic)
          </button>
          <button
            onClick={() => { if (activeTask && userAnswer && !window.confirm('Discard your current answer?')) return; setActiveTab('task2'); setActiveTask(null); setShowModel(false); clearDraft() }}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
              activeTab === 'task2'
                ? 'bg-red-700 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            📝 Task 2 (Essay)
          </button>
      </div>

      {/* Task selector grid */}
      {!activeTask && (
        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => startTask(t)}
              className="card text-left hover:border-red-400 border-2 border-transparent transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-300 px-2 py-0.5 rounded">
                  {activeTab === 'task1' ? 'Task 1' : 'Task 2'} · {idx + 1}
                </span>
                <span className="text-xs text-gray-400">Band {t.bandScore}</span>
              </div>
              <h3 className="font-semibold text-base mb-1">{t.title || t.prompt?.substring(0, 60)}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{t.prompt?.substring(0, 120)}...</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-medium group-hover:translate-x-1 transition-transform">
                Practice this task →
                <span className="text-xs text-gray-400">({t.structure?.substring(0, 30)}...)</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Active task */}
      {activeTask && (
        <div>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <button
              onClick={() => { if (userAnswer && !showModel && !window.confirm('Discard your current answer?')) return; setActiveTask(null); setShowModel(false); setTimerRunning(false) }}
              className="btn-secondary text-sm"
            >
              ← Back to tasks
            </button>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                Min {activeTab === 'task1' ? '150' : '250'} words
              </span>
              <Timer
                initialMinutes={activeTab === 'task1' ? 20 : 40}
                onTimeUp={() => {}}
                running={timerRunning}
              />
            </div>
          </div>

          {/* Prompt */}
          <div className="card mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-bold text-red-600 dark:text-red-400">
                {activeTab === 'task1' ? 'Task 1' : 'Task 2'} · Band {activeTask.bandScore} target
              </span>
            </div>
            <h2 className="font-bold text-lg mb-3">{activeTask.title}</h2>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-sm leading-relaxed whitespace-pre-line">
              {activeTask.prompt}
            </div>

            {activeTask.imageDescription && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">📊 Visual Data</p>
                {(() => { const p = parseChartDescription(activeTask.imageDescription); return <ChartVisual chartType={p.type} data={p.data} />; })()}
              </div>
            )}
          </div>

          {/* Your answer */}
          <div className="card mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">
                <label htmlFor="writing-answer">Your Answer</label>
              </h3>
              <span className={`text-sm font-medium ${wordCount < (activeTab === 'task1' ? 150 : 250) ? 'text-red-500' : 'text-green-500'}`}>
                {wordCount} words
              </span>
            </div>
            <textarea
              id="writing-answer"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              placeholder="Write your answer here..."
              className="input-field min-h-[200px] resize-y font-mono text-sm leading-relaxed"
              disabled={showModel}
            />
            {!showModel && (
              <button
                onClick={submitAnswer}
                disabled={wordCount < (activeTab === 'task1' ? 150 : 250)}
                className="btn-primary mt-3"
              >
                Submit & Show Model Answer
              </button>
            )}
            {!showModel && wordCount < (activeTab === 'task1' ? 150 : 250) && (
              <p className="text-xs text-red-500 mt-2">
                Write at least {activeTab === 'task1' ? '150' : '250'} words before submitting.
              </p>
            )}
          </div>

          {/* Model answer */}
          {showModel && (
            <div className="space-y-6">
              <div className="card border-l-4 border-red-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    📝 Model Answer (Band {activeTask.bandScore})
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                    {activeTask.modelAnswer?.split(/\s+/).filter(Boolean).length} words
                  </span>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-sm leading-relaxed whitespace-pre-line">
                  {activeTask.modelAnswer}
                </div>
              </div>

              <div className="card border-l-4 border-amber-500">
                <h3 className="font-semibold mb-2 flex items-center gap-2">👨‍🏫 Examiner Notes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{activeTask.examinerNotes}</p>
              </div>

              <div className="card border-l-4 border-green-500">
                <h3 className="font-semibold mb-2 flex items-center gap-2">📚 Key Vocabulary</h3>
                <div className="flex flex-wrap gap-2">
                  {(activeTask.vocabulary || []).map((word, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                      {word}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card border-l-4 border-red-400">
                <h3 className="font-semibold mb-2 flex items-center gap-2">📐 Suggested Structure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{activeTask.structure}</p>
              </div>

              <div className="card bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20">
                <h3 className="font-semibold mb-3">📊 Your Answer vs Model</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{wordCount}</div>
                    <div className="text-xs text-gray-500">Your words</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{activeTask.modelAnswer?.split(/\s+/).filter(Boolean).length}</div>
                    <div className="text-xs text-gray-500">Model words</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3 justify-center">
                  <button onClick={() => startTask(activeTask)} className="btn-primary">Try again</button>
                  <button onClick={() => setActiveTask(null)} className="btn-secondary">Next task</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {submittedTasks > 0 && !activeTask && (
        <div className="mt-6 card bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 text-center py-4">
          <p className="text-gray-600 dark:text-gray-400">🎯 You've completed <strong>{submittedTasks}</strong> writing tasks. Keep practicing!</p>
        </div>
      )}
    </div>
  )
}
