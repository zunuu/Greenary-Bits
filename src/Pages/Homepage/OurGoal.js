import React from 'react';
import CountDown from './CountDown';
import GoalsCard from './GoalsCard';
import NewProduct from './NewProduct';
const OurGoal = () => {
    return (

        <div>
            < div class="p-10 border-opacity-50" >

                <div class="divider step text-4xl font-semibold">Our Goal</div>

            </div >
            <ul class="steps steps-vertical lg:steps-horizontal">
                <li data-content="🔎" class="step  step-primary">Analyze the market &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>
                <li data-content="💡" class="step step-primary">Choose plan</li>
                <li data-content="🛠️" class="step step-primary">Starts for Production</li>
                <li data-content="👌" class="step ">Quality Assurance</li>
                <li data-content="🚩" class="step ">Shipping</li>
            </ul>

            <h3 className='pt-28 text-2xl font-semibold text-neutral py-12'>Stay in touch for our upcoming exciting Package gardening tools</h3>
            {/* <CountDown></CountDown> */}
            <NewProduct></NewProduct>

        </div >

    );
};

export default OurGoal;