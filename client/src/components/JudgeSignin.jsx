import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/image.png';

const JudgeSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:4000/auth/judge/login', {
        email,
        password,
      });
      console.log(response.data.message);
      if (response.data.message === 'Login successful') {
        alert('Sign in successful!');
        navigate('/judge-dashboard');
      } else if (response.data.message === 'Judge not approved yet') {
        alert('Judge not approved yet');
      }
    } catch (error) {
      setError(error.response && error.response.data ? error.response.data.message : 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="bg-cover bg-center h-screen flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-4 text-center">Judge Login</h1>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="mt-2 text-sm text-gray-500">We'll never share your email with anyone else.</p>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
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

          {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default JudgeSignin;
