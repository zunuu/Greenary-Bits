import React from 'react';
import new1 from '../../images/dylan-nolte-dusmf-f-bjg-unsplash.jpg'
import new2 from '../../images/rsz_eriks-irmejs-xxkcpi81jnc-unsplash.jpg'
import new3 from '../../images/rsz_new_2.jpg'
import './NewProduct.css'
const NewProduct = () => {
    return (

        <div className=''>
            <div class="hero rounded-3xl indicator sm:indicator-middle min-h-fit bg-yellow-50  mb-5">
                <span class="indicator-item indicator-center badge badge-primary">Upcoming</span>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={new1} class="max-w-sm rounded-lg shadow-3xl" alt='' />
                    <img src={new2} class="max-w-sm rounded-lg shadow-3xl" alt='' />
                    <img src={new3} class="max-w-sm rounded-lg shadow-3xl" alt='' />

                </div>

            </div>
            <div className='py-28 bg-slate-300'>
                <h4 className='text-4xl font-bold'>LET'S STAY IN TOUCH</h4>
                <p className='py-4 text-stone-700'>
                    <small className='font-semibold text-opacity-70'>Send your email to get weekly Newsletter, <br /> Our New services, New Products, Offers <br /> & Suggestions during your harvesting season</small>
                    <br />
                </p>
                <form className='mb-4' action="">
                    <input className='formInput outline-0' type="email" name="" id="" />
                    <button className='formBtn bg-neutral font-semibold text-white text-opacity-80' type="submit">Submit</button>
                </form>
            </div>
        </div>


    );
};

export default NewProduct;