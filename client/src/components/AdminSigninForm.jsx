import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { response } from '../../../server/app';
const AdminSigninForm = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSignIn = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post('http://localhost:4000/admin/login', { email, password });
          if (response.data.message === 'Admin login successful') {
              localStorage.setItem('adminToken', response.data.token);
              navigate('/admin-dashboard');
          } else {
              setError('Invalid credentials');
          }
      } catch (err) {
          setError(err.response.data.message);
      }
  };
  return (
    <div className='login-container'>
    <div className='login-form-position'>
    <Form>
      <h1>Admin Sign In</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text style={{color:'grey'}}>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
     
      {/* <Link to='/admin-dashboard'> */}
  <button 
    type="button" 
    style={{ backgroundColor: '#ffa500', borderRadius: '2px', border: 'white' }} 
    onClick={handleSignIn}
  >
    Sign In
  </button>
  {error && <p>{error}</p>}
{/* </Link> */}
    </Form>
    </div>
    </div>
  )
}

export default AdminSigninForm;
