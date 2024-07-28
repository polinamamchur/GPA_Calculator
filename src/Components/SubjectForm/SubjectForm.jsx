import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './SubjectForm.css'
import { Button } from '../Button/Button.jsx'

const SubjectForm = ({
  initialSubject,
  initialGrade,
  initialCredits,
  onAdd,
  onRemove,
  isRemovable,
  isInitial
}) => {
  const [subject, setSubject] = useState(initialSubject)
  const [grade, setGrade] = useState(initialGrade)
  const [credits, setCredits] = useState(initialCredits)

  const handleAdd = (e) => {
    e.preventDefault()
    onAdd({ subject, grade, credits })
    setSubject('')
    setGrade('')
    setCredits('')
  }

  const handleRemove = (e) => {
    e.preventDefault()
    onRemove()
  }

  return (
    <form className="subject-form">
      <div className="subject-inputs">
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="grade">Grade</label>
          <input type="text" id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
        </div>
        <div>
          <label htmlFor="credits">Credits</label>
          <input
            type="number"
            id="credits"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
          />
        </div>
      </div>
      <div className="subject-form-buttons">
        {isInitial && <Button type="button" label="Add" primary onClick={handleAdd} />}
        {isRemovable && !isInitial && (
          <Button type="button" label="Remove" onClick={handleRemove} />
        )}
      </div>
    </form>
  )
}

SubjectForm.propTypes = {
  initialSubject: PropTypes.string,
  initialGrade: PropTypes.string,
  initialCredits: PropTypes.number,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isRemovable: PropTypes.bool,
  isInitial: PropTypes.bool.isRequired
}

SubjectForm.defaultProps = {
  initialSubject: '',
  initialGrade: '',
  initialCredits: 0,
  isRemovable: true,
  isInitial: false
}

export default SubjectForm
