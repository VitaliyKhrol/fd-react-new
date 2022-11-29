import UserContext from "../contexts/UserContext";

export const widthUser =(Component) =>(props) =>(
    <UserContext.Consumer>
        {([user,setUser])=>{
            return <Component user={user} setUser={setUser}/>
        }}
    </UserContext.Consumer>
);