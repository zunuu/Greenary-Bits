import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className='bg-violet-50'>
            <Navbar></Navbar>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open Your Dashboard</label>

                </div>
                <div class="drawer-side ">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80  rounded-xl bg-slate-200  text-base-content">
                        {/* <!-- Sidebar content here --> */}


                        {admin ? <>
                            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                            <li><Link to='/dashboard/users'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageOrders'>Manage All Order</Link></li>
                            <li><Link to='/dashboard/manageTools'>Manage All Tools</Link></li>
                            <li><Link to='/dashboard/addTool'>Add A Tool</Link></li>

                        </>
                            :
                            <>
                                <li><Link to='/dashboard/myprofile'>My Profile</Link></li>

                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                <li><Link to='/dashboard/review'>Add a review</Link></li>
                            </>

                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;