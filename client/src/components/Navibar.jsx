import React from 'react'
import appicon from '../assets/appicon.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,useNavigate} from 'react-router-dom';
const Navibar = () => {
  const navigate = useNavigate();
  const handleLoginClick =()=>{
     navigate('/choose-user');
  };
  return (
    
    <div >
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home"><img src={appicon} style={{height:'60px', width:'90px'}} alt='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Navhead">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
           
          </Nav>
          <Nav>
           <button onClick={handleLoginClick}>Sign In</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navibar;
