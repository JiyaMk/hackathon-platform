import React from 'react';
import {LoremIpsum} from 'lorem-ipsum';
import {Link,useNavigate} from 'react-router-dom';
import hack from '../assets/hack.jpg';
import Navibar from './Navibar.jsx';
import Homediv from './Homediv.jsx';
import About from './About.jsx';
import ContactForm from './ContactForm.jsx';
const Home = () => {
  return (
    <>
    <div className='Home'>
    <section id="home">
       <Navibar/>
       </section>
       <Homediv/>
      
       <section id="about">
       <About/>
       </section>
       <section id="contact">
       <ContactForm/>
       </section>
       </div>
    </>
  )
};

export default Home;
