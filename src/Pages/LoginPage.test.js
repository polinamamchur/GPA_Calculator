import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LoginPage from './LoginPage/jsx'
import userClient from '../clients/user/index.js'
import { BrowserRouter as Router } from 'react-router-dom'

jest.mock('../clients/user/index.js')

describe('LoginPage', () => {
  test('renders Header, Login components and Link to main page', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    )

    // Перевірка відображення заголовка
    expect(screen.getByText('Login')).toBeInTheDocument()

    // Перевірка наявності компоненту Login
    expect(screen.getByText(/username/i)).toBeInTheDocument()

    // Перевірка наявності посилання на головну сторінку
    expect(screen.getByText('Go to Main Page')).toBeInTheDocument()
  })

  test('calls handleLogin with correct arguments and redirects on success', async () => {
    const mockUser = { username: 'testuser' }
    userClient.auth.mockResolvedValueOnce(mockUser)

    render(
      <Router>
        <LoginPage />
      </Router>
    )

    // Знаходимо поля введення та кнопку
    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByRole('button', { name: /login/i })

    // Вводимо дані та натискаємо кнопку входу
    fireEvent.change(usernameInput, { target: { value: 'testuser' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(loginButton)

    // Перевіряємо виклик функції auth з правильними аргументами
    expect(userClient.auth).toHaveBeenCalledWith('testuser', 'password123')

    // Можна також перевірити переадресацію, використовуючи глобальну зміну window.location.href
    // Наприклад, якщо ви використовуєте jest-environment-jsdom-sixteen
    await screen.findByText(/redirecting/i)
    expect(window.location.href).toBe('/')
  })

  test('shows alert on failed login', async () => {
    userClient.auth.mockResolvedValueOnce(null)
    jest.spyOn(window, 'alert').mockImplementation(() => {})

    render(
      <Router>
        <LoginPage />
      </Router>
    )

    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByRole('button', { name: /login/i })

    fireEvent.change(usernameInput, { target: { value: 'wronguser' } })
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } })
    fireEvent.click(loginButton)

    // Перевірка на виклик alert з правильним повідомленням
    await screen.findByText(/invalid login or password/i)
    expect(window.alert).toHaveBeenCalledWith('Invalid login or password')

    window.alert.mockRestore()
  })

  test('shows error alert on exception', async () => {
    const error = new Error('Authentication failed')
    userClient.auth.mockRejectedValueOnce(error)
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <Router>
        <LoginPage />
      </Router>
    )

    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByRole('button', { name: /login/i })

    fireEvent.change(usernameInput, { target: { value: 'erroruser' } })
    fireEvent.change(passwordInput, { target: { value: 'errorpassword' } })
    fireEvent.click(loginButton)

    await screen.findByText(/error during authentication/i)
    expect(window.alert).toHaveBeenCalledWith('Error during authentication')
    expect(console.error).toHaveBeenCalledWith(error)

    window.alert.mockRestore()
    console.error.mockRestore()
  })
})
