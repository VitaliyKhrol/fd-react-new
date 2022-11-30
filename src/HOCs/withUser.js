import UserContext from "../contexts/UserContext";

export const withtUser = (Component) =>(props)=>{
    return (
        <UserContext.Consumer>
            {([user, setUser]) => {
                return <Component  user ={user} setUser={setUser} {...props}/>  
                }
            } 
        </UserContext.Consumer>
    );      
  }