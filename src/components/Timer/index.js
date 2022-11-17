import React, { Component } from 'react';
import {format,addSeconds} from 'date-fns';


class Timer extends Component {
    constructor (props){
        super(props);
        this.state ={
            time:new Date(0,0,0,0,0,0),
            isRunning: false
        }
        this.intervalId = null;
    }

    start =() => { 
        this.intervalId = setInterval(()=>{
            const {time} = this.state;
            const newdate = addSeconds(time,1)
            this.setState({
            time: newdate,
            isRunning:true
        })
    },1000);
}
    stop =() =>{
        clearInterval(this.intervalId);
        this.setState({
            isRunning: false
        })
    }
    componentDidMount(){
        // this.start();
    }
    componentWillUnmount(){
        this.stop();
    }
    
    clear =()=> {
        this.setState ({
            time: new Date(0,0,0,0,0,0)
            })
       
        
    }
        
    clickHandler =() =>{
        const {isRunning} = this.state;
        if (isRunning){
            this.stop();
        } else {
                this.start()
            }
        
    }
    

    render() {
       const {time, isRunning} =this.state;
        return (
            <div>
                <h1>{format(time, 'HH:mm:ss')}</h1>
                <button onClick={this.clickHandler}>{ isRunning ?'Stop' : 'Start'}</button>
                <button onClick={this.clear}>Reset</button>
            </div>
        );
    }
}

export default Timer;

