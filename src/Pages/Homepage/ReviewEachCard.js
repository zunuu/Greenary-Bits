import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import dummyAvatar from '../../images/user.png'
const ReviewEachCard = ({ eachreviews }) => {
    // const [user, loading, error] = useAuthState(auth);
    // console.log(user);
    console.log(eachreviews);
    return (
        <div className='py-16 flex justify-center items-center mx-auto'>
            <div class="card card-compact  bg-black bg-opacity-70 my-4 shadow-xl">
                <figure className='bg-purple-300'><img style={{
                    resizeMode: "cover",
                    height: 80,
                    width: 80,
                }}
                    className='rounded-3xl bg-blue-300 ring ring-neutral my-8'
                    src={eachreviews.image ? eachreviews.image : dummyAvatar} alt="Shoes" /></figure>
                <div class="card-body">
                    <p className='text-2xl text-white font-bold '>{eachreviews.name}</p>
                    <p className='text-sm font-normal  text-white rounded p-2'>{eachreviews.review}</p>


                </div>
                <figure className='text-xl py-2 bg-black bg-opacity-90 text-white'>Rating: {eachreviews.ratings}</figure>
            </div>
        </div>
    );
};

export default ReviewEachCard;