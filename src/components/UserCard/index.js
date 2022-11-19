import React from "react";
import './style.css';

class UserCard extends React.Component{
        // constructor(props) {
        // super(props);
        // }    
        
        render(){
            const {user: {name : {first ,last}, email, picture:{medium}}} = this.props;
            return (
                <div className="card">
                    <img className="imgUser" src={picture} alt={name}/>
                    <div >
                    <h2 className="name">{first} {last}</h2>
                    <p>{email}</p>
                    <button>Continue</button>
                    </div>
                </div>
            )
        }
    } 
    
export default UserCard;