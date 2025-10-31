import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contests from './pages/Contests'
import Winners from './pages/Winners'
import NGO from './pages/NGO'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp' // Add this import
import LiveQuiz from './pages/LiveQuiz'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> {/* Add this route */}
          <Route path="/quiz/:contestId" element={<LiveQuiz />} />
        </Routes>
      </main>
    </div>
  )
}

export default App