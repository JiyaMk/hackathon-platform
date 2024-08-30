import React from 'react'
import JudgeRegisterForm from './JudgeRegisterForm.jsx';
import backgroundImage from '../assets/image.png'
const JudgeRegister = () => {
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
      <JudgeRegisterForm/>
    </div>
  )
}

export default JudgeRegister;
