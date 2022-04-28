import React from 'react';
import logo from '../../image.png'
import './Home.css'


const Home = () => {
    return (
        <nav className='home-container'>
          <div className='home-text'>
        <span className='text1'>
        <h1>Luxary Red Car</h1>
        <h2>From Dubai</h2>
        </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas explicabo magni dolorum assumenda magnam sunt doloribus numquam corporis, quidem asperiores eligendi nulla ea, accusantium nihil, veniam id iusto! Nihil.</p>
        <button className='btn1'>Buy Now</button>
          </div>
          <div className='img-container'>
        <img src={logo} alt="" />
          </div>

        </nav>
    );
};

export default Home;