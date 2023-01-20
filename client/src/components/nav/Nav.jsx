import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
<>
<nav className="nav__container">
    <div className="logo__container">Logo</div>
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