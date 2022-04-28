import React from 'react';
import logo from '../../404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error'>
            <img src={logo} alt="" />
        </div>
    );
};

export default NotFound;