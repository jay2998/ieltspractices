import { useState, useEffect, useRef } from 'react'

export default function Timer({ initialMinutes = 60, onTimeUp, running = false }) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
  const intervalRef = useRef(null)
  const onTimeUpRef = useRef(onTimeUp)
  onTimeUpRef.current = onTimeUp

  useEffect(() => {
    setTimeLeft(initialMinutes * 60)
  }, [initialMinutes])

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current)
            setTimeout(() => onTimeUpRef.current?.(), 0)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [running])

  function reset() {
    clearInterval(intervalRef.current)
    setTimeLeft(initialMinutes * 60)
    onTimeUpRef.current?.()
  }

  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60

  const isLow = timeLeft < 300
  const isCritical = timeLeft < 60

  return (
    <div className={`flex items-center gap-2 font-mono text-lg font-bold ${
      isCritical ? 'text-red-500' : isLow ? 'text-amber-500' : 'text-gray-700 dark:text-gray-200'
    }`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span aria-live="polite" aria-label={`${mins} minutes ${secs} seconds remaining`}>{String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}</span>
      {!running && (
        <button onClick={reset} className="ml-2 text-xs text-ielts-600 hover:text-ielts-800" aria-label="Reset timer">
          Reset
        </button>
      )}
    </div>
  )
}
