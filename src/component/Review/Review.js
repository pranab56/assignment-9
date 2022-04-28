import React from 'react';
import UseReview from '../../Hooks/UseReview';
import Person from '../Person/Person';
import './Review.css'

const Review = () => {
   const [review,setreview]=UseReview()
   
    return (
        <div className='review'>
            {
                review.map(person=><Person
                key={person.id}
                person={person}
                ></Person>)
            }
        </div>
    );
};

export default Review;