import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import Coverage from './components/sections/Coverage'
import Quote from './components/sections/Quote'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="bg-[#0d0d0d] text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Coverage />
        <Quote />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}