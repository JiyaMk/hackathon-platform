import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const AdminSigninForm = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSignIn=()=>{
        console.log('Admin Signin',{email,password});
    }
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
     
      <Link to='/admin-dashboard'>
  <button 
    type="button" 
    style={{ backgroundColor: '#ffa500', borderRadius: '2px', border: 'white' }} 
    onClick={handleSignIn}
  >
    Sign In
  </button>
</Link>
    </Form>
    </div>
    </div>
  )
}

export default AdminSigninForm;
