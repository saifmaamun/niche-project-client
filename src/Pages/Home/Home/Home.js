import React from 'react';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import NewsLetter from '../NewsLetter/NewsLetter';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner />
            <Products />
            <Reviews />
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default Home;