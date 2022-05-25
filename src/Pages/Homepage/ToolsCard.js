import React from 'react';
import { Link } from 'react-router-dom';
import './ToolsCard.css'
const ToolsCard = ({ eachtool, setPurchaseModal }) => {

    return (
        <div className='px-8 pb-8 '>
            <div class=" card rounded-3xl lg:card-side bg-base-100 shadow-xl">
                <figure className='bg-green-300 bg-opacity-30 '><img className='lg:w-fit' src={eachtool.image} alt="Album" /></figure>
                <div>
                    <div class="card-body ">
                        <h2 class=" text-center text-3xl font-bold">{eachtool.name}</h2>
                        <div class="card w-100  bg-green-300 bg-opacity-25 my-2 ">

                            <div class="card-body tools_descrip items-center text-center">
                                <p className='text-sm font-medium'>{eachtool.short_description}</p>

                            </div>
                        </div>



                        <div class="flex flex-col w-full lg:flex-row">
                            <div class="grid flex-grow h-16 card bg-base-200 rounded-box place-items-center font-bold">
                                Minimum Order Quantity: { }{eachtool.min_order_quantity}</div>
                            <div class="divider lg:divider-horizontal"></div>
                            <div class="grid flex-grow h-16 card bg-base-200 rounded-box place-items-center font-bold">Available Quantity: { }{eachtool.available_quantity}</div>
                        </div>
                        <p className='font-bold text-2xl p-4 bg-green-300 bg-opacity-20 rounded-full'>Price: { }{eachtool.price}/Unit</p>
                        <div class="card-actions justify-center">


                            <label
                                for="toolPurchaseModal"
                                onClick={() => setPurchaseModal(eachtool)}
                                class="btn btn-primary"
                            >
                                Purchase
                            </label>
                        </div>
                        {/* <div class="grid  w-52  flex-grow justify-center h-20 card bg-base-200 rounded-box place-items-center font-bold">Available:{eachtool.available_quantity}</div> */}

                    </div>
                </div>

            </div>

        </div >
    );
};

export default ToolsCard;