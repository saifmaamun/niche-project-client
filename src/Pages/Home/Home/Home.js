import React from 'react';
import Products from '../../Products/Products';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner />
            <Products />
            <Reviews />
        </div>
    );
};

export default Home;