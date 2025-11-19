import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Services />
    {/* <Experience/> */}
    <Contact />
    <Achievements />
    <Footer />
    </>
  )
}

export default App
