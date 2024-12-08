import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, className, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, className].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}>
      {label}
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  className: '',
  onClick: undefined
}
