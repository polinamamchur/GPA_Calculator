import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../Components/Header/Header.jsx'
import Login from '../Components/Login/Login.jsx'
import './LoginPage.css'

import userClient from '../clients/user/index.js'

function LoginPage() {
  const handleLogin = async (login, password) => {
    try {
      const user = await userClient.auth(login, password)
      if (user) {
        window.location.href = '/'
      } else {
        alert('Invalid login or password')
      }
    } catch (err) {
      alert('Error during authentication')
      console.error(err)
    }
  }

  return (
    <div className="login-page">
      <Header title="Login" />
      <div className="login-container">
        <Login onLogin={handleLogin} /> {/* Передача функції обробки входу */}
        <div className="navigation">
          <Link to="/" className="go-to-home">
            Go to Main Page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
