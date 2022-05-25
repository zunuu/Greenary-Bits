import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Navbar from '../../Shared/Navbar';

const Purchase = ({ purchaseModal, setPurchaseModal }) => {
    const [user, loading, error] = useAuthState(auth);


    const handlePurchase = event => {
        event.preventDefault();
        const orderedQuantity = event.target.Quantity.value
        console.log(purchaseModal.name, orderedQuantity);



        // modal off after submitting for purchase 
        setPurchaseModal(null)
    }

    return (

        <div className='bg-green-300 bg-opacity-50'>

            <input type="checkbox" id="toolPurchaseModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box bg-slate-100 bg-opacity-90">
                    <label for="toolPurchaseModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <div className='lg:flex lg:flex-row-reverse  justify-center items-center'>

                        <div className='grow-0 flex p-4 justify-center items-center'>
                            <div class="card bg-base-100 shadow-xl">
                                <figure class="px-1 pt-2">
                                    <img src={purchaseModal.image} alt="Shoes" class="mask mask-circle w-[100px]" />
                                </figure>
                                <div class="card-body  items-center text-center">
                                    <h2 class="card-title font-bold">{purchaseModal.name}</h2>
                                    <p className='text-xs font-normal'>{purchaseModal.short_description}</p>
                                    <div class="card-actions">
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className='grow bg-emerald-200 rounded-xl flex p-4 lg:w-[800px] justify-center items-center'>
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
                                    type="submit"
                                    value="Order"
                                    class="btn btn-neutral  w-full max-w-xs" />
                            </form>
                        </div>

                    </div>



                    <div class="modal-action">
                        <label for="toolPurchaseModal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;