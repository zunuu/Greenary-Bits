import React from 'react';
import Navbar from '../Shared/Navbar';

const ContactUs = () => {
    return (
        <div className='bg-slate-300'>
            <Navbar></Navbar>

            <div class="hero min-h-screen">
                <div class="hero-content flex-col m-28 rounded-2xl p-16 justify-between lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <p className='bg-red-50 my-8 rounded-2xl text-xl font-semibold p-4'>
                                Email: greenary-bits@yahoo.com <br /> <br /> <br />
                                Address: Planet Earth, Milky Way Galaxy
                            </p>
                            <div class="form-control my-8">

                                <input type="text" placeholder="Send Your Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">

                                <textarea name="" className='bg-slate-100 p-8' placeholder="Write Your Concern" id="" cols="30" rows="10"></textarea>

                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;