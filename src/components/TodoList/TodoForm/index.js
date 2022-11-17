import React, { Component } from 'react';
import styles from './TodoForm.module.css'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        };
    }

    changeHandler = ({ target: {value,name} }) => {

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
        const {todo} = this.state;
        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                <input
                    type="text"
                    placeholder="You item"
                    name='todo'
                    value={todo}
                    onChange={this.changeHandler} />
                    className={styles.valid}
                    <button>Add item</button>
                 </form>
        );
    }

    function cx (objectClassName) {
        
    }


}

export default TodoForm;
