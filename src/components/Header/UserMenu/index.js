import React from 'react';
import UserContext from '../../../contexts/UserContext';

const UserMenu = (props) => {
    const {user,setUser} = props;
    if (Object.keys(user).length ===0 ){
        return null;
    }
         return (
            <div style={{ border: '2px solid red' }}>
                <img src={user.avatar} style={{width:'70px', height:'70px', borderRadius:'50%'}} />
                 <span>{user.firstName}</span>
                <span>{user.lastName}</span>
                <button onClick={setUser}>Toggle Theme</button>
                </div>
        )
    }

    const withtUser = (Component) =>(props)=>{
    return (
        <UserContext.Consumer>
            {([user, setUser]) => {
                return <Component  user ={user} setUser={setUser}/>  
                }
            } 
        </UserContext.Consumer>
    );      
}

const wrappedComponent = withtUser(UserMenu);

export default wrappedComponent;

