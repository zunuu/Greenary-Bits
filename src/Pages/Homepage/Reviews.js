import React, { useEffect, useState } from 'react';
import ReviewEachCard from './ReviewEachCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);




    useEffect(() => {
        fetch('https://guarded-temple-78656.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }
        , [])
    return (
        <div>
            < div class="p-10 border-opacity-50" >

                <div class="divider text-4xl font-semibold">REVIEWS</div>


                <div className='grid lg:grid-cols-3 justify-center items-center mx-auto'>
                    {
                        reviews.map(eachreviews => <ReviewEachCard
                            key={eachreviews._id}
                            eachreviews={eachreviews}
                        >

                        </ReviewEachCard>)
                    }
                </div>

            </div >





        </div>
    );
};

export default Reviews;