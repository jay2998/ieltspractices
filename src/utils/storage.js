const KEYS = {
  USERS: 'ielts_users',
  ACTIVE_USER: 'ielts_active_user',
  THEME: 'ielts_theme',
}

function userKey(suffix) {
  const username = getActiveUser()
  return `ielts_${username}_${suffix}`
}

/* ---- User management ---- */

export function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(KEYS.USERS)) || []
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem(KEYS.USERS, JSON.stringify(users))
}

export function getActiveUser() {
  return localStorage.getItem(KEYS.ACTIVE_USER) || 'default'
}

export function setActiveUser(username) {
  localStorage.setItem(KEYS.ACTIVE_USER, username)
}

export function addUser(username) {
  const users = getUsers()
  if (!users.includes(username)) {
    users.push(username)
    saveUsers(users)
  }
}

export function renameUser(oldName, newName) {
  const users = getUsers()
  const idx = users.indexOf(oldName)
  if (idx === -1) return false
  if (users.includes(newName)) return false

  const oldProgress = localStorage.getItem(`ielts_${oldName}_progress`)
  const oldBookmarks = localStorage.getItem(`ielts_${oldName}_bookmarks`)
  if (oldProgress) localStorage.setItem(`ielts_${newName}_progress`, oldProgress)
  if (oldBookmarks) localStorage.setItem(`ielts_${newName}_bookmarks`, oldBookmarks)
  localStorage.removeItem(`ielts_${oldName}_progress`)
  localStorage.removeItem(`ielts_${oldName}_bookmarks`)

  users[idx] = newName
  saveUsers(users)
  if (getActiveUser() === oldName) setActiveUser(newName)
  return true
}

export function deleteUser(username) {
  if (username === 'default') return false
  const users = getUsers()
  const filtered = users.filter(u => u !== username)
  if (filtered.length === users.length) return false
  saveUsers(filtered)
  localStorage.removeItem(`ielts_${username}_progress`)
  localStorage.removeItem(`ielts_${username}_bookmarks`)
  if (getActiveUser() === username) setActiveUser('default')
  return true
}

/* ---- Progress ---- */

export function getProgress() {
  try {
    const existing = localStorage.getItem(userKey('progress'))
    if (existing) return JSON.parse(existing) || {}
  } catch {}
  return {}
}

export function saveProgress(skill, questionId, data) {
  const progress = getProgress()
  if (!progress[skill]) progress[skill] = {}
  progress[skill][questionId] = { ...data, timestamp: Date.now() }
  localStorage.setItem(userKey('progress'), JSON.stringify(progress))
}

export function getMistakes() {
  const progress = getProgress()
  const mistakes = []
  for (const skill of ['listening', 'reading']) {
    const data = progress[skill] || {}
    for (const [qid, entry] of Object.entries(data)) {
      if (!entry.correct) mistakes.push({ id: qid, skill, type: entry.type })
    }
  }
  return mistakes
}

export function getStats(totals) {
  const progress = getProgress()
  const stats = {}
  for (const skill of ['listening', 'reading', 'writing', 'speaking']) {
    const data = progress[skill] || {}
    const answered = Object.keys(data).length
    const correct = Object.values(data).filter(d => d.correct).length
    const totalAvailable = totals?.[skill]
    stats[skill] = {
      answered,
      correct,
      total: totalAvailable || answered,
      percentage: totalAvailable
        ? Math.round((answered / totalAvailable) * 100)
        : answered > 0 ? Math.round((correct / answered) * 100) : 0
    }
  }
  return stats
}

/* ---- Theme ---- */

export function getTheme() {
  return localStorage.getItem(KEYS.THEME) || 'light'
}

export function setTheme(theme) {
  localStorage.setItem(KEYS.THEME, theme)
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

/* ---- Bookmarks ---- */

export function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(userKey('bookmarks'))) || []
  } catch {
    return []
  }
}

export function toggleBookmark(id) {
  const bookmarks = getBookmarks()
  const idx = bookmarks.indexOf(id)
  if (idx === -1) {
    bookmarks.push(id)
  } else {
    bookmarks.splice(idx, 1)
  }
  localStorage.setItem(userKey('bookmarks'), JSON.stringify(bookmarks))
  return bookmarks
}
