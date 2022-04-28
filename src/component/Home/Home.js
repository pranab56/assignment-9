import React from 'react';
import { Link } from 'react-router-dom';
import UseReview from '../../Hooks/UseReview';
import logo from '../../image.png'
import People from '../People/People';
import './Home.css'


const Home = () => {
  const [review,setreview]=UseReview();
    return (
        <nav className='home'>
          <div  className='home-container'>
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
          </div>
          <h1 id='cus'>customer Review (3)</h1>
        <div className='review'>
          
         {
           review.slice(1,4).map(person=><People
           key={person.id}
           person={person}
           ></People>)
         }
        
        </div>
        <div className='more'>
         <button id='btn3'><Link to={'/review'}>more review</Link></button>
         </div>
        </nav>
    );
};

export default Home;