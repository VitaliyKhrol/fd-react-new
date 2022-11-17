import React from 'react';

const TodoItem = (props) => { 
       
const deleteHandler = () =>{
    const {id, deleteCallback} = props;
    deleteCallback(id);
}   
      return (
        <li>{props.text} <button onClick={deleteHandler}>X</button> </li>
        
      )
    
}


export default TodoItem;
