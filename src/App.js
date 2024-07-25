import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  )
}

export default App
