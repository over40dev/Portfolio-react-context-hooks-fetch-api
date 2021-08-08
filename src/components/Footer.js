import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const displayAboutLink = useLocation().pathname !== '/about';

  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {displayAboutLink && <Link to="/about">About</Link>}
      
    </footer>
  )
}
