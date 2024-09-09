import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>OOPs!!!!!!</h2>
           <button  >  <Link to="/" > Go back </Link> </button>
        </div>
    );
};

export default ErrorPage;