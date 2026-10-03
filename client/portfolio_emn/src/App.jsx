import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
       <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
   
  )
}

export default App