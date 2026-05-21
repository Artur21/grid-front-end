import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import AssetSlideshow from '../components/sections/AssetSlideshow'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import CaseStudies from '../components/sections/CaseStudies'
import Contact from '../components/sections/Contact'

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
  }, [])

  return (
    <>
      <Hero />
      <AssetSlideshow />
      <Services />
      <About />
      <CaseStudies />
      <Contact />
    </>
  )
}
