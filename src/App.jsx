import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import WelcomeModal from './components/WelcomeModal'
import Home from './pages/Home'
import Listening from './pages/Listening'
import Reading from './pages/Reading'
import Writing from './pages/Writing'
import Speaking from './pages/Speaking'
import Guide from './pages/Guide'

export default function App() {
  return (
    <>
      <WelcomeModal />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Layout>
    </>
  )
}
