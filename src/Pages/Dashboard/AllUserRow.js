import React from 'react';
import { toast } from 'react-toastify';

const AllUserRow = ({ eachUserRow, index }) => {
    const makeAdmin = () => {
        fetch(`https://guarded-temple-78656.herokuapp.com/user/admin/${eachUserRow.email}`, {

            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // refetch();
                toast.success(`Successfully made an admin`);

                // window.setInterval('refresh()', 150000);

                // function refresh() {
                //     window.location.reload();
                // }

            })
    }
    return (




        <tr>
            <th>{index}</th>
            <td>{eachUserRow.email}</td>
            <td className='text-xs font-bold'>{eachUserRow._id}</td>
            {/* <td className='text-xs font-bold'>{eachUserRow.role}</td> */}
            <td>{eachUserRow.role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User X</button></td>

        </tr>
    );
};

export default AllUserRow;