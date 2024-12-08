import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom' // Import the useNavigate hook
import { Button } from '../Button/Button.jsx'
import './header.css'

export const Header = ({ user }) => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/signup')
  }

  return (
    <header>
      <div className="storybook-header">
        <h1 className="header-title">GPA Calculator</h1>
        <div>
          {user ? (
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
          ) : (
            <>
              <Button size="small" onClick={handleLoginClick} label="Log in" />
              <Button primary size="small" onClick={handleSignUpClick} label="Sign up" />
            </>
          )}
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  onLogin: PropTypes.func,
  onSignUp: PropTypes.func
}

Header.defaultProps = {
  user: null
}
