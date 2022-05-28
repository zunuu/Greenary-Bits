import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const AddAReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const onSubmit = async data => {
        // console.log(data)
        // const img = data.image[0];
        // const formData = new FormData();
        // formData.append('image', img);
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.success) {
        // const img = result.data.url;
        // if(loading){
        //     {<Loadi}
        // }
        const reviewsAll = {
            name: data.username,
            review: data.review,
            ratings: data.ratings,
            image: data.image,
            // image: img


        }
        // console.log(reviewsAll);
        // console.log(tool.name, tool.available_quantity, tool.min_order_quantity, tool.price, tool.short_description);


        fetch('https://guarded-temple-78656.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },

            body: JSON.stringify(reviewsAll)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted);
            })
        // }
        // console.log('result got from imagebb', result);
        // })
        navigate('/')
    }
    return (
        <div>
            <div className='flex justify-center  mx-auto items center'>
                <div class="form-control  w-full max-w-xs">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* user name  */}

                        {/* <input disabled
                            type="text"
                            

                            // {...register("displayName", {
                            //     required: {

                            //         value: true,
                            //     }
                            // })}
                            value={user.displayName}



                        /> */}
                        <label class="label">
                            <span class="label-text font-semibold">Your Name</span>
                        </label>
                        <input class="input input-bordered w-full max-w-xs mb-8" defaultValue={user.displayName} {...register("username")} />




                        <input class="input input-bordered w-full max-w-xs mb-8" defaultValue={user.photoURL} {...register("image")} />


                        {/* description */}




                        <label class="label">
                            <span class="label-text font-semibold">Add your review</span>
                        </label>
                        <textarea
                            rows="10" cols="50"
                            type="text"
                            placeholder="review"
                            class="input input-bordered w-full max-w-xs"
                            {...register("review", {
                                required: {

                                    value: true,
                                    message: 'Review is Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.review?.type === 'required' &&
                                <small class="label-text-alt text-red-700">{errors.review.message}</small>
                            }

                        </label>



                        {/* ratings */}


                        <label class="label">
                            <span class="label-text font-semibold">Your rating</span>
                        </label>
                        <input
                            type="text"
                            placeholder="ratings"
                            class="input input-bordered w-full max-w-xs"
                            {...register("ratings", {
                                required: {

                                    value: true,
                                    message: 'ratings is Required'
                                }
                            })}
                        />
                        <label class="label">
                            {errors.ratings?.type === 'required' &&
                                <small class="label-text-alt text-red-700">{errors.ratings.message}</small>
                            }

                        </label>





                        <input className='my-2  btn btn-outline btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-wide ' type="submit" value="ADD REVIEW" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default AddAReview;