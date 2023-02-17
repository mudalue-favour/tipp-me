import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import AboutUs from './AboutUs'
import Navbar from './Navbar'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
