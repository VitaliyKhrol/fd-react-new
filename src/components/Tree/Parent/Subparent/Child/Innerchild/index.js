import UserContext from '../../../../../../contexts/UserContext';
import { useContext } from 'react'

function Innerchild(props) {
  const [user,setUser] =useContext(UserContext)
  return (
    <div style={{ border: 'inherit', padding: '20px' }}>
      <p>Innerchild</p>
      <p>{user.firstName} {user.lastName}</p>
      <img src={user.avatar} />
      <button onClick={setUser}>LogOut</button>
    </div>
  )
}

export default Innerchild;