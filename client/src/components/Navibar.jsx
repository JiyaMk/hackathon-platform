import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import appicon from '../assets/appicon.png';

const Navibar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  // Inline CSS for dark blue shimmer effect
  const shimmerStyle = {
    position: 'relative',
    overflow: 'hidden',
    color: '#fff',
    background: 'linear-gradient(90deg, #003366, #0033cc, #003366)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 7s infinite',
    textAlign: 'center',
    borderRadius: '0.375rem', 
    border: 'none',
    cursor: 'pointer'
  };

  const shimmerAnimation = `
    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }
  `;

  return (
    <div className="bg-gray-100 shadow-md" >
      <style>{shimmerAnimation}</style> {/* Add the shimmer animation CSS here */}
      <nav className="flex items-center justify-between p-2 md:p-4 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center">
          <img src={appicon} alt="logo" className="h-12 md:h-16 w-auto" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500 text-sm md:text-base">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 text-sm md:text-base">About us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 text-sm md:text-base">Contact us</Link>
        </div>
        <button
          onClick={handleLoginClick}
          style={shimmerStyle}
        >
          Sign In
        </button>
      </nav>
      <div className="md:hidden flex items-center justify-between p-2 max-w-6xl mx-auto">
        <button
          className="text-gray-700 hover:text-blue-500 focus:outline-none"
          onClick={() => {
            // Add logic to handle mobile menu toggle
          }}
        >
          {/* Mobile menu icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <Link to="/" className="flex items-center">
          <img src={appicon} alt="logo" className="h-12 w-auto" />
        </Link>
      </div>
    </div>
  );
};

export default Navibar;
