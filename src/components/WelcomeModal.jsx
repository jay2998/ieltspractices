import { useState } from 'react'
import { getUsers, addUser, setActiveUser } from '../utils/storage'

export default function WelcomeModal() {
  const [name, setName] = useState('')
  const [targetBand, setTargetBand] = useState('7')
  const [show, setShow] = useState(() => {
    const users = getUsers()
    return users.length === 0
  })
  const [error, setError] = useState('')
  const [step, setStep] = useState(0)

  function handleSubmit() {
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Please enter a name')
      return
    }
    if (step === 0) {
      setStep(1)
      return
    }
    addUser(trimmed)
    setActiveUser(trimmed)
    setShow(false)
    window.location.reload()
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 w-full max-w-sm shadow-2xl scale-in text-center">
        {step === 0 ? (
          <>
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Welcome to IELTS Trainer!</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Enter your name to get started. Your progress will be saved just for you.
            </p>
            <form onSubmit={e => { e.preventDefault(); handleSubmit() }} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={e => { setName(e.target.value); setError('') }}
                placeholder="Your name"
                className="input-field text-center text-lg"
                autoFocus
                maxLength={30}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={!name.trim()}
                className="btn-primary w-full text-lg py-3"
              >
                Next →
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="text-5xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">What's your target Band?</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              We'll tailor your practice recommendations accordingly.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {['6', '6.5', '7', '7.5', '8', '8.5'].map(band => (
                <button
                  key={band}
                  onClick={() => setTargetBand(band)}
                  className={`py-3 rounded-xl font-bold text-lg transition-colors ${
                    targetBand === band
                      ? 'bg-ielts-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {band}
                </button>
              ))}
            </div>
            <button
              onClick={() => { addUser(name.trim()); setActiveUser(name.trim()); setShow(false); window.location.reload() }}
              className="btn-primary w-full text-lg py-3"
            >
              Start practicing →
            </button>
          </>
        )}
      </div>
    </div>
  )
}
