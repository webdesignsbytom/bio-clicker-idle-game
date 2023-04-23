import React from 'react';
import { Link } from 'react-router-dom';
// Images
import Logo from '../../assets/images/algae.png';

function Navbar() {

  const toggleNavbar = () => {
    console.log('toggleNavbar');
  };

  return (
    <header className='flex justify-between p-2 bg-transparent-black px-2 md:px-4 h-fit'>
      {/* Logo */}
      <section>
        <Link className='flex items-center' to='/'>
          <img className='w-8 h-8' src={Logo} alt='logo' />
          <p className='font-semibold pl-1'>
            <span className='text-bio-green'>Bio</span>-Clicker
          </p>
        </Link>
      </section>

      {/* Nav Monitor*/}
      <nav className='hidden md:flex items-center'>
        <section className='flex gap-6'>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/bio-clicker'>Game</Link>
          <Link to='/register'>Register</Link>
          <Link to='/account'>Account</Link>
          <Link to='/stats'>Stats</Link>
          <Link to='/admin'>Admin</Link>
        </section>
      </nav>

      {/* Nav Phone and Tablet */}
      <nav
        onClick={() => {
          toggleNavbar();
        }}
        className='md:hidden no__highlights flex items-center'
      >
        <span className='cursor-pointer text-white hover:text-hover-grey'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
            data-te-animation-init
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
