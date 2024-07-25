import React from 'react'
import Header from './Components/Header/Header'
import SubjectForm from './Components/SubjectForm/SubjectForm'
import Button from './Components/Button/Button'

function MainPage() {
  return (
    <div className="main-page">
      <Header title="GPA Calculator" />
      <div className="content">
        <h2>Enter Your Subjects</h2>
        <SubjectForm />
        <Button text="Calculate GPA" />
        <Button text="Calculate Total Credits" />
      </div>
    </div>
  )
}

export default MainPage
