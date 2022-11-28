import React, { Component } from 'react';
import UserCard from '../UserCard';

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSort: true,
            filterValue: ''
        }
    }
    filterList = () => {
        const { filterValue } = this.state;
        return this.props.users.filter(({ name: { first, last } }) => {
            return first.toLowerCase().includes(filterValue) || last.toLowerCase().includes(filterValue)
        });
    }

    userMap = (usersArray) => usersArray.map((userObj) => <UserCard user={userObj} key={userObj.login.uuid} />);


    // sortUsers = (usersArray) => {
    //     const { isSort } = this.state;
    //     return usersArray.sort((a, b) => (a.name > b.name && isSort) ? 1 : -1);

    // }

    changeHandler = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
        this.filterList();
    }

    render() {
        const { filterValue } = this.state;
        return (
            <>
                {/* <button onClick={this.sort}>Sorted</button> */}
                <input
                    type='text'
                    value={filterValue}
                    name="filterValue"
                    onChange={this.changeHandler}
                />
                <div className="card-container">
                    {this.userMap(this.filterList())}
                </div>

            </>
        );
    }
}

export default UsersList;
