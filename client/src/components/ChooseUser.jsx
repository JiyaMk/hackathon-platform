import { Link } from 'react-router-dom';
import backgroundImage from '../assets/image.png'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
const ChooseUser = () => {
  return (
    <div 
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
    
    <div className='login-container'>
    <div className='login-form-position' style={{
      backgroundPosition: 'center', 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      gap:'1rem'
    }}>
  
      <h1>Sign in as</h1>
      <div >

        <Link to='/admin-signIn' ><button style={{width:'12rem'}}>Admin</button></Link>
      </div>
      
      <div>
        <Link to='/judge-register'  ><button  style={{width:'12rem'}}>Judge</button></Link>
      </div>
      </div>
   </div>
    </div>
   
   
  )
}

export default ChooseUser;
