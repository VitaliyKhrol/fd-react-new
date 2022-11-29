import UserContext from "../../../../../../contexts/UserContext";

function Innerchild(props) {
  const { user: { firstName, lastName, avatar }, setUser } = props;
  return (<div style={{ border: 'inherit', padding: '20px' }}>
    <p>Innerchild</p>
    <p>{firstName} {lastName}</p>
    <img src={avatar} />
    <button onClick={setUser}>LogOut</button>
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

const wrappedComponent = withtUser(Innerchild);

export default wrappedComponent;