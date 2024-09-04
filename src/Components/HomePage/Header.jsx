import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white  flex flex-col md:flex-row justify-between items-center gap-2 p-4 lg:px-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <span className="text-sky-500 text-2xl font-bold">RGPS</span>
          <h1 className="text-2xl font-bold lg:ml-2">chool</h1>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
        <div><FaBars className='text-3xl'/> </div>
        </button>
      </div>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li className="hover:text-gray-200">
            <Link to="/" className="text-white" onClick={closeMenu}>Home</Link>
          </li>
          {/* <li className="hover:text-gray-200">
            <Link to="/academics" className="text-white" onClick={closeMenu}>Academics</Link>
          </li> */}
          {/* <li className="hover:text-gray-200">
            <Link to="/Events" className="text-white" onClick={closeMenu}>Events</Link>
          </li> */}
          <li className="hover:text-gray-200">
            <Link to="/welfare" className="text-white" onClick={closeMenu}>Welfare</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/gallery" className="text-white" onClick={closeMenu}>Gallery</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/aboutUs" className="text-white" onClick={closeMenu}>About Us</Link>
          </li>
          <li className="hover:text-gray-200">
            <Link to="/contactUs" className="text-white" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;