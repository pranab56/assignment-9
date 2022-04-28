import React from 'react';
import { StarIcon } from '@heroicons/react/solid'

const People = (props) => {
    const {name,img,description}=props.person;
    return (
        <div className='person'>
        <div className='text'>
        <img className='personImg' src={img} alt="" />
        <h5>{name}</h5>
        </div>
        <p className='description'>{description}</p>
      <div className='rating'>
          <h3>Rating : </h3>
     
      <div  className='icon'>
   <StarIcon></StarIcon><StarIcon></StarIcon><StarIcon></StarIcon><StarIcon></StarIcon><StarIcon></StarIcon>
      </div>
      </div>
    </div>
  
    );
};

export default People;