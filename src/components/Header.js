import PropTypes from 'prop-types'

export default function Header({title}) {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}

const headingStyle = {
  color: "red", 
  backgroundColor: 'black'
};


Header.defaultProps = {
  title: 'React'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
