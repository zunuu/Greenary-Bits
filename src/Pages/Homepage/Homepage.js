import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Tools from './Tools';

const Homepage = () => {
    return (
        <div className='bg-green-400 bg-opacity-20'>
            <Banner></Banner>
            <Tools></Tools>
        </div>
    );
};

export default Homepage;