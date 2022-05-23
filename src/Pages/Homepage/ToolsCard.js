import React from 'react';
import './ToolsCard.css'
const ToolsCard = ({ eachtool }) => {

    return (
        <div className='px-8 pb-8'>
            <div class=" card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={eachtool.image} alt="Album" /></figure>
                <div class="card-body w-96">
                    <h2 class=" text-center text-2xl font-semibold">{eachtool.name}</h2>
                    <div class="card w-100  bg-green-300 bg-opacity-25 my-2 ">

                        <div class="card-body tools_descrip items-center text-center">
                            <p>{eachtool.short_description}</p>

                        </div>
                    </div>



                    <div class="flex flex-col w-full lg:flex-row">
                        <div class="grid flex-grow h-16 card bg-base-200 rounded-box place-items-center font-bold">
                            Minimum Order Quantity: { }{eachtool.min_order_quantity}</div>
                        <div class="divider lg:divider-horizontal"></div>
                        <div class="grid flex-grow h-16 card bg-base-200 rounded-box place-items-center font-bold">Available Quantity: { }{eachtool.available_quantity}</div>
                    </div>
                    <p className='font-bold'>Price: { }{eachtool.price}/Unit</p>
                    <div class="card-actions justify-center">


                        <button class="btn btn-primary">Purchase</button>
                    </div>
                    {/* <div class="grid  w-52  flex-grow justify-center h-20 card bg-base-200 rounded-box place-items-center font-bold">Available:{eachtool.available_quantity}</div> */}

                </div>

            </div>

        </div>
    );
};

export default ToolsCard;