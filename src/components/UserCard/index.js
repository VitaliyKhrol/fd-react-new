import React from "react";
import './style.css';

class UserCard extends React.Component{
        // constructor(props) {
        // super(props);
        // }    
        render(){
            const {user: {id, name, description, profilePicture}} = this.props;
            return (
                <div className="card">
                    <img className="imgUser" src={profilePicture} alt={name}/>
                    <div >
                    <h2 className="name">{name}</h2>
                    <p>{description}</p>
                    <button>Continue</button>
                    </div>
                </div>
            )
        }
    } 
    
export default UserCard;