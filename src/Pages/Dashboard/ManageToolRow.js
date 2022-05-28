import React from 'react';

const ManageToolRow = ({ eachToolRow, index }) => {




    return (

        <tr>
            <th>{index}</th>
            <td>{eachToolRow.name}</td>
            <td>{eachToolRow.min_order_quantity}</td>
            <td>{eachToolRow.available_quantity}</td>
            <td className='text-xs font-bold'>{eachToolRow.price}</td>

            <td className='text-xs font-bold'>{eachToolRow._id}</td>
            <textarea className='text-xs font-bold'>{eachToolRow.short_description}</textarea>

        </tr>

    );
};

export default ManageToolRow;