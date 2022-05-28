import React from 'react';
import { useForm } from 'react-hook-form';

const AddTools = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageStorageKey = '036ddba445112d04ef2fcf8f886c3147';

    const onSubmit = async data => {
        console.log(data)
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const newtool = {
                        name: data.toolname,
                        short_description: data.des,
                        min_order_quantity: data.minimum,
                        available_quantity: data.availibility,
                        price: data.perunit,
                        image: img


                    }
                    // console.log(tool.name, tool.available_quantity, tool.min_order_quantity, tool.price, tool.short_description);


                    fetch('https://guarded-temple-78656.herokuapp.com/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },

                        body: JSON.stringify(newtool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                        })
                }
                console.log('result got from imagebb', result);
            })

    }
    return (
        <div className='flex justify-center  mx-auto items center'>
            <div class="form-control  w-full max-w-xs">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* tool name  */}
                    <label class="label">
                        <span class="label-text font-semibold">Tool Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Tool Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("toolname", {
                            required: {

                                value: true,
                                message: 'Tool Name is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.toolname?.type === 'required' &&
                            <small class="label-text-alt text-red-700">{errors.toolname.message}</small>
                        }

                    </label>




                    {/* description */}




                    <label class="label">
                        <span class="label-text font-semibold">Add a short description</span>
                    </label>
                    <textarea
                        rows="10" cols="50"
                        type="text"
                        placeholder="Short Description"
                        class="input input-bordered w-full max-w-xs"
                        {...register("des", {
                            required: {

                                value: true,
                                message: 'Short Description is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.des?.type === 'required' &&
                            <small class="label-text-alt text-red-700">{errors.des.message}</small>
                        }

                    </label>



                    {/* Available quantity */}


                    <label class="label">
                        <span class="label-text font-semibold">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Availibility"
                        class="input input-bordered w-full max-w-xs"
                        {...register("availibility", {
                            required: {

                                value: true,
                                message: 'Availibity is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.availibility?.type === 'required' &&
                            <small class="label-text-alt text-red-700">{errors.availibility.message}</small>
                        }

                    </label>



                    {/* Minimum order  */}


                    <label class="label">
                        <span class="label-text font-semibold">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        class="input input-bordered w-full max-w-xs"
                        {...register("minimum", {
                            required: {

                                value: true,
                                message: 'Minimum Order Quantity is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.minimum?.type === 'required' &&
                            <small class="label-text-alt text-red-700">{errors.minimum.message}</small>
                        }

                    </label>


                    {/* perunit  price  */}


                    <label class="label">
                        <span class="label-text font-semibold">Per Unit  price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Per Unit  price"
                        class="input input-bordered w-full max-w-xs"
                        {...register("perunit", {
                            required: {

                                value: true,
                                message: 'Per Unit Price is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.perunit?.type === 'required' &&
                            <small class="label-text-alt text-red-700">{errors.perunit.message}</small>
                        }

                    </label>


                    {/*photo form gallery*/}


                    <label class="label">
                        <span class="label-text font-semibold">Photo</span>
                    </label>
                    <input
                        type="file"

                        class="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {

                                value: true,
                                message: 'Photo is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.image?.type === 'required' &&
                            <small class="label-text-alt text-red-700">{errors.image.message}</small>
                        }

                    </label>

                    <input className='my-2  btn btn-outline btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-wide ' type="submit" value="ADD TOOL" />
                </form>
            </div>
        </div>
    );
};

export default AddTools;