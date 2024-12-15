import React, { useState } from 'react'
import { Header } from '../Components/Header/Header.jsx'
import SubjectForm from '../Components/SubjectForm/SubjectForm.jsx'
import { Button } from '../Components/Button/Button.jsx'
import './MainPage.css'

function MainPage() {
  const [subjects, setSubjects] = useState([{ subject: '', grade: '', credits: '' }])
  const [gpa, setGpa] = useState(0)
  const [totalCredits, setTotalCredits] = useState(0)

  const addSubject = (subject) => {
    setSubjects([...subjects, subject])
  }

  const removeSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index))
  }

  const calculateGPA = () => {
    const grades = subjects.map((subject) => Number(subject.grade))
    const credits = subjects.map((subject) => Number(subject.credits))
    const totalCredits = credits.reduce((acc, credit) => acc + credit, 0)
    const totalPoints = grades.reduce((acc, grade, index) => acc + grade * credits[index], 0)
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0
  }

  const calculateTotalCredits = () => {
    return subjects.reduce((acc, subject) => acc + Number(subject.credits), 0)
  }

  const handleCalculate = () => {
    setGpa(calculateGPA())
    setTotalCredits(calculateTotalCredits())
  }

  return (
    <div className="main-page">
      <Header title="GPA Calculator" />
      <div className="content">
        <h4>Enter Your Subjects</h4>
        {subjects.map((subject, index) => (
          <SubjectForm
            key={index}
            initialSubject={subject.subject}
            initialGrade={subject.grade}
            initialCredits={subject.credits}
            onAdd={addSubject}
            onRemove={() => removeSubject(index)}
            isRemovable={subjects.length > 1 || index !== 0}
            isInitial={index === 0}
          />
        ))}
        <div className="buttons">
          <div className="button-wrapper">
            <Button size="large" label="Calculate GPA" onClick={handleCalculate} />
          </div>
        </div>
        <div className="results">
          <h5>Results:</h5>
          <p>
            <strong>GPA:</strong> {gpa}
          </p>
          <p>
            <strong>Total Credits:</strong> {totalCredits}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainPage
