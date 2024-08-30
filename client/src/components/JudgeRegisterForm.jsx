import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const JudgeRegisterForm = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const handleRegister = async () => {
        setLoading(true); 
        setError('');
      try {
        const response = await axios.post('http://localhost:4000/auth/judge/signup', {
            name: name,
            email: email,
            password: password,
        },{
          headers: {
              'Content-Type': 'application/json'
          }});
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
    <div className='login-container'>
    <div className='login-form-position'>
    <Form>
      <h1>Judge Sign in</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value= {name} onChange={(e)=>setName(e.target.value)} />
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
      <Button type='button' onClick={handleRegister}>
        Register
      </Button>
     
    </Form>
    <Form.Text style={{color:'grey'}}>
        Already have an account?<Link to="/judge-signin">Login</Link>
        </Form.Text>
    </div>
    </div>
  )
}

export default JudgeRegisterForm;
