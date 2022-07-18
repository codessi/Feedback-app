import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, version, type, isDisabled }) => {
  // button is write with type is button version primary 
  // buti it's graide out why ? what is primaery ? 
  return (
    < button type={type}  disabled = {isDisabled} className= {`btn btn-${version}`}>
      {children}
    </button>
 
   
  )
}
Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button