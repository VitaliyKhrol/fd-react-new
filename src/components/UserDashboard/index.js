import React, { Component } from 'react';
import UserCard from "../UserCard";
import {userData} from "./userData";
// import './components/UserCard/style.css';


class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: userData,
            isSort: true
        }
    }

    userMap = () => this.state.users.map((userObj) => <UserCard user={userObj} key={userObj.id}/>);

    sortUsers = () => {
      const {users, isSort} = this.state;
      const newUsers = [...users];
      newUsers.sort((a,b) => (a.name > b.name && isSort) ? 1 : -1);
      this.setState({
          users: newUsers,
          isSort: !isSort
      })
  }

    render() {
        return (
            <section>
                <button onClick={this.sortUsers}>Sorted</button>
                <div className="container">
                {this.userMap()}
                </div>
            </section>
        )
    }
}

export default UserDashboard;
