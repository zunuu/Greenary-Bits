import React from 'react';
import Navbar from '../Shared/Navbar';

// import image3 from '../../images/2111.w037.n003.11B.p1.11.jpg'
// import Navbar from '../Shared/Navbar';
import './Banner.css'
const Banner = () => {
    return (
        <div className='bannercontent '>
            <Navbar></Navbar>
            <div class="w-100    max-h-screen carousel ">

                <div class="hero min-h-screen bg-transperent">
                    <div class="hero-content flex-col lg:flex-row-reverse">

                        <div className="max-w-xl p-10 rounded-3xl bg-green-200 bg-opacity-40">
                            <h1 class="text-4xl font-bold  text-neutral">let's grow your garden!</h1>
                            <p class="py-6 font-semibold text-neutral">Grab the opportunity to grow your agriculture business with our decent tools and gadgets</p>
                            <button class="btn btn-danger bg-opacity-40 border-0 text-white">Let's Start</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;