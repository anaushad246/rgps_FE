import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function TrustMenu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleMobileMenuClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 ">
        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
        <Link to="/trustEvents" className="text-white hover:text-gray-200">Events</Link>
        <Link to="/trustGallary" className="text-white hover:text-gray-200">Gallary</Link>
        <Link to="/trustAboutUs" className="text-white hover:text-gray-200">About Us</Link>

        <Link to="/trustDonation" className="text-white hover:text-gray-200">Donation</Link>
        <Link to="/trustContactUs" className="text-white hover:text-gray-200">Contact Us</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={handleMobileMenuToggle}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-3xl" />
      </button>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 w-full h-fit bg-gray-800 text-white z-50 flex flex-col items-start py-4 "
        >
          <button
            onClick={handleMobileMenuClose}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700" onClick={handleMobileMenuClose}>Home</Link>
          <Link to="/trustGallary" className="block px-4 py-2 hover:bg-gray-700" onClick={handleMobileMenuClose}>Gallary</Link>
          <Link to="/trustAboutUs" className="block px-4 py-2 hover:bg-gray-700" onClick={handleMobileMenuClose}>About Us</Link>

          <Link to="/trustEvents" className="block px-4 py-2 hover:bg-gray-700" onClick={handleMobileMenuClose}>Events</Link>
          <Link to="/trustDonation" className="block px-4 py-2 hover:bg-gray-700" onClick={handleMobileMenuClose}>Donation</Link>
          <Link to="/trustContactUs" className="block px-4 py-2 hover:bg-gray-700" onClick={handleMobileMenuClose}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}

export default TrustMenu;
