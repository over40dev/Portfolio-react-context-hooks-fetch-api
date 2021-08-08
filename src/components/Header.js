import React from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Header({title, showForm, onToggleForm}) {

  const locationHomePage = useLocation().pathname === '/';

  return (
    <header className="header">
      <h1>{title}</h1>
      {locationHomePage && 
      <Button 
        text={showForm ? 'Close' : 'Add'}
        color={showForm ? 'red' : 'green'}
        handleClick={() => onToggleForm(!showForm)}
        />}
    </header>
  )
}

Header.defaultProps = {
  title: 'React'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showForm: PropTypes.bool.isRequired,
  onToggleForm: PropTypes.func.isRequired,
}

/* CSS in JS */
// const headingStyle = {
//   color: "red", 
//   backgroundColor: 'black'
// };
