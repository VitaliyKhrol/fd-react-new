import React, { useState, useEffect } from 'react';
import UserCard2 from '../UserCard2';

function UsersList2(props) {
    const [isSort, setSort] = useState(true);
    const [filterValue, setFilterValue] = useState('');
    
    const filterList = () => {
        return props.users.filter(({ name: { first, last } }) => {
            return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        });
    }

    const userMap = (usersArray) => usersArray.map((userObj) => <UserCard2 user={userObj} key={userObj.login.uuid} />);


    const sortUsers = () => {
        const newUsers = [...props.users];
        console.log(newUsers);
        newUsers.sort((a, b) => (a.name.first > b.name.first && isSort) ? 1 : -1);
        props.setUsers(newUsers);
        setSort(!isSort);
    }

    const changeHandler = ({ target: { value } }) => {
        setFilterValue(value);
        filterList();
    }
   
    return (
        <>
            <button onClick={sortUsers}>Sorted</button>
            <input
                type='text'
                value={filterValue}
                name="filterValue"
                onChange={changeHandler}
            />
            <div className="card-container">
                {userMap(filterList())}
            </div>

        </>
    );

}

export default UsersList2;
