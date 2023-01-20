import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'
import Logo from '../../assets/images/algae.png'

function Nav() {
  return (
<>
<nav className="nav__container">
    <div className="logo__container">
        <img src={Logo} alt="logo" />
    </div>
    <div className="links__container">
        <Link to='/'>Home</Link>
        <Link to='/'>Login</Link>
        <Link to='/'>Register</Link>
    </div>
</nav>
</>
    )
}

export default Nav