import React from 'react';
import logo from '../../about.png';
import './About.css';

const About = () => {
    return (
        <nav>
            <div className='about'>
            <img className='AboutImg' src={logo} alt="" />
            <h1>PRANAB KUMAR</h1>
            <div className='text2'>
        <h5>my name is pranab kumar halder . i am study in dhaka polytechnic institute .My dream is to become a backend developer and go ahead with that dream.I believe that a person will never lose his wages so I have to keep that faith intact and move forward.</h5>
       </div>
            </div>
    
            
        </nav>
    );
};

export default About;