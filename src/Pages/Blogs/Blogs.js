import React from 'react';
import Navbar from '../Shared/Navbar';

const Blogs = () => {
    return (
        <div className='bg-slate-300'>
            <Navbar></Navbar>

            <div class=" min-h-screen" >

                <div class="hero-content my-8 mx-auto bg-orange-700 rounded-xl text-center text-white text-opacity-90">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-4xl font-bold">How will you improve the performance of a React Application?</h1>
                        <p class="mb-5 text-lg font-semibold">There are several factors For improving React Application. Like we should put the each section in individual component rather gathering them in one place. Web contents like images, banner..these things should be compressed in size not pixel.Also you should not add repitivie contents in your code , you can put these in state, you can use map,looping but don't repeat , repeating code needs more time to compile and gives mediocre user experiences </p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
                <div class="hero-content my-8 mx-auto bg-blue-700 rounded-xl text-center text-white text-opacity-90">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-4xl font-bold">What are the different ways to manage a state in a React application?</h1>
                        <p class="mb-5 text-lg font-semibold">There are four types of state to manage in React application:Local state,Global state,URL state,Server state
                            <br />
                            1) Local state is the state how we manage data in one or another component by importing and exporting <br />
                            2) Global state: we manage data across multiple components like hooks <br />
                            1) URL state: Data that archived on our URLs, by fetching them we can see the elements in the UI like imgbb website. <br />
                            1) Server state: It's a external server's URL that  integrated with our UI state control our UI and change it<br />


                        </p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
                <div class="hero-content my-8 mx-auto bg-blue-700 rounded-xl text-center text-white text-opacity-90">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-4xl font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                        <p class="mb-5 text-lg font-semibold">

                            <br />



                        </p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
                <div class="hero-content my-8 mx-auto bg-blue-700 rounded-xl text-center text-white text-opacity-90">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-4xl font-bold">What is a unit test? Why should write unit tests?   </h1>
                        <p class="mb-5 text-lg font-semibold">



                        </p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
                <div class="hero-content  mt-8 mx-auto bg-pink-700 rounded-xl text-center text-white text-opacity-90">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-4xl font-bold">Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`</h1>
                        <p class="mb-5 text-lg font-semibold">If I set it directly, executing useState() thereafter may just overwrite my changes.
                            this.state is not changed instantly when i directly update the state. Instead, it generates a  state transition, which only return the current value if accessed after using this function.
                            I'll lose control of the state if I use `products = [...]` in all of my own components.To take over the controlling with updated with previous data I use `setProducts` </p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;