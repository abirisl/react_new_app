import React from 'react';
import Acordian from '../components/Home/Acordian';
import Banner from '../components/Home/Banner';
import Products from '../components/Home/Products';


const home = () => {
    return (
        <div>
           <Banner/>
            <Products/>
            <Acordian/>
        </div>
    );
};

export default home;