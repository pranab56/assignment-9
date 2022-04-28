import React from 'react';
import CustomLink from '../CustomeLink/CustomLink';
import './Heder.css'

const Heder = () => {
    return (
        <div className='heder'>
              <CustomLink to={'/home'}>Home</CustomLink>
            <CustomLink to={'/review'}>Review</CustomLink>
            <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
            <CustomLink to={'/blogs'}>Blogs</CustomLink>
            <CustomLink to={'/about'}>About</CustomLink>
        </div>
    );
};

export default Heder;