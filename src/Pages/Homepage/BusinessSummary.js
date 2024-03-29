import React from 'react';
import './BusinessSummary.css'
import retailIcon from '../../images/icons/retail.png'
import revenueIcon from '../../images/icons/business-and-finance.png'
import toolsIcon from '../../images/icons/gardening.png'
import countriesIcon from '../../images/icons/location.png'
const BusinessSummary = () => {
    return (
        <div className='business_sum pt-4'>
            < div class="p-10 border-opacity-50" >
                <div class="divider text-4xl font-semibold">Business Summary</div>
            </div >
            <div className='bg-white lg:p-16 mx-8 lg:rounded-full rounded-3xl'>
                <h2 className='text-neutral text-2xl uppercase font-semibold px-8 lg:pt-0 pt-8'>Hundreds of Retailer Accross the Globe</h2>

                <div class=" stats p-8 lg:mb-0 sm:mb-7 stats-vertical lg:stats-horizontal ">

                    <div class="stat ">
                        <div class="stat-figure text-primary">
                            <img src={retailIcon} alt="" />
                        </div>
                        <div class="stat-title">Clients</div>
                        <div class="stat-value">45+</div>
                        <div class="stat-desc">1992-2022</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={revenueIcon} alt="" />
                        </div>
                        <div class="stat-title">Revenue</div>
                        <div class="stat-value">9M+</div>
                        <div class="stat-desc">↗︎<small>Per.M(8%)</small></div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={toolsIcon} alt="" />
                        </div>
                        <div class="stat-title">Tools</div>
                        <div class="stat-value">30+</div>
                        <div class="stat-desc">1997-2022</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={countriesIcon} alt="" />
                        </div>
                        <div class="stat-title">Countries</div>
                        <div class="stat-value">18</div>
                        <div class="stat-desc">↗︎ 7 (14%)</div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default BusinessSummary;