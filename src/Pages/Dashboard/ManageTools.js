import React, { useEffect, useState } from 'react';
import ManageToolRow from './ManageToolRow';

const ManageTools = () => {
    const [tool, setTool] = useState([])
    useEffect(() => {
        fetch('https://guarded-temple-78656.herokuapp.com/tools')
            .then(res => res.json()
                .then(data => setTool(data))
            )


    }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool Name</th>
                            <th>Min Order Quantity</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Tool Code</th>
                            <th>Description</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            tool.map((eachToolRow, index) => <ManageToolRow
                                key={tool._id}
                                eachToolRow={eachToolRow}
                                index={index + 1}

                            >

                            </ManageToolRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTools;