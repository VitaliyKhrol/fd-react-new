import Innerchild from './Innerchild';

function Child (props) {
    return (
      <div style={{border: '2px solid black', padding: '20px'}}>
          <p>Child</p>
          <Innerchild/>  
        </div>
    )
}

export default Child;