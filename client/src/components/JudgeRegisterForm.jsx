import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { url } from '../assets/asset';

const JudgeRegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true); 
    setError('');
    try {
      const response = await axios.post(`${url}/auth/judge/signup`, {
        name,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data.message === 'Judge registered successfully') {
        alert('Judge registered successfully!');
        setName('');
        setEmail('');
        setPassword('');
        navigate('/judge-signin');
      }
    } catch (error) {
      console.error('Error registering judge:', error);
      setError('Failed to register judge. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div  style={{backgroundColor:'rgb(255 255 255 / 100%)'}} className=" p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 style={{color:'black'}} className="text-2xl font-bold mb-4 text-center">Judge Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black-700">Email address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={handleRegister}
            className="w-100 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-semibold rounded hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>

          {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}

          <p className="text-sm text-black-500 text-center mt-4">
            Already have an account? <Link to="/judge-signin" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default JudgeRegisterForm;
