import React from 'react'
import Login from './Login'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Login',
  component: Login
}

export const Default = () => <Login />

export const LoggedIn = () => (
  <Login user={{ name: 'Jane Doe' }} onLogin={action('onLogin')} onSignUp={action('onSignUp')} />
)

export const LoggedOut = () => <Login onLogin={action('onLogin')} onSignUp={action('onSignUp')} />
