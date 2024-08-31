import React from 'react'
import aboutimg from '../assets/aboutimg.png';
import Navibar from './Navibar';
import { MacbookScroll } from './ui/macbook-scroll';
import { MacbookScrollDemo } from './MacBookScrollDemo';

const About = () => {
  return (
    <>
    <Navibar/>
    <div className='AboutContainer' >
    <MacbookScrollDemo/>
    </div>
    </>
  )
}

export default About;
