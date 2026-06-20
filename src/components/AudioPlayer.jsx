import { useState, useRef, useCallback } from 'react'

export default function AudioPlayer({ transcript, sectionTitle }) {
  const [playing, setPlaying] = useState(false)
  const [rate, setRate] = useState(0.8)
  const [voice, setVoice] = useState(null)
  const utteranceRef = useRef(null)

  const speak = useCallback(() => {
    if (!transcript) return
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance(transcript)
      u.rate = rate
      u.pitch = 1
      u.lang = 'en-GB'
      const voices = window.speechSynthesis.getVoices()
      const british = voices.find(v => v.lang.startsWith('en-GB'))
      if (british) u.voice = british
      u.onend = () => setPlaying(false)
      utteranceRef.current = u
      window.speechSynthesis.speak(u)
      setPlaying(true)
    }
  }, [transcript, rate])

  const stop = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      setPlaying(false)
    }
  }, [])

  const toggle = () => {
    if (playing) {
      stop()
    } else {
      speak()
    }
  }

  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          🎧 {sectionTitle || 'Audio'}
        </h3>
        <div className="flex items-center gap-3">
          <label className="text-sm text-gray-500 flex items-center gap-1">
            Speed:
            <select
              value={rate}
              onChange={e => setRate(parseFloat(e.target.value))}
              className="text-sm border rounded px-1 py-0.5 bg-transparent"
            >
              <option value={0.6}>0.6x</option>
              <option value={0.8}>0.8x</option>
              <option value={1}>1x</option>
              <option value={1.2}>1.2x</option>
            </select>
          </label>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={toggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl transition-colors ${
            playing ? 'bg-red-500 hover:bg-red-600' : 'bg-ielts-600 hover:bg-ielts-700'
          }`}
          aria-label={playing ? 'Stop' : 'Play'}
        >
          {playing ? '⏹' : '▶️'}
        </button>
        <div className="text-sm text-gray-500">
          {playing ? '🔊 Playing...' : 'Click to listen to the transcript'}
        </div>
      </div>

      {transcript && (
        <details className="mt-3">
          <summary className="cursor-pointer text-sm text-ielts-600 hover:text-ielts-800 font-medium">
            📝 Show transcript
          </summary>
          <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm leading-relaxed whitespace-pre-line max-h-60 overflow-y-auto">
            {transcript}
          </div>
        </details>
      )}
    </div>
  )
}
