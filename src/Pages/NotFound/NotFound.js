import React from 'react';
import Navbar from '../Shared/Navbar';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='bg-green-50'>
            <Navbar></Navbar>

            <div className=' min-h-screen notfound'>
            </div>
        </div>
    );
};

export default NotFound;