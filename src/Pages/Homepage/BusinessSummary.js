import React from 'react';
import './BusinessSummary.css'
import retailIcon from '../../images/icons/retail.png'
import revenueIcon from '../../images/icons/business-and-finance.png'
import toolsIcon from '../../images/icons/gardening.png'
import countriesIcon from '../../images/icons/location.png'
const BusinessSummary = () => {
    return (
        <div className='business_sum pt-4'>
            <div className='bg-white p-11 mx-8 rounded-2xl'>
                <h2 className='text-neutral text-4xl uppercase font-semibold'>Hundreds of Retailer Accross the Globe</h2>

                <div class=" stats p-8 stats-vertical lg:stats-horizontal ">

                    <div class="stat ">
                        <div class="stat-figure text-primary">
                            <img src={retailIcon} alt="" />
                        </div>
                        <div class="stat-title">Happy Retailer</div>
                        <div class="stat-value">100+</div>
                        <div class="stat-desc">1992 - 2022</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={revenueIcon} alt="" />
                        </div>
                        <div class="stat-title">Annual revenue</div>
                        <div class="stat-value">66M+</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
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
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;