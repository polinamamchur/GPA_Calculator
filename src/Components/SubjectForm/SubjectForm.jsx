import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SubjectForm.css';
import { Button } from '../Button/Button';

export const SubjectForm = ({ initialSubject, initialGrade, initialCredits, onSubmit, onDelete }) => {
  const [subject, setSubject] = useState(initialSubject);
  const [grade, setGrade] = useState(initialGrade);
  const [credits, setCredits] = useState(initialCredits);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ subject, grade, credits });
    setSubject('');
    setGrade('');
    setCredits('');
  };

  const handleDelete = () => {
    onDelete({ subject, grade, credits });
    setSubject('');
    setGrade('');
    setCredits('');
  };

  return (
    <form className="subject-form" onSubmit={handleSubmit}>
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
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
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
        <Button type="submit" label="Add" primary />
        <Button type="button" label="Remove" onClick={handleDelete} />
      </div>
    </form>
  );
};

SubjectForm.propTypes = {
  initialSubject: PropTypes.string,
  initialGrade: PropTypes.string,
  initialCredits: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

SubjectForm.defaultProps = {
  initialSubject: '',
  initialGrade: '',
  initialCredits: 0,
};

export default SubjectForm;
