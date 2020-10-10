import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [button, setButton] = useState(true)
 
  const handleClick = () => setClicked(!clicked)
  const closeMobileMenu = () => setClicked(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRYL <i className="fab-typo3"></i>
          </Link>
          <div className="meun-icon" onClick={handleClick}>
            
          </div>

          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item-mobile">
              <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar
