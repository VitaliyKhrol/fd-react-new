import React, { useState, useEffect } from 'react';
import Spiner from '../Spiner';
import { getUsers } from '../../api';
import UsersList2 from "../UsersList2"

function UserDashboard2() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isFetching, setFetching] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
             getUsers({ page })
            .then(data => {
                setUsers(data.results)
            })
            .catch((error) => {
                setError(
                    error
                )
            })
            .finally(() => {
                setFetching(
                    false
                )
            })
    }, [page])


    const next = () => {
        setPage(page + 1)
    }

    const prev = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }


    return (
        <section>
            <button onClick={prev}>{'< '}</button>
            <span> {page} </span>
            <button onClick={next}>{' >'}</button>
            {error && <div>Oops! Something goes wrong!</div>}
            {users && <UsersList2 users={users} setUsers={setUsers} />}
            {isFetching && <Spiner />}

        </section>
    );

}
export default UserDashboard2;