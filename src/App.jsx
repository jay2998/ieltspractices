import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import WelcomeModal from './components/WelcomeModal'
import ErrorBoundary from './components/ErrorBoundary'

const Home = lazy(() => import('./pages/Home'))
const Listening = lazy(() => import('./pages/Listening'))
const Reading = lazy(() => import('./pages/Reading'))
const Writing = lazy(() => import('./pages/Writing'))
const Speaking = lazy(() => import('./pages/Speaking'))
const Guide = lazy(() => import('./pages/Guide'))
const Mistakes = lazy(() => import('./pages/Mistakes'))
const MockTest = lazy(() => import('./pages/MockTest'))

function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-gray-400 dark:text-gray-500 text-sm animate-pulse">Loading...</div>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <WelcomeModal />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
            <Route path="/listening" element={<ErrorBoundary><Listening /></ErrorBoundary>} />
            <Route path="/reading" element={<ErrorBoundary><Reading /></ErrorBoundary>} />
            <Route path="/writing" element={<ErrorBoundary><Writing /></ErrorBoundary>} />
            <Route path="/speaking" element={<ErrorBoundary><Speaking /></ErrorBoundary>} />
            <Route path="/guide" element={<ErrorBoundary><Guide /></ErrorBoundary>} />
            <Route path="/mistakes" element={<ErrorBoundary><Mistakes /></ErrorBoundary>} />
            <Route path="/mock-test" element={<ErrorBoundary><MockTest /></ErrorBoundary>} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  )
}
