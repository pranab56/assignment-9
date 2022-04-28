import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <nav>
            <div className='quation'>
            <h1>what is a context API ?</h1>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='quation'>
                <h1>what is a simantic tag ?</h1>
                <p>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a  tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
                </p>
            </div>
        </nav>
    );
};

export default Blogs;