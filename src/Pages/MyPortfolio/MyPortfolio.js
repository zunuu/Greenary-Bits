import React from 'react';
import Navbar from '../Shared/Navbar';
import './MyPortfolio.css'
const MyPortfolio = () => {
    return (
        <div className='myPort'>
            <Navbar></Navbar>

            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div>
                        <div className='my-16 flex lg:flex-row flex-col items-center justify-between'>
                            <p class="py-6 text-left font-mono text-3xl">Name: Zunayed Hossain
                                <br />
                                Email: zunayedhossain99@gmail.com
                                <br />
                                Educational: HSC(2018),Dhaka City College
                            </p>
                            <img src="https://i.ibb.co/YTNkvqF/IMG-6419.jpg" class="max-w-xs mask mask-circle shadow-2xl" alt='' />
                        </div>
                        <p className='text-left font-thin text-lg'>
                            Assalamu Alaikum ,
                            I am Zunayed Hossain. I am a web developer and A photography enthusiast. I studied in Dhaka City College and passed my HSC examination. Besides my institutional education I like to gather external knowledge specially in foreign language and technology based education. Though I have no  CSE or Computer Science related background in my education but I have strong passion in IT field specially in Web Development & Automation Engineering
                        </p>



                        <h2 className=' mt-16 text-left text-3xl font-bold'>
                            My skillset :
                            <br />
                            <div className='divider'></div>
                        </h2>
                        <div className="text-lg text-left font-semibold">
                            -HTML , CSS <br />
                            -Bootstrap <br />
                            -Tailwind <br />
                            -Javascript <br />
                            -React <br />
                            -Firebase <br />
                            -Mongodb <br />
                            -Nodejs <br />
                        </div>


                        <h2 className='mt-16 text-left text-3xl font-bold'>
                            Soft skills:
                            <br />
                            <div className='divider'></div>
                        </h2>
                        <div className="text-lg text-left font-semibold">
                            -Adaptibility <br />
                            -Teamwork <br />
                            -Teaching <br />
                            -Focusing <br />
                        </div>

                        <h2 className='mt-16 text-3xl text-left font-bold'>My Projects:
                            <br />
                            <div className='divider'></div>
                        </h2>
                        <div className="text-lg text-green-700  text-left font-semibold">

                            - <a className='' target='_blank' href="https://spices-den.web.app/">Spices Den</a>
                            <br />
                            - <a target='_blank' href="https://shutters-stacker.web.app/">Shutter Stacker</a>
                            <br />
                            - <a target='_blank' href="https://cafe-buzzzzer.netlify.app/home">Cafe Buzzer</a>
                            <br />


                        </div>





                        <button class="mt-20 btn btn-ghost btn-outline">Get My Resume</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyPortfolio;