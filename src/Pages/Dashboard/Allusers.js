import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

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
    // }
    return (
        <div>
            <h1>All users {user.length} </h1>
        </div>
    );
};

export default Allusers;