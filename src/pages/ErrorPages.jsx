import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPages = () => {

    const{error,status} = useRouteError
    return (
        <div className='flex justify-center mt-32'>
            <h1 className='font-bold text-5xl'>Error: {status||404 }</h1>
            <p className='text-3xl'>{error?.message}</p>

            <button className='text-white btn bg-red-500'>
                <Link  to="/">Homepage</Link>
            </button>
        </div>
    );
};

export default ErrorPages;