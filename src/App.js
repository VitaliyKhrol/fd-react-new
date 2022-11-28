import React from "react";
import Tree from "./components/Tree";
import UserContext from "./contexts/UserContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      user:{
        firstName:'Jonh',
        lastName:'Doe',
        email:'mail@gmail.com',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmwWQIrVvOza5_9GSFKoc4yGyeW63v5MTwg&usqp=CAU'
      }
    }
  };

logOutCallback =() =>{
  this.setState({
    user:{}
  })
}
  render() {
    console.log(UserContext);
    return (
      <UserContext.Provider value= {[this.state.user, this.logOutCallback]}>
      <Tree/>
      </UserContext.Provider>
    )
  }
}

export default App;
