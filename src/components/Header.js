import PropTypes from 'prop-types';
import Button from './Button';
import Tasks from './Tasks';

export default function Header({title}) {

  const onButtonClick = (e) => {
    console.log('click', e);
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
        text="Add" 
        color="green"
        handleClick={onButtonClick}
        />
    </header>
  )
}

/* CSS in JS */
// const headingStyle = {
//   color: "red", 
//   backgroundColor: 'black'
// };


Header.defaultProps = {
  title: 'React'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
