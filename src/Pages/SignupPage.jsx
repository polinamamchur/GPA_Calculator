import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../Components/Header/Header.jsx'
import Signup from '../Components/Signup/Signup.jsx'
import './SignupPage.css'

function SignupPage() {
  return (
    <div className="signup-page">
      <Header title="Sign Up" />
      <div className="signup-container">
        <Signup />
        <div className="navigation">
          <Link to="/" className="go-to-home">
            Go to Main Page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
