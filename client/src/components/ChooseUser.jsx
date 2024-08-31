import { Link } from 'react-router-dom';
import backgroundImage from '../assets/image.png';
import React from 'react';

const ChooseUser = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="bg-cover bg-center h-screen flex justify-center items-center"
    >
      <div style={{backgroundColor:'rgb(2,3,23)'}} className="bg-white p-12 rounded shadow-md w-half max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Sign in as</h1>
        
        <div className="flex flex-col items-center gap-4">
          <Link to="/admin-signIn">
            <button className="w-48 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-semibold rounded hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
              Admin
            </button>
          </Link>

          <Link to="/judge-register">
            <button className="w-48 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-semibold rounded hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
              Judge
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseUser;
