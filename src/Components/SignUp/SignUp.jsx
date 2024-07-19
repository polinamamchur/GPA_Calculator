import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './SignUp.css'

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log(`Signing up with username: ${username}, email: ${email}, and password: ${password}`)
    if (typeof onSignUp === 'function') {
      onSignUp(username, email, password)
    }
  }

  return (
    <form className="signup-form" onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  )
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired
}

export default SignUp
