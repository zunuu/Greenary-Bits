import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyOrder = () => {
    const [order, setOrder] = useState([]);

    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://guarded-temple-78656.herokuapp.com/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then(data => {
                    setOrder(data)
                });
        }
    }, [user])
    return (
        <div>
            this is order subsection {order.length}

            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tools Name</th>
                                <th>Quantity</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.map((eachOrder, index) => <tr class="hover">
                                    <th>{index + 1}</th>
                                    <td>{eachOrder.toolName}</td>
                                    <td>{eachOrder.quantity}</td>
                                    <td>{eachOrder.address}</td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyOrder;