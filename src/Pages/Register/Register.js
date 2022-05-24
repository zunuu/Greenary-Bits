import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Navbar from '../Shared/Navbar';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    let errorMessage;


    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        errorMessage = <small className='text-orange-700 font-bold '>{error?.message || updateError?.message}</small>
    }
    if (user) {
        console.log(user);
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/');
    }

    return (
        <div className='bg-slate-300 '>
            <Navbar></Navbar>
            <div className="  rounded-3xl bg-green-50 bg-opacity-30 flex h-screen justify-center items-center">
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-3xl font-semibold">REGISTER</h2>





                        <div class="form-control  w-full max-w-xs">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* name  */}
                                <label class="label">
                                    <span class="label-text font-semibold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {

                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' &&
                                        <small class="label-text-alt text-red-700">{errors.name.message}</small>
                                    }

                                </label>
                                {/* email  */}
                                <label class="label">
                                    <span class="label-text font-semibold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {

                                            value: true,
                                            message: 'Email is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.email?.type === 'required' &&
                                        <small class="label-text-alt text-red-700">{errors.email.message}</small>
                                    }

                                </label>
                                {/* password */}
                                <label class="label">
                                    <span class="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {

                                            value: true,
                                            message: 'Password is Required'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' &&
                                        <small class="label-text-alt text-red-700">{errors.password.message}</small>
                                    }

                                </label>
                                {errorMessage} <br />
                                <input className='my-2  btn btn-outline btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-wide ' type="submit" value="REGISTER" />
                                <br />
                                <small className='font-semibold'>Already Have an Account?<Link className='text-blue-500 font-semibold' to='/login'>Please Login</Link></small>
                            </form>
                        </div>







                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;