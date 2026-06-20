import { useState } from 'react'
import { getUsers, addUser, setActiveUser } from '../utils/storage'

export default function WelcomeModal() {
  const [name, setName] = useState('')
  const [show, setShow] = useState(() => {
    const users = getUsers()
    return users.length === 0
  })
  const [error, setError] = useState('')

  function handleSubmit() {
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Please enter a name')
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
            Start practicing →
          </button>
        </form>
      </div>
    </div>
  )
}
