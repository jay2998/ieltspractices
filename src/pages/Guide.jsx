import { useState } from 'react'

const sections = [
  {
    id: 'overview',
    icon: '🎯',
    title: 'IELTS Overview',
    color: 'ielts',
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">IELTS (International English Language Testing System) is the world's most popular English proficiency test for higher education and global migration. It assesses your ability to listen, read, write, and speak in English.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'Test Types', value: 'Academic & General Training', icon: '📋' },
            { label: 'Total Duration', value: '2 hrs 45 min', icon: '⏱️' },
            { label: 'Band Range', value: '0 (lowest) to 9 (highest)', icon: '📊' },
            { label: 'Target Band', value: '7.0+ for top universities', icon: '🎯' },
          ].map((item, i) => (
            <div key={i} className="p-3 bg-gradient-to-br from-ielts-50 to-red-50 dark:from-ielts-900/20 dark:to-red-900/20 rounded-lg text-center">
              <div className="text-xl mb-1">{item.icon}</div>
              <div className="font-bold text-sm text-ielts-700 dark:text-ielts-300">{item.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'bands',
    icon: '📊',
    title: 'Band Score Descriptors',
    color: 'ielts',
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 dark:text-gray-400">Understanding what examiners look for at each band level helps you target your preparation.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-ielts-100 dark:bg-ielts-900/30">
                <th className="p-2.5 border border-gray-300 dark:border-gray-600 text-left font-semibold">Band</th>
                <th className="p-2.5 border border-gray-300 dark:border-gray-600 text-left font-semibold">Label</th>
                <th className="p-2.5 border border-gray-300 dark:border-gray-600 text-left font-semibold">What It Means</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['9', 'Expert User', 'Full operational command — accurate, fluent, with complete understanding.'],
                ['8', 'Very Good User', 'Fully operational with only occasional inaccuracies. Handles complex argumentation well.'],
                ['7', 'Good User', 'Operational command with occasional inaccuracies. Handles complex language well and understands detailed reasoning.'],
                ['6', 'Competent User', 'Effective command despite some inaccuracies. Can use fairly complex language in familiar situations.'],
                ['5', 'Modest User', 'Partial command — likely to make many mistakes. Can handle basic communication in own field.'],
              ].map(([band, label, desc], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700/50'}>
                  <td className={`p-2.5 border border-gray-300 dark:border-gray-600 font-bold ${band === '7' ? 'text-ielts-600' : ''}`}>{band}</td>
                  <td className="p-2.5 border border-gray-300 dark:border-gray-600 font-medium">{label}</td>
                  <td className="p-2.5 border border-gray-300 dark:border-gray-600 text-xs text-gray-600 dark:text-gray-400">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-200">🎯 Your Target: Band 7+</p>
          <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">To achieve Band 7, you need to demonstrate a good operational command of English with only occasional inaccuracies. Focus on fluency, lexical resource, grammatical range, and pronunciation (for speaking).</p>
        </div>
      </div>
    )
  },
  {
    id: 'strategies',
    icon: '💡',
    title: 'Preparation Strategies by Skill',
    color: 'red',
    content: (
      <div className="space-y-6">
        <StrategyCard
          icon="🎧"
          title="Listening"
          color="red"
          tips={[
            'Read questions BEFORE the audio starts — use the prep time wisely',
            'Listen for signposting words: "firstly", "however", "in conclusion", "another point"',
            'Check spelling carefully — incorrect spelling = lost marks',
            'Pay attention to plural vs singular forms (e.g., "book" vs "books")',
            'Write answers directly on the question paper, then transfer neatly',
            'Don\'t leave blanks — an educated guess is better than nothing',
            'Practice with British accents (BBC News, BBC podcasts, British documentaries)',
            'Focus on specific details: dates, times, names, prices, addresses',
          ]}
        />
        <StrategyCard
          icon="📖"
          title="Reading"
          color="orange"
          tips={[
            'Spend ~20 minutes per passage — time management is critical',
            'Skim the passage FIRST for main ideas (headings, topic sentences)',
            'Scan for keywords from the questions — don\'t read every word',
            'For True/False/Not Given: use ONLY the passage, not outside knowledge',
            'Matching headings: read headings first, then match to paragraphs',
            'Summary completion: check word limits carefully',
            'Build reading speed — practice with academic journals and magazines',
            'Learn to identify paragraph structure: topic sentence → supporting details → conclusion',
          ]}
        />
        <StrategyCard
          icon="✍️"
          title="Writing"
          color="rose"
          tips={[
            'Task 2 is worth 66% of your writing score — prioritise it',
            'Spend 40 min on Task 2, 20 min on Task 1',
            'Plan for 5 minutes before writing — structure saves time',
            'Use a clear structure: Introduction → Overview (Task 1) / Thesis (Task 2) → Body → Conclusion',
            'Learn high-level topic vocabulary (environment, technology, education, health)',
            'Vary your sentence structures: simple, compound, complex',
            'Task 1: identify the main trend FIRST, then support with specific data',
            'Task 2: fully address ALL parts of the question prompt',
            'Leave 3-5 minutes to check for errors at the end',
          ]}
        />
        <StrategyCard
          icon="🎤"
          title="Speaking"
          color="pink"
          tips={[
            'Speak FLUENTLY — hesitation and long pauses reduce your score',
            'Extend your answers with examples, reasons, and explanations',
            'Use a range of grammar: conditionals, relative clauses, passive voice',
            'Don\'t memorise answers — examiners are trained to detect this',
            'Part 2: use the 1-minute preparation to jot down key points',
            'Show enthusiasm through intonation and varied vocabulary',
            'If you don\'t understand a question, ask politely for clarification',
            'Record yourself and listen back — identify fillers like "um", "like", "you know"',
          ]}
        />
      </div>
    )
  },
  {
    id: 'planner',
    icon: '📅',
    title: '4-Week Study Planner',
    color: 'ielts',
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">A structured study plan is essential for consistent progress. Here's a recommended weekly schedule if you have 10-12 hours per week to prepare.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-ielts-100 dark:bg-ielts-900/30">
                <th className="p-2.5 border border-gray-300 dark:border-gray-600 text-left font-semibold">Week</th>
                <th className="p-2.5 border border-gray-300 dark:border-gray-600 text-left font-semibold">Focus</th>
                <th className="p-2.5 border border-gray-300 dark:border-gray-600 text-left font-semibold">Activities</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Week 1', 'Diagnosis & Foundations', 'Take a full diagnostic test. Identify weak areas. Learn test format. Begin vocabulary journal. Practice Listening Section 1 & Reading Passage 1.'],
                ['Week 2', 'Skill Building', 'Focus on weak skills. Practice Listening Sections 2-3. Work on Reading Passage 2 & True/False/NG. Start Writing Task 1 (charts). Speak Part 1 questions daily.'],
                ['Week 3', 'Advanced Practice', 'Full Listening + Reading tests under timed conditions. Writing Task 2 essays (2-3 per week). Speaking Parts 1-3 practice with timer. Review mistakes thoroughly.'],
                ['Week 4', 'Mock Tests & Refinement', 'Full mock tests (all 4 skills) under exam conditions. Time management refinement. Review vocabulary notebook. Focus on weak question types. Rest the day before the exam.'],
              ].map(([week, focus, activities], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700/50'}>
                  <td className="p-2.5 border border-gray-300 dark:border-gray-600 font-bold text-ielts-600">{week}</td>
                  <td className="p-2.5 border border-gray-300 dark:border-gray-600 font-medium">{focus}</td>
                  <td className="p-2.5 border border-gray-300 dark:border-gray-600 text-xs text-gray-600 dark:text-gray-400">{activities}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">⚠️ Common Time Management Mistakes</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Spending too long on one passage. Not leaving time to transfer answers. Writing without planning first. Overthinking Part 1 answers.</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-100 mb-1">✅ Effective Study Habits</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Study at the same time each day. Review mistakes immediately after practice. Take short breaks every 45 minutes. Use active recall, not passive reading.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'vocabulary',
    icon: '📚',
    title: 'Vocabulary Building for Band 7+',
    color: 'green',
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">A wide vocabulary is essential for achieving Band 7+. IELTS examiners specifically look for "less common vocabulary" and "precision" in your word choices.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { topic: 'Environment', words: ['sustainable', 'carbon footprint', 'biodiversity', 'ecosystem', 'renewable', 'conservation', 'emissions', 'deforestation'] },
            { topic: 'Technology', words: ['innovation', 'disruption', 'automation', 'digital literacy', 'algorithm', 'infrastructure', 'cybersecurity', 'artificial intelligence'] },
            { topic: 'Education', words: ['curriculum', 'pedagogy', 'vocational', 'holistic', 'literacy', 'critical thinking', 'higher education', 'lifelong learning'] },
            { topic: 'Health', words: ['wellbeing', 'nutrition', 'preventive', 'therapeutic', 'diagnosis', 'epidemiology', 'mental health', 'lifestyle diseases'] },
            { topic: 'Society', words: ['demographics', 'inequality', 'integration', 'multicultural', 'social mobility', 'infrastructure', 'urbanisation', 'cohesion'] },
            { topic: 'Economy', words: ['globalisation', 'inflation', 'productivity', 'investment', 'entrepreneurship', 'recession', 'trade deficit', 'gross domestic product'] },
          ].map((group, i) => (
            <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm font-bold text-ielts-600 dark:text-ielts-400 mb-2">{group.topic}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.words.map((w, j) => (
                  <span key={j} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">{w}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-gradient-to-r from-ielts-50 to-red-50 dark:from-ielts-900/20 dark:to-red-900/20 rounded-lg border border-ielts-200 dark:border-ielts-800">
          <p className="text-sm font-medium text-ielts-800 dark:text-ielts-200">💡 Vocabulary Learning Tips</p>
          <ul className="mt-2 space-y-1 text-xs text-gray-600 dark:text-gray-400">
            <li>• Learn words in CONTEXT, not isolation — note the sentence when you find a new word</li>
            <li>• Keep a vocabulary journal organised by topic</li>
            <li>• Review new words using spaced repetition (apps like Anki are excellent)</li>
            <li>• Practice using new words in your speaking and writing immediately</li>
            <li>• Focus on COLLOCATIONS (natural word pairs) — e.g., "make a decision" not "do a decision"</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'mistakes',
    icon: '⚠️',
    title: 'Common Mistakes & How to Avoid Them',
    color: 'amber',
    content: (
      <div className="space-y-3">
        <p className="text-gray-600 dark:text-gray-400">Even high-achieving candidates make avoidable mistakes. Here are the most common ones and how to fix them.</p>
        <div className="space-y-2">
          {[
            { skill: 'All Skills', mistake: 'Not reading/following instructions carefully', fix: 'Underline key words in instructions. Check word limits. Note answer format requirements.' },
            { skill: 'Listening', mistake: 'Getting stuck on a missed answer', fix: 'Move on immediately. You can\'t rewind. Focus on the next question.' },
            { skill: 'Listening', mistake: 'Poor spelling and grammar in answers', fix: 'Practice writing answers during listening. Check plural endings. Learn common IELTS spellings.' },
            { skill: 'Reading', mistake: 'Spending too long on difficult questions', fix: 'Mark difficult questions, skip them, and return if time permits.' },
            { skill: 'Reading', mistake: 'Using outside knowledge for True/False/NG', fix: 'Base your answer ONLY on the passage text, not what you know to be true.' },
            { skill: 'Writing', mistake: 'Not writing enough words', fix: 'Task 1: minimum 150 words. Task 2: minimum 250 words. Count as you write.' },
            { skill: 'Writing', mistake: 'Memorised essays or phrases', fix: 'Examiners penalise memorised content. Learn FRAMEWORKS, not scripts.' },
            { skill: 'Speaking', mistake: 'Giving short, undeveloped answers', fix: 'Use the "PPE" method: Point → Point + Example → Point + Explanation' },
            { skill: 'Speaking', mistake: 'Speaking too quietly or too fast', fix: 'Practice at a moderate pace. Record yourself and adjust volume/clarity.' },
          ].map((item, i) => (
            <div key={i} className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-ielts-100 dark:bg-ielts-900/30 text-ielts-700 dark:text-ielts-300">{item.skill}</span>
              </div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">❌ {item.mistake}</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">✅ {item.fix}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'testday',
    icon: '🏆',
    title: 'Test Day Tips',
    color: 'ielts',
    content: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">Being well-prepared on test day is as important as your content knowledge. Follow these guidelines to perform at your best.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm font-bold mb-2 flex items-center gap-2">🌙 The Night Before</p>
            <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <li>• Confirm test location, time, and required documents</li>
              <li>• Prepare your ID (passport/national ID card)</li>
              <li>• Pack what you need: water, snacks, tissues, medication</li>
              <li>• Do NOT study late — rest is more important</li>
              <li>• Set multiple alarms</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm font-bold mb-2 flex items-center gap-2">🌅 Test Day Morning</p>
            <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <li>• Eat a proper breakfast (protein + complex carbs)</li>
              <li>• Arrive at least 30 minutes early</li>
              <li>• Use the bathroom BEFORE the test starts</li>
              <li>• Wear comfortable, layered clothing</li>
              <li>• Stay hydrated but avoid excess caffeine</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm font-bold mb-2 flex items-center gap-2">📝 During the Test</p>
            <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <li>• Listen to ALL instructions carefully</li>
              <li>• Manage your time per section/passage</li>
              <li>• Don't panic if you find a question difficult — move on</li>
              <li>• Write clearly and legibly</li>
              <li>• For computer-based: check your typing position</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-sm font-bold mb-2 flex items-center gap-2">🧠 Mental Strategies</p>
            <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
              <li>• Take deep breaths if you feel anxious</li>
              <li>• Positive visualisation: imagine succeeding</li>
              <li>• Focus on what you CAN do, not what you can't</li>
              <li>• Remember: one difficult section doesn't ruin the whole test</li>
              <li>• Your preparation has prepared you for this</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
]

function StrategyCard({ icon, title, color, tips }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <h4 className="font-bold text-gray-800 dark:text-gray-100">{title}</h4>
      </div>
      <ul className="space-y-1.5">
        {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-ielts-500 mt-0.5 flex-shrink-0">▸</span>
              <span>{tip}</span>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default function Guide() {
  const [openSection, setOpenSection] = useState('overview')

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">🎯 IELTS Guide</h1>
        <p className="text-gray-500 dark:text-gray-400">Everything you need to know about the IELTS exam — band scores, strategies, study plans, and expert tips.</p>
      </div>

      <div className="space-y-3">
        {sections.map(section => {
          const isOpen = openSection === section.id
          return (
            <div key={section.id} className="card overflow-hidden">
              <button
                onClick={() => setOpenSection(isOpen ? null : section.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{section.icon}</span>
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">{section.title}</h2>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {section.content}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
