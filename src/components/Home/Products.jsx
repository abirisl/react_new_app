import React from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    return (
        <div>
            <h1 className='my-10 font-bold text-4xl text-center'>our products</h1>
            <div className='flex justify-center gap-5 my-5'>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
            </div>
        </div>
    );
};

export default Products;