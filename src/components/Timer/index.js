import React, { Component } from 'react';

class Timer extends Component {
    constructor (props){
        super(props);
        this.state ={
            count:0
        }
        this.intervalId = null;
    }

    start =() => { 
        this.intervalId = setInterval(()=>{
            const {count} = this.state;
            this.setState({
            count: count +1
        })
    }, 1000);
}
    stop =() =>{
        clearInterval(this.intervalId)
    }
    componentDidMount(){
        this.start();
    }
    componentWillUnmount(){
        this.stop();
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.stop}>Stop</button>
            </div>
        );
    }
}

export default Timer;

