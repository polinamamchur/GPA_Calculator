import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MainPage from './MainPage'

describe('MainPage', () => {
  test('renders Header, SubjectForm, and Button components', () => {
    render(<MainPage />)

    // Перевірка відображення заголовка
    expect(screen.getByText('GPA Calculator')).toBeInTheDocument()

    // Перевірка наявності кнопки розрахунку GPA
    expect(screen.getByRole('button', { name: /calculate gpa/i })).toBeInTheDocument()

    // Перевірка наявності початкової форми введення предмету
    expect(screen.getByText('Enter Your Subjects')).toBeInTheDocument()
  })

  test('can add a new subject form', () => {
    render(<MainPage />)

    // Додаємо новий предмет
    fireEvent.click(screen.getByRole('button', { name: /calculate gpa/i }))
    expect(screen.getAllByText('Enter Your Subjects')).toHaveLength(2)
  })

  test('can remove a subject form', () => {
    render(<MainPage />)

    // Додаємо новий предмет
    fireEvent.click(screen.getByRole('button', { name: /calculate gpa/i }))
    expect(screen.getAllByText('Enter Your Subjects')).toHaveLength(2)

    // Видаляємо предмет
    fireEvent.click(screen.getAllByRole('button', { name: /remove/i })[1])
    expect(screen.getAllByText('Enter Your Subjects')).toHaveLength(1)
  })

  test('calculates GPA and total credits', () => {
    render(<MainPage />)

    // Вводимо дані для предмету
    fireEvent.change(screen.getAllByLabelText(/grade/i)[0], { target: { value: '3' } })
    fireEvent.change(screen.getAllByLabelText(/credits/i)[0], { target: { value: '4' } })

    // Розраховуємо GPA
    fireEvent.click(screen.getByRole('button', { name: /calculate gpa/i }))

    // Перевіряємо результати
    expect(screen.getByText(/gpa:/i)).toHaveTextContent('GPA: 3.00')
    expect(screen.getByText(/total credits:/i)).toHaveTextContent('Total Credits: 4')
  })
})
