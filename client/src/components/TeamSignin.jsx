import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const TeamSignin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSignIn=()=>{
        console.log('Team Signin',{email,password});
    }
  return (
    <div className='login-container'>
    <div className='login-form-position'>
    <Form>
      <h1>Team Sign In</h1>
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  to="/student/dashboard" style={{backgroundColor:'#ffa500' , borderRadius:'2px', border: 'white' }} type="submit" onClick={handleSignIn}>
        Sign In
      </Button>
    </Form>
    </div>
    </div>
  )
}

export default TeamSignin;
