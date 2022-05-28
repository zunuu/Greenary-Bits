import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';
import OurServices from './OurServices';
import OurGoal from './OurGoal';
import Reviews from './Reviews';


const Homepage = () => {
    return (
        <div className='bg-green-400 bg-opacity-20 '>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <OurServices></OurServices>
            <OurGoal></OurGoal>

        </div>
    );
};

export default Homepage;