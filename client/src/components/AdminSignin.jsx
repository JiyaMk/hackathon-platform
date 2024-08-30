import React from 'react';
import AdminSigninForm from './AdminSigninForm';
import backgroundImage from '../assets/image.png'; 

const AdminSignin = () => {
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
      <AdminSigninForm />
    </div>
  );
};

export default AdminSignin;
