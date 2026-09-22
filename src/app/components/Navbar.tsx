import React from 'react';
import homepage from './../page';
import Link from 'next/link';

const Navbar = () => {
	const links=<>
<Link className='text-gray-600' href="">Home</Link>
<Link className='text-gray-600' href="">Listed Books</Link>
<Link className='text-gray-600' href="">Pages to Read</Link>
	</>
	return (
		<nav className=' bg-base-100 shadow-sm mt-6 '>
	<div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 flex gap-4 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">Book<span className='text-[#23BE0A]'>Vibe</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex gap-4">
    <ul className="menu menu-horizontal px-1 gap-4">
{links}
    </ul>
  </div>
  <div className="navbar-end gap-4 ">
    <a className="btn bg-[#23BE0A] text-white rounded-xl">Sign In</a>


	<a className="btn bg-[#59C6D2] text-white rounded-xl">Sign Up</a>

  </div>
</div>
</nav>
	);
};

export default Navbar;