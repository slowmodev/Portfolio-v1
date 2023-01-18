import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Technologies from './components/Technologies'
import Contact from './components/Contact'


export default function App(){
  const [darkMode, setDarkMode] = useState(false)
  function dark(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <div className={darkMode ? 'dark': ""}>
      <Navbar dark={dark} darkMode={darkMode}/>
        <div className="container">
          <main>
            <Hero darkMode={darkMode}/>
            <About />
            <Technologies />
            <Projects darkMode={darkMode}/>
            <Contact />
          </main>
        </div>
    </div>
  )
}