import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Navbar from '../../Shared/Navbar';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { _id } = useParams()
    const [tools, setTools] = useState([]);
    useEffect(() => {
        const url = `https://guarded-temple-78656.herokuapp.com/tools/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data));
    }
        , [])

    console.log(tools);
    const handlePurchase = event => {
        event.preventDefault();

    }

    return (

        <div className='bg-green-300 bg-opacity-30'>
            <Navbar></Navbar>

            <div class=" bg-slate-100 bg-opacity-90">
                {/* <h1 className='font-3xl'>{_id}</h1> */}

                <div className='lg:flex lg:flex-row-reverse  justify-center items-center'>

                    <div className='grow-0 flex p-4 justify-center items-center'>
                        <div class="card bg-base-100 shadow-xl">
                            <figure class="px-1 pt-2">
                                <img src={tools.image} alt="Shoes" class="mask mask-circle w-[100px]" />
                            </figure>
                            <div class="card-body  items-center text-center">
                                <h2 class="card-title font-bold">{tools.name}</h2>
                                <p className='text-xs font-normal'>{tools.short_description}</p>
                                <div class="card-actions">
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='grow bg-orange-300 bg-opacity-50 rounded flex p-4 lg:w-[800px] justify-center items-center'>
                        <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-2'>
                            <input
                                type="text"
                                placeholder="Type here"
                                class="input font-semibold input-bordered text-xs w-full max-w-xs"
                                disabled
                                value={user.displayName}
                            />
                            <input
                                type="text"
                                placeholder="Type here"
                                class="input text-xs font-thin input-bordered w-full max-w-xs "
                                disabled
                                value={user.email}
                            />
                            <input
                                name='Quantity'
                                type="text"
                                placeholder="Quantity"
                                class="input input-bordered w-full max-w-xs"
                            />
                            <input
                                name='Address'
                                type="text"
                                placeholder="Address"
                                class="input input-bordered w-full max-w-xs"
                            />
                            <input
                                type="submit"
                                value="Order"
                                class="btn btn-neutral  w-full max-w-xs" />
                        </form>
                    </div>

                </div>




            </div>

        </div>
    );
};

export default Purchase;