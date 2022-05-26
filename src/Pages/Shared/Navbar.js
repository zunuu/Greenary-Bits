import React from 'react';
import letterIcon from '../../images/icons/b (1).png'
import iconBrand from '../../images/icons/188333.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Button } from 'react-daisyui';
import { signOut } from 'firebase/auth';
import userIcon from "../../images/user.png"
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const navOptions = <>
        <li className='mx-3  navOptions'><Link to='/'>Home</Link></li>
        {/* purchase page won't show on navbar */}
        {/* <li className='mx-3'><Link to='/purchase'>Purchase</Link></li> */}
        <li className='mx-3 navOptions'><Link to='/blogs'>Blogs</Link></li>
        <li className='mx-3 navOptions'><Link to='/contactus'>Contact Us</Link></li>
        <li className='mx-3 navOptions'><Link to='/myportfolio'>My Portfolio</Link></li>
        <li className='mx-3 '>
            {
                user ?
                    <>
                        <Button className='btn  mr-3 forLogInUser' onClick={logout}>Log Out</Button>
                        <Button className='btn  mx-3 forLogInUser' onClick={logout}>Dashboard</Button>


                    </>

                    :
                    <Link to='/login' className=' forLogInUser text-md'>Login</Link>
            }
        </li>

    </>
    return (
        <div>

            <div className='pt-4'>
                <Link to='/' class="  font-semibold text-4xl ">
                    Greenary { }<img className='w-8 pb-2 inline' src={letterIcon} alt="" />its<span className='flip'><img className='letter w-6 pb-3 inline' src={iconBrand} alt="" /></span>
                </Link>
            </div>
            <div class="navbar bg-transperent">

                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost relative bottom-14 bg-green-100 bg-opacity-80  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu text-md menu-compact dropdown-content top-0 mt-3 p-2 shadow bg-green-700 bg-opacity-80 text-white rounded-box w-52">

                            {/* <li tabindex="0">
                                <a class="justify-between">
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}
                            {navOptions}

                        </ul>
                    </div>

                </div>




                {/* desktop nav  */}
                <div class="navbar-center hidden bg-transparent lg:flex">
                    <ul class="menu   text-md font-semibold text-neutral menu-horizontal p-0 pt-1">

                        {/* <li tabindex="0">
                            <a>
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}
                        {navOptions}
                    </ul>

                </div>
                <div class="navbar-end ">
                    {user ?
                        <Link to='/' className='lg:text-lg text-xs font-semibold text-slate-500 flex flex-col justify-center items-center bg-green-50 bg-opacity-50 lg:p-5 sm:p-2 rounded-3xl lg:mt-[-70px] '>
                            {user.photoURL ? <img style={{ width: '50px' }} className='w-100   flex justify-center items-center mask mask-hexagon-2 '
                                src={user.photoURL} alt="" />
                                :
                                <img style={{ width: '30px' }} className='w-100 flex justify-center items-center rounded-full '
                                    src={userIcon} alt="" />
                            }
                            <small className='text-xs px-2'>{user.displayName}</small>
                        </Link>
                        : <></>}

                </div>
            </div>

        </div>
    );
};

export default Navbar;