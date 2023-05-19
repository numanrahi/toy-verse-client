import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const PageNotFound = () => {
    useTitle('404')
    return (
        <div>
            <div>
                <img className='img-fluid rounded mx-auto d-block' src="https://media.istockphoto.com/id/1130129242/vector/flat-line-icon-concept-of-404-error-page-or-file-not-found-icon.jpg?s=612x612&w=0&k=20&c=RqkqhYhlWNiNsMy0FGn0PKAtnkNgy1zNDMJt5K74rO8=" alt="" />
            </div>
            <div className='text-center'>
                <button className='rounded'>
                    <Link className='text-decoration-none' to="/">Back To Home</Link>
                </button>
            </div>
        </div>
    );
};

export default PageNotFound;