import React from 'react';
import assemble from '../../images/icons/assemble.png'
import manufacturing from '../../images/icons/manufacturing.png'
import safeFood from '../../images/7335.jpg'
import counselling from '../../images/icons/operator.png'
const OurServices = () => {
    return (
        <div className='p-10 '>
            < div class="p-10 border-opacity-50" >

                <div class="divider text-4xl font-semibold">Our Services</div>

            </div >
            <div>
                <div class="hero rounded-t-2xl min-h-fit bg-yellow-300 bg-opacity-30">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={manufacturing} class="max-w-sm mask mask-hexagon rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 class="text-5xl font-bold">Manufacturing</h1>
                            <p class="py-6 px-16">Largest agricultural & gardening tools manufacturer in South Asia. We believe in best quality. Our products helps rural farmers to speed up their productivity during harvesting as well as preharvesting session. Many enthusiast start their business of tools but they failed most of the time for high priced product with mediocre quality, which is miserable for rural farmer or new starts in harvesting</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero  min-h-fit bg-green-300 bg-opacity-20">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={assemble} class="max-w-sm mask mask-hexagon rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Assembling</h1>
                        <p class="py-6  px-16">We just not limited in the manufacturing. We spreads our wing to companies also. Toppest tools company from europe made agreement to work with us. We providing the assembling service to them. They also getting the direct touch of Asia market through us. To work with us, send your email to our newsletter section, We will contact with you</p>
                    </div>
                </div>
            </div>
            <div class="hero   min-h-fit bg-red-200 bg-opacity-70">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={safeFood} class="max-w-sm mask mask-hexagon rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Food Safety</h1>
                        <p class="py-6  px-16">This is our one of the most popular and unique service. Nowadays food contamination is a big curse. Even you don't know the food you are harvesting are those safe for your children? Are those free from hazardous chemical elements? We are providing food safety specialist for testing your whole harvest through special condition. Our agents will check in your land and after a completing the testing you will get the result and you will get advise for further do's </p>

                    </div>
                </div>
            </div>
            <div class="hero rounded-b-2xl min-h-fit bg-purple-300 bg-opacity-50">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={counselling} class="max-w-sm mask mask-hexagon rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Online Counselling</h1>
                        <p class="py-6 px-16">Farming is an excellent career.It can provide huge benefits to those who work in a proper way. However it is a career that comes with huge pressure, isolation and demand on a daily basis.Sometimes farmer don't know what to do when a sudden situation arise. We giving 24hours online support session for farmers to enrich their harvest and for the information which they want to know

                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OurServices;