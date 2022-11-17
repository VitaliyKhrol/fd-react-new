import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }


    chahgeHandler = ({ target: { value,name } }) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="Type your email"
                        name='email'
                        value={this.state.email}
                        onChange={this.chahgeHandler} />
                
                    <input
                        type="text"
                        placeholder="Type your email"
                        name='password'
                        value={this.state.name}
                        onChange={this.chahgeHandler} />
                    <button>Click</button>
                </form>
            </div>
        )
    }
}


export default LoginForm;