import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Navbar from '../../Shared/Navbar';
import { toast } from 'react-toastify';



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

    // console.log(tools);
    const handlePurchase = event => {
        event.preventDefault();
        // const name = user.displayName
        // const email = event.target.email.value;
        // const address = event.target.address.value;
        // const quantity = event.target.quantity.value;
        // const tool = tools.name;
        // console.log(tool, name, email, quantity, address);



        const order = {
            toolID: _id,
            toolName: tools.name,
            userName: user.displayName,
            userEmail: event.target.email.value,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
        }

        // console.log(order);


        fetch('https://guarded-temple-78656.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);


            })
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
                                type="name"
                                placeholder="Name"
                                class="input font-semibold input-bordered text-xs w-full max-w-xs"
                                disabled
                                value={user.displayName}
                            />
                            <input
                                name='email'
                                type="text"
                                placeholder="Email"
                                class="input text-xs font-thin input-bordered w-full max-w-xs "
                                disabled
                                value={user.email}
                            />
                            <input
                                name='min_order_quantity
                                '
                                type="text"
                                placeholder="Minimum order quantity"
                                class="input text-xs font-thin input-bordered w-full max-w-xs "
                                disabled
                                value={`Minimum Order Quantity: ${tools.min_order_quantity}`
                                }
                            />
                            <input
                                name='quantity'
                                type="text"
                                placeholder="Quantity"
                                class="input input-bordered w-full max-w-xs"
                            />

                            <input
                                name='address'
                                type="text"
                                placeholder="Address"
                                class="input input-bordered w-full max-w-xs"
                            />
                            {/* {(user > tools.min_order_quantity)
                                ?

                                

                                :

                                <input disabled
                                    type="submit"
                                    value="Order"
                                    class="btn btn-neutral  w-full max-w-xs" />

                            } */}



                            < input
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