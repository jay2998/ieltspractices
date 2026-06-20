import { useState } from 'react'
import { speakingData } from '../data/speaking'
import { saveProgress } from '../utils/storage'
import ProgressBar from '../components/ProgressBar'

const speakingGuide = {
  title: '🎤 Speaking Test Guide',
  tips: [
    '3 parts: Interview (4-5 min), Long Turn (3-4 min), Discussion (4-5 min)',
    'Part 1: answer questions about familiar topics (work, study, home, hobbies)',
    'Part 2: speak for 2 minutes on a given topic — use 1 min to prepare notes',
    'Part 3: discuss abstract ideas related to Part 2 — show analytical thinking',
    'Fluency is critical — avoid long pauses and hesitation fillers ("um", "uh", "like")',
    'Extend every answer: give a reason + example + explanation (the "REE" method)',
    'Use a range of grammar: conditionals, relative clauses, passive voice, perfect tenses',
    'Show vocabulary range with less common words and idiomatic expressions',
    'Pronunciation matters: stress, intonation, and clarity are all assessed',
    'Don\'t memorise answers — examiners detect and penalise this',
  ],
}

export default function Speaking() {
  const [showGuide, setShowGuide] = useState(false)
  const [activeTab, setActiveTab] = useState('part1')
  const [activeTopic, setActiveTopic] = useState(null)
  const [showTips, setShowTips] = useState(true)
  const [completed, setCompleted] = useState(0)

  const dataMap = {
    part1: { label: 'Part 1 · Interview', data: speakingData.part1, icon: '🗣️', color: 'red' },
    part2: { label: 'Part 2 · Long Turn', data: speakingData.part2, icon: '🎭', color: 'amber' },
    part3: { label: 'Part 3 · Discussion', data: speakingData.part3, icon: '💬', color: 'rose' },
  }

  const current = dataMap[activeTab]
  const topics = current?.data || []

  function startTopic(topic) {
    setActiveTopic(topic)
    setShowTips(true)
  }

  function markComplete(id) {
    setCompleted(prev => prev + 1)
    saveProgress('speaking', id, { correct: true })
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">🎤 Speaking</h1>
        <p className="text-gray-500 dark:text-gray-400">Practice all 3 parts with real IELTS topics, model responses, and examiner tips.</p>
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
            <h3 className="font-semibold text-sm mb-2">{speakingGuide.title}</h3>
            <ul className="space-y-1.5">
              {speakingGuide.tips.map((tip, i) => (
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
        {Object.entries(dataMap).map(([key, val]) => (
          <button
            key={key}
            onClick={() => { setActiveTab(key); setActiveTopic(null) }}
            className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
              activeTab === key
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {val.icon} {val.label}
          </button>
        ))}
      </div>

      {completed > 0 && !activeTopic && (
        <div className="card mb-6 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 text-center py-3">
          <p className="text-gray-600 dark:text-gray-400">🗣️ You've practiced <strong>{completed}</strong> speaking topics. Keep going!</p>
        </div>
      )}

      {/* Topic selector grid */}
      {!activeTopic && (
        <div className="grid md:grid-cols-2 gap-4">
          {topics.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => startTopic(t)}
              className="card text-left hover:border-red-400 border-2 border-transparent transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-300 px-2 py-0.5 rounded">
                  Topic {idx + 1}
                </span>
                <span className="text-xs text-gray-400">{t.questions?.length || 1} questions</span>
              </div>
              <h3 className="font-semibold text-base mb-1">{t.topic}</h3>
              {t.cueCard && (
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{t.cueCard?.substring(0, 100)}...</p>
              )}
              {t.questions && (
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{t.questions[0]}</p>
              )}
              <div className="mt-3 text-red-600 dark:text-red-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Practice this topic →
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Active topic */}
      {activeTopic && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setActiveTopic(null)}
              className="btn-secondary text-sm"
            >
              ← Back to topics
            </button>
            <button
              onClick={() => markComplete(activeTopic.id)}
              className="btn-primary text-sm"
            >
              ✓ Mark as practiced
            </button>
          </div>

          {/* Cue card (Part 2) */}
          {activeTopic.cueCard && (
            <div className="card mb-6 border-l-4 border-amber-500">
              <h3 className="font-semibold mb-2 flex items-center gap-2">🎭 Cue Card</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">{activeTopic.cueCard}</p>
              <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-sm text-amber-800 dark:text-amber-200">
                💡 You have 1 minute to prepare and 2 minutes to speak.
              </div>
            </div>
          )}

          {/* Topic header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{current.icon}</span>
            <div>
              <h2 className="text-xl font-bold">{activeTopic.topic}</h2>
              <span className="text-sm text-gray-500">{current.label}</span>
            </div>
          </div>

          {/* Questions and model responses */}
          <div className="space-y-6">
            {(activeTopic.questions || []).map((q, idx) => (
              <div key={idx} className="card">
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-100 mb-2">{q}</p>
                    <details className="group">
                      <summary className="cursor-pointer text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700">
                        🔑 Show model response
                      </summary>
                      <div className="mt-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-sm leading-relaxed whitespace-pre-line">
                        {activeTopic.modelResponses?.[idx] || activeTopic.modelResponse || 'Model response coming soon...'}
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            ))}

            {/* For Part 2 with single response */}
            {!activeTopic.questions && activeTopic.modelResponse && (
              <div className="card">
                <p className="font-medium mb-3 text-gray-800 dark:text-gray-100">Your response should cover all points on the cue card.</p>
                <details className="group">
                  <summary className="cursor-pointer text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700">
                    🔑 Show model response
                  </summary>
                  <div className="mt-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-sm leading-relaxed whitespace-pre-line">
                    {activeTopic.modelResponse}
                  </div>
                </details>
              </div>
            )}
          </div>

          {/* Tips & Vocabulary */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {activeTopic.tips && (
              <div className="card border-l-4 border-red-500">
                <h3 className="font-semibold mb-2 flex items-center gap-2">💡 Speaking Tips</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{activeTopic.tips}</p>
              </div>
            )}

            {activeTopic.usefulVocabulary && (
              <div className="card border-l-4 border-rose-500">
                <h3 className="font-semibold mb-2 flex items-center gap-2">📚 Useful Vocabulary</h3>
                <div className="flex flex-wrap gap-2">
                  {(activeTopic.usefulVocabulary || []).map((word, idx) => (
                    <span key={idx} className="px-3 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3 justify-center">
            <button onClick={() => startTopic(activeTopic)} className="btn-primary">Practice again</button>
            <button onClick={() => setActiveTopic(null)} className="btn-secondary">Next topic</button>
          </div>
        </div>
      )}
    </div>
  )
}
