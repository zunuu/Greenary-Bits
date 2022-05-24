import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';



const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let errorMessage;


    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    if (error || googleError) {
        errorMessage = <small className='text-orange-700 font-bold '>{error?.message || googleError?.message}</small>
    }
    if (googleUser) {
        console.log(googleUser);
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);
    }



    return (
        <div className='bg-slate-300 '>
            <Navbar></Navbar>
            <div className="m-14 mt-8 rounded-3xl bg-green-50 bg-opacity-30 flex h-screen justify-center items-center">
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-3xl font-semibold">LOGIN</h2>





                        <div class="form-control w-full max-w-xs">
                            <form onSubmit={handleSubmit(onSubmit)}>

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
                                {errorMessage}
                                <input className='my-2  btn btn-outline btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-wide ' type="submit" value="LOGIN" />
                            </form>
                        </div>






                        <div className='divider'>OR</div>
                        <button onClick={() => signInWithGoogle()}
                            class="btn btn-outline btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                        ><small>Sign In With Google</small></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;