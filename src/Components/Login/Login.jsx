import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Login.css'

function Login({ onLogin }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await onLogin(login, password)
    } catch (err) {
      setError('Error during authentication')
      console.error(err)
    }
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default Login
