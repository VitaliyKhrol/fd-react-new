import UserContext from "../../../../../../contexts/UserContext";

function Innerchild (props) {
    return (
      <UserContext.Consumer>
        {([{firstName,lastName,avatar},callback])=>{
      return (<div style={{border: '2px solid black', padding: '20px'}}>
          <p>Innerchild</p>
          <p>{firstName} {lastName}</p>
          <img src={avatar} />
          <button onClick={callback}>LogOut</button>
        
        </div>
    )
    }}
    </UserContext.Consumer>
    )
}

export default Innerchild;