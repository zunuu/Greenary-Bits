import React from 'react';
import assemble from '../../images/icons/assemble.png'
import manufacturing from '../../images/icons/manufacturing.png'
const OurServices = () => {
    return (
        <div className='p-10 '>
            < div class="p-10 border-opacity-50" >

                <div class="divider text-4xl font-semibold">Our Services</div>

            </div >
            <div>
                <div class="hero rounded-t-2xl min-h-fit bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={manufacturing} class="max-w-sm mask mask-hexagon rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 class="text-5xl font-bold">Manufacturing</h1>
                            <p class="py-6 px-28">Largest agricultural & gardening tools manufacturer in South Asia. We believe in best quality. Our products helps rural farmers to speed up their productivity during harvesting as well as preharvesting session. Many enthusiast start their business of tools but they failed most of the time for high priced product with mediocre quality, which is miserable for rural farmer or new starts in harvesting</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero  min-h-fit bg-green-300 bg-opacity-20">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={assemble} class="max-w-sm mask mask-hexagon rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Assembling</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            <div class="hero  rounded-b-2xl min-h-fit bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm mask mask-hexagon rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OurServices;