import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getTheme, setTheme, getStats, getActiveUser, setActiveUser, getUsers, addUser, renameUser } from '../utils/storage'
import { listeningData } from '../data/listening'
import { readingData } from '../data/reading'
import { writingData } from '../data/writing'
import { speakingData } from '../data/speaking'

const navItems = [
  { path: '/', label: 'Home', icon: '📊', accent: 'hover:border-gray-400' },
  { path: '/listening', label: 'Listening', icon: '🎧', accent: 'hover:border-red-500' },
  { path: '/reading', label: 'Reading', icon: '📖', accent: 'hover:border-orange-500' },
  { path: '/writing', label: 'Writing', icon: '✍️', accent: 'hover:border-rose-600' },
  { path: '/speaking', label: 'Speaking', icon: '🎤', accent: 'hover:border-pink-500' },
]

const moreItems = [
  { path: '/guide', label: 'Guide', icon: '🎯', accent: 'hover:border-emerald-500' },
]

function UserMenu({ dark }) {
  const [user, setUser] = useState(getActiveUser())
  const [users, setUsers] = useState(getUsers())
  const [showMenu, setShowMenu] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editName, setEditName] = useState(user)

  function refresh() {
    setUser(getActiveUser())
    setUsers(getUsers())
  }

  function switchUser(name) {
    setActiveUser(name)
    refresh()
    window.location.reload()
  }

  function handleAdd() {
    const name = prompt('Enter a name for the new user:')
    if (name && name.trim()) {
      addUser(name.trim())
      switchUser(name.trim())
    }
  }

  function handleRename() {
    if (editName.trim() && editName.trim() !== user) {
      if (renameUser(user, editName.trim())) {
        refresh()
        setEditing(false)
        window.location.reload()
      } else {
        alert('That name is already taken.')
      }
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 hover:bg-white/10 rounded-lg px-2 py-1.5 transition-colors w-full text-left"
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${dark ? 'bg-white/20 text-white' : 'bg-ielts-200 text-ielts-800'}`}>
          {user.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold truncate leading-tight">{user}</div>
          <div className="text-[10px] text-ielts-300 uppercase tracking-wider">IELTS TRAINER</div>
        </div>
        <svg className={`w-4 h-4 text-ielts-300 transition-transform ${showMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showMenu && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />
          <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl shadow-xl border z-20 overflow-hidden ${
            dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            {users.length > 0 && (
              <div className="p-2">
                <p className={`text-[10px] uppercase tracking-wider px-2 py-1 font-medium ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Switch user</p>
                {users.map(name => (
                  <button
                    key={name}
                    onClick={() => switchUser(name)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                      name === user
                        ? 'bg-ielts-50 dark:bg-ielts-900/30 text-ielts-700 dark:text-ielts-300 font-medium'
                        : dark ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      dark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                    }`}>{name.charAt(0).toUpperCase()}</div>
                    {name}
                    {name === user && <span className="ml-auto text-xs">✓</span>}
                  </button>
                ))}
              </div>
            )}
            <div className={`px-2 pb-2 flex gap-1 ${users.length > 0 ? 'pt-1 border-t border-gray-100 dark:border-gray-700' : ''}`}>
              <button
                onClick={handleAdd}
                className={`flex-1 text-xs px-2 py-1.5 rounded-lg font-medium transition-colors ${
                  dark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                + New user
              </button>
              <button
                onClick={() => { setEditing(true); setEditName(user); setShowMenu(false) }}
                className={`flex-1 text-xs px-2 py-1.5 rounded-lg font-medium transition-colors ${
                  dark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                ✏️ Rename
              </button>
            </div>
          </div>
        </>
      )}

      {editing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setEditing(false)}>
          <div className={`rounded-2xl p-6 w-full max-w-sm shadow-2xl ${dark ? 'bg-gray-800' : 'bg-white'}`} onClick={e => e.stopPropagation()}>
            <h3 className={`text-lg font-bold mb-4 ${dark ? 'text-white' : 'text-gray-800'}`}>Rename user</h3>
            <input
              type="text"
              value={editName}
              onChange={e => setEditName(e.target.value)}
              className="input-field mb-4"
              placeholder="Enter new name"
              autoFocus
              onKeyDown={e => e.key === 'Enter' && handleRename()}
            />
            <div className="flex gap-3">
              <button onClick={() => setEditing(false)} className="btn-secondary flex-1">Cancel</button>
              <button onClick={handleRename} className="btn-primary flex-1" disabled={!editName.trim()}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Layout({ children }) {
  const location = useLocation()
  const [dark, setDark] = useState(getTheme() === 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const totals = {
    listening: listeningData.sections.reduce((s, sec) => s + sec.questions.length, 0),
    reading: readingData.passages.reduce((s, p) => s + p.questions.length, 0),
    writing: writingData.task1.length + writingData.task2.length,
    speaking: speakingData.part1.length + speakingData.part2.length + speakingData.part3.length,
  }
  const [stats, setStats] = useState(getStats(totals))
  const [user, setUser] = useState(getActiveUser())

  useEffect(() => {
    setStats(getStats(totals))
  }, [location])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    setTheme(next ? 'dark' : 'light')
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  const isMoreActive = moreItems.some(i => i.path === location.pathname)

  return (
    <div className="min-h-screen flex flex-col md:flex-row pb-16 md:pb-0">
      {/* Mobile header */}
      <header className="md:hidden bg-gradient-to-r from-ielts-800 to-red-900 text-white px-4 py-3 flex items-center justify-between shadow-lg sticky top-0 z-30">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
            {user.charAt(0).toUpperCase()}
          </span>
          <span className="text-lg font-bold tracking-tight truncate max-w-[160px]">{user}</span>
        </Link>
        <div className="flex items-center gap-1">
          <button onClick={toggleTheme} className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center text-lg active:bg-white/20 transition-colors" aria-label="Toggle theme">
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center text-lg active:bg-white/20 transition-colors" aria-label="Menu">
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-20" onClick={closeMenu} />
      )}

      {/* Mobile drawer */}
      <aside className={`
        md:hidden fixed inset-y-0 right-0 z-30 w-72
        bg-gradient-to-b from-ielts-800 to-red-950 text-white
        transform transition-transform duration-300 ease-out
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        shadow-2xl
      `}>
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-lg font-bold">More</span>
          <button onClick={closeMenu} className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center" aria-label="Close">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-3">
          <UserMenu dark />
        </div>

        <nav className="p-3 space-y-0.5">
          {[...navItems, ...moreItems].map(item => {
            const active = item.path === location.pathname
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'bg-white/15 text-white shadow-sm'
                    : 'text-ielts-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-400 rounded-r-full" />
                )}
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span>{item.label}</span>
                {item.path !== '/' && stats[item.label.toLowerCase()] && (
                  <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full ${
                    active ? 'bg-white/20 text-white' : 'bg-white/10 text-ielts-200'
                  }`}>
                    {stats[item.label.toLowerCase()].percentage}%
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10 mt-4">
          <p className="text-xs text-ielts-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Progress
          </p>
          {Object.values(stats).some(s => s.total > 0) ? (
            <div className="space-y-2.5">
              {Object.entries(stats).map(([key, val]) => (
                <div key={key} className="flex items-center gap-2 text-sm group">
                  <span className="capitalize text-ielts-200 w-[4.5rem] text-xs">{key}</span>
                  <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-red-400 h-full rounded-full transition-all duration-500 group-hover:bg-red-300"
                      style={{ width: `${val.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-ielts-300 w-8 text-right tabular-nums">{val.percentage}%</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-ielts-400 text-center py-2">Start practicing to see progress</p>
          )}
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col bg-gradient-to-b from-ielts-800 to-red-950 text-white min-h-screen w-64 flex-shrink-0 sticky top-0 h-screen">
        <div className="p-4 border-b border-white/10">
          <UserMenu dark />
        </div>

        <div className="flex justify-end px-4 pt-1">
          <button onClick={toggleTheme} className="text-sm text-ielts-300 hover:text-white flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/5 transition-colors" aria-label="Toggle theme">
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <nav className="p-3 space-y-0.5 mt-1 flex-1 overflow-y-auto">
          {[...navItems, ...moreItems].map(item => {
            const active = item.path === location.pathname
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                  active
                    ? 'bg-white/15 text-white shadow-sm'
                    : 'text-ielts-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-red-400 rounded-r-full" />
                )}
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <span>{item.label}</span>
                {item.path !== '/' && stats[item.label.toLowerCase()] && (
                  <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full ${
                    active ? 'bg-white/20 text-white' : 'bg-white/10 text-ielts-200'
                  }`}>
                    {stats[item.label.toLowerCase()].percentage}%
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <p className="text-xs text-ielts-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Progress
          </p>
          {Object.values(stats).some(s => s.total > 0) ? (
            <div className="space-y-2.5">
              {Object.entries(stats).map(([key, val]) => (
                <div key={key} className="flex items-center gap-2 text-sm group">
                  <span className="capitalize text-ielts-200 w-[4.5rem] text-xs">{key}</span>
                  <div className="flex-1 bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-red-400 h-full rounded-full transition-all duration-500" style={{ width: `${val.percentage}%` }} />
                  </div>
                  <span className="text-xs text-ielts-300 w-8 text-right tabular-nums">{val.percentage}%</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-ielts-400 text-center py-2">Start practicing to see progress</p>
          )}
        </div>

        <div className="p-4 border-t border-white/5">
          <p className="text-xs text-ielts-400 text-center">Practice · Improve · Succeed</p>
        </div>
      </aside>

      {/* Main content */}
      <main key={location.pathname} className="flex-1 p-4 md:p-8 overflow-auto max-w-5xl mx-auto w-full min-h-screen fade-in">
        {children}
      </main>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 safe-area-bottom">
        <div className="flex items-center justify-around px-1 py-1">
          {navItems.map(item => {
            const active = item.path === location.pathname
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl min-w-[3.5rem] transition-colors ${
                  active
                    ? 'text-ielts-600 dark:text-ielts-400'
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <span className="text-xl leading-none mb-0.5">{item.icon}</span>
                <span className={`text-[10px] font-medium leading-tight ${active ? 'font-semibold' : ''}`}>{item.label}</span>
                {active && <span className="w-1 h-1 rounded-full bg-ielts-500 mt-0.5" />}
              </Link>
            )
          })}
          <Link
            to="/guide"
            className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl min-w-[3.5rem] transition-colors ${
              isMoreActive
                ? 'text-ielts-600 dark:text-ielts-400'
                : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
            }`}
          >
            <span className="text-xl leading-none mb-0.5">🎯</span>
            <span className={`text-[10px] font-medium leading-tight ${isMoreActive ? 'font-semibold' : ''}`}>Guide</span>
            {isMoreActive && <span className="w-1 h-1 rounded-full bg-ielts-500 mt-0.5" />}
          </Link>
        </div>
      </nav>
    </div>
  )
}
