import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUserRow from './AllUserRow';

const Allusers = () => {
    // const { user, isLoading } = useQuery('users', () => fetch('https://guarded-temple-78656.herokuapp.com/user').then(res => res.json())
    // );
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://guarded-temple-78656.herokuapp.com/user')
            .then(res => res.json()
                .then(data => setUser(data))
            )


    }, [])
    // if (isLoading) {
    //     return <Loading></Loading>
    // /}
    return (
        <div>

            {/* <h1>All users {user.length} </h1> */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>User ID</th>
                            <th><></></th>
                            <th><></></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((eachUserRow, index) => <AllUserRow
                                key={user._id}
                                eachUserRow={eachUserRow}
                                index={index + 1}
                            // refetch={refetch}
                            >

                            </AllUserRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Allusers;