import {withtUser} from '../../../../../../HOCs/withUser'

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

const wrappedComponent = withtUser(Innerchild);

export default wrappedComponent;