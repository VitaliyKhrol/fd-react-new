import React, { Component } from "react";

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log('Компонента була оновленна')
  }
  componentWillUnmount(){
    console.log('Щас помру')
  }


  render() {
    console.log("render");
    return (
      <div>
        <h1>Tree{this.state.bool}</h1>
        <button onClick={()=>(this.setState({bool:false}))}>Click</button>
      </div>
    );
  }
}

export default Tree;
