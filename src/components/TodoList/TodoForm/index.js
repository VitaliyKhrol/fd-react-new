import React, { Component } from 'react';
import styles from './TodoForm.module.css';
import cx from 'classnames';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            isInputValid: true
        };
    }

    changeHandler = ({ target: {value,name} }) => {
        if (value.includes('s')){
            this.setState({
                isInputValid:false
            })
        } else {
                this.setState({
                    isInputValid:true
            })
        }
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.sendDatatoParent(this.state.todo)
        this.setState ({
            todo: ''
        })
    }   

    render() {
        const {todo, isInputValid } = this.state;
        const cnames = cx ([styles.input],{
            [styles.valid]: isInputValid,
            [styles.invalid]: !isInputValid,
        });
    
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    placeholder="You item"
                    name='todo'
                    value={todo}
                    onChange={this.changeHandler} 
                    className={cnames}/>
                    <button>Add item</button>
                 </form>
        );
    

    // function cx (objectClassNames) {
    //    return Object
    //    .entries(objectClassNames)
    //    .filter(([cln,condition])=>condition)
    //    .map (([cln,condition]) => cln)
    //    .join(' ');
        
    // }
}
}

export default TodoForm;
