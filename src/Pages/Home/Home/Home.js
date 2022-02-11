import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products/>
            <h1> home</h1>
        </div>
    );
};

export default Home;