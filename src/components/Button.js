import React from 'react';
import PropTypes from 'prop-types'

export default function Button({text, color, handleClick}) {
  return (
    <button 
      className="btn" 
      onClick = {handleClick}
      style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'black'
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
