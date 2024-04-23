import './NavBarStyles.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='header'>
        <div >
            <h1>MachIntell</h1>
        </div>
        <ul className={'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/flcps">FLCPS</Link>
        </li>
        <li>
          <Link to="/dispatch">Dispatch</Link>
        </li>
        <li>
          <Link to="/fmea">FMEA</Link>
        </li>
      </ul>
    </div>
    

  )
}

export default Navbar