import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getStats, getActiveUser } from '../utils/storage'
import { listeningData } from '../data/listening'
import { readingData } from '../data/reading'
import { writingData } from '../data/writing'
import { speakingData } from '../data/speaking'

const skills = [
  {
    key: 'listening',
    title: 'Listening',
    icon: '🎧',
    color: 'from-red-500 to-red-700',
    desc: '4 sections, 40 questions · 30 min',
    path: '/listening',
    tips: [
      'Read questions before the audio starts',
      'Listen for signposting words (firstly, however, in conclusion)',
      'Check spelling carefully in form completion',
      'Don\'t leave blanks — guess if needed',
    ],
  },
  {
    key: 'reading',
    title: 'Reading',
    icon: '📖',
    color: 'from-orange-500 to-orange-700',
    desc: '3 passages, 40 questions · 60 min',
    path: '/reading',
    tips: [
      'Skim the passage first for main ideas',
      'Scan for keywords from the questions',
      'Manage time — spend ~20 min per passage',
      'True/False/Not Given: don\'t use outside knowledge',
    ],
  },
  {
    key: 'writing',
    title: 'Writing',
    icon: '✍️',
    color: 'from-rose-800 to-rose-950',
    desc: 'Task 1 + Task 2 · 60 min',
    path: '/writing',
    tips: [
      'Task 2 is worth 2/3 of your score — prioritise it',
      'Plan for 5 min before writing',
      'Use a clear structure: introduction → body → conclusion',
      'Learn high-level topic vocabulary',
    ],
  },
  {
    key: 'speaking',
    title: 'Speaking',
    icon: '🎤',
    color: 'from-pink-500 to-pink-700',
    desc: '3 parts · 11-14 min',
    path: '/speaking',
    tips: [
      'Speak fluently — hesitation reduces your score',
      'Extend your answers with examples and explanations',
      'Use a range of grammar structures',
      'Don\'t memorise answers — be natural',
    ],
  },
]

export default function Home() {
  const [stats, setStats] = useState({})
  const [greeting, setGreeting] = useState('')
  const totals = {
    listening: listeningData.sections.reduce((s, sec) => s + sec.questions.length, 0),
    reading: readingData.passages.reduce((s, p) => s + p.questions.length, 0),
    writing: writingData.task1.length + writingData.task2.length,
    speaking: speakingData.part1.length + speakingData.part2.length + speakingData.part3.length,
  }

  useEffect(() => {
    setStats(getStats(totals))
    const h = new Date().getHours()
    if (h < 12) setGreeting('Good morning')
    else if (h < 18) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])

  const totalCorrect = Object.values(stats).reduce((sum, s) => sum + s.correct, 0)
  const totalAnswered = Object.values(stats).reduce((sum, s) => sum + s.answered, 0)
  const totalAvailable = Object.values(totals).reduce((sum, t) => sum + t, 0)
  const overallPct = totalAvailable > 0 ? Math.round((totalAnswered / totalAvailable) * 100) : 0

  return (
    <div>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          {greeting}, {getActiveUser()}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Your personal IELTS trainer. Practice all 4 skills with Band 7+ content.
        </p>
      </div>

      {/* Overall progress */}
      {totalAnswered > 0 && (
        <div className="card mb-8 bg-gradient-to-r from-ielts-600 to-ielts-800 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">📈 Overall Progress</h2>
            <span className="text-3xl font-bold">{overallPct}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 mb-4">
            <div
              className="bg-white h-3 rounded-full transition-all"
              role="progressbar"
              aria-valuenow={totalAnswered}
              aria-valuemin={0}
              aria-valuemax={totalAvailable}
              aria-valuetext={`${totalAnswered} of ${totalAvailable} questions completed`}
              style={{ width: `${overallPct}%` }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {Object.entries(stats).map(([key, val]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold">{val.answered}</div>
                <div className="text-white/70 capitalize">{key}</div>
                <div className="text-white/80 text-xs">{val.answered}/{val.total} · {val.correct} correct</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Goal banner */}
      {totalAnswered === 0 && (
        <div className="card mb-8 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
          <h2 className="text-lg font-semibold mb-2">🎯 Target: Band 7+</h2>
          <p className="text-white/90 text-sm mb-4">
            Start practicing now! We have {totalAvailable} questions across all 4 skills to help you achieve your target score.
          </p>
          <div className="flex gap-2">
            {skills.map(s => (
              <Link key={s.key} to={s.path} className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-colors">
                {s.icon} {s.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Skill cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {skills.map(skill => {
          const s = stats[skill.key]
          return (
            <Link
              key={skill.key}
              to={skill.path}
              className="card hover:shadow-xl transition-all group overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold mt-2">{skill.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{skill.desc}</p>
                </div>
                <div className="text-right">
                  {s && (
                    <div className="text-2xl font-bold text-ielts-600">{s.percentage}%</div>
                  )}
                  {s && <div className="text-xs text-gray-400">{s.correct} correct of {s.answered}</div>}
                </div>
              </div>

              {/* Progress mini-bar */}
              {s && s.total > 0 && (
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4">
                  <div className="h-1.5 rounded-full bg-ielts-500 transition-all" style={{ width: `${s.percentage}%` }} />
                </div>
              )}

              {/* Tips */}
              <div className="space-y-1">
                {skill.tips.slice(0, 2).map((tip, i) => (
                  <div key={i} className="text-xs text-gray-400 dark:text-gray-500 flex items-start gap-1.5">
                    <span>•</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-ielts-600 dark:text-ielts-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Start practicing →
              </div>
            </Link>
          )
        })}
      </div>

      {/* Quick stats and tips */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-semibold mb-3">📋 Test Format</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
              <span>Listening</span>
              <span className="text-gray-500">30 min · 4 sections</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
              <span>Reading</span>
              <span className="text-gray-500">60 min · 3 passages</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
              <span>Writing</span>
              <span className="text-gray-500">60 min · 2 tasks</span>
            </div>
            <div className="flex justify-between">
              <span>Speaking</span>
              <span className="text-gray-500">11-14 min · 3 parts</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-3">💡 Band 7+ Strategies</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-ielts-500 mt-0.5">→</span>
              Practice with a timer to build speed
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ielts-500 mt-0.5">→</span>
              Review mistakes and understand WHY
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ielts-500 mt-0.5">→</span>
              Build topic-specific vocabulary daily
            </li>
            <li className="flex items-start gap-2">
              <span className="text-ielts-500 mt-0.5">→</span>
              Listen to academic English (TED, BBC, lectures)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
