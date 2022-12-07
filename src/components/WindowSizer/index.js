import React, { Component } from 'react';



class WindowSizer extends Component {
    constructor(props){
        super(props);
        this.state= {
            x:window.innerHeight,
            y:window.innerWidth
        }
    }
    
    componentDidMount(){
        window.addEventListener('resize',this.resizeHandler)
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.resizeHandler)
    }

    resizeHandler = () =>{
        this.setState({
            x:window.innerWidth,
            y:window.innerHeight
        })
    }
    
    render() {
        return this.props.children(this.state);
    }
}

export default WindowSizer;
