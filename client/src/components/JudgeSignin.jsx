import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/image.png'

const JudgeSignin = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
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
          }
          if(response.data.message ==='Judge not approved yet'){
            alert('Judge not approved yet');
          }
      } catch (error) {
        setError(error.response && error.response.data ? error.response.data.message: 'Failed to signin');
      }
  };
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <div className='login-container'>
    <div className='login-form-position'>
    <Form>
      <h1>Judge Sign In</h1>
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
      
      
      <Button style={{backgroundColor:'#ffa500' , borderRadius:'2px', border: 'white' }} type="submit" onClick={handleSignIn}>
        Sign In
      </Button>
      {error && <p>{error}</p>}
    </Form>
    </div>
    </div>
    </div>
  )
}

export default JudgeSignin;
