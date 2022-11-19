// import React, { Component } from 'react';
// import { getUsers } from '../../api';
// import UserCard from "../UserCard";
// import getUsers from "../../api/index"
// // import {userData} from "./userData";
// import './components/UserCard/style.css';


// class UserDashboard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             users: [],
//             isSort: true,
//             error: null,
//             isFetching:true
//         }
//     }
//     componentDidMount() {
//         this.getData();
//     }

//     getData = () => {
//         getUsers()       
//             .then(data => {
//                 this.setState({
//                     user: data.results,
//                 })
//             })
//             .catch((error)=>{
//                 this.setState({
//                     error,
//                  })
//             })
//             .finally(()=>{
//                 this.setState({
//                 isFetching: false
//             })
//         })
//     }

//     userMap = () => this.state.users.map((userObj) => <UserCard user={userObj} key={userObj.login.uuid} />);

//     sortUsers = () => {
//         const { users, isSort } = this.state;
//         const newUsers = [...users];
//         newUsers.sort((a, b) => (a.name > b.name && isSort) ? 1 : -1);
//         this.setState({
//             users: newUsers,
//             isSort: !isSort
//         })
//     }

//     render() {
//         const{user,error} = this.state;
//         return (
//             <section>
//                 <button onClick={this.sortUsers}>Sorted</button>
//                 {error && <div> OOps! </div>}
//                 {user && (<div> className="container">
//                     {this.userMap()}
//                 }</div>
//             </section>
//         )
//     }
// }

// export default UserDashboard;
