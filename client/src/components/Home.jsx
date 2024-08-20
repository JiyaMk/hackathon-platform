import React from 'react';
import {LoremIpsum} from 'lorem-ipsum';
import {Link,useNavigate} from 'react-router-dom';
import hack from '../assets/hack.jpg';
import Navibar from './Navibar.jsx';
import Homediv from './Homediv.jsx';
import About from './About.jsx';
const Home = () => {
  return (
    <>
    <div className='Home'>
       <Navibar/>
       <Homediv/>
       <About/>
       </div>
    </>
  )
};

export default Home;
