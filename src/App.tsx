import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import InsightsPage from './pages/InsightsPage'
import InsightDetailPage from './pages/InsightDetailPage'
import CompanyPage from './pages/CompanyPage'
import LegalPage from './pages/LegalPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050508] text-slate-100 overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources/insights" element={<InsightsPage />} />
            <Route path="/resources/insights/:slug" element={<InsightDetailPage />} />
            <Route path="/company/about" element={<CompanyPage />} />
            <Route path="/company/careers" element={<CompanyPage />} />
            <Route path="/legal/privacy-policy" element={<LegalPage type="privacy" />} />
            <Route path="/legal/terms" element={<LegalPage type="terms" />} />
            <Route path="/legal/cookies" element={<LegalPage type="cookies" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
