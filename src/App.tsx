import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import AssetSlideshow from './components/sections/AssetSlideshow'
import Services from './components/sections/Services'
import About from './components/sections/About'
import CaseStudies from './components/sections/CaseStudies'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AssetSlideshow />
        <Services />
        <About />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
