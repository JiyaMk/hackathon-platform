import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../assets/asset';

const AdminSigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log('Signing in with email:', email, 'and password:', password);
    try {
      const response = await axios.post(`${url}/admin/login`, { email, password });
      if (response.data.message === 'Admin login successful') {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/admin-dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div style={{backgroundColor:'rgb(255 255 255)'}} className=" p-8 rounded shadow-md w-full max-w-md">
        <h1 style={{color:'black'}} className="text-2xl font-bold mb-4 text-center">Admin Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="mt-2 text-sm text-gray-500">
              We'll never share your email with anyone else.
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-100 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-semibold rounded hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>

          {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminSigninForm;
