import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';

const Homepage = () => {
    return (
        <div className='bg-green-400 bg-opacity-20 py-11'>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Homepage;