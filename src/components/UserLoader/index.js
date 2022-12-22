import React from 'react';
import useData from '../../hooks/useData';
import {getUsers} from '../../api/user';


function UserLoader (props){
    const {data, isFetching, error} = useData(getUsers);

    return (
        <ul>
            {data.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
    )

}
export default UserLoader;