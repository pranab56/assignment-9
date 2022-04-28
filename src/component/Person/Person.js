import React from 'react';
import './Person.css'

const Person = (props) => {
    const {name,img,description}=props.person;
    return (
        <div className='person'>
            <div className='text'>
            <img className='personImg' src={img} alt="" />
            <h5>{name}</h5>
            </div>
            <p className='description'>{description}</p>
        </div>
    );
};

export default Person;