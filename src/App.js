
import React from 'react';
import Greting from './components/Greeting';

class App extends React.Component{

  render(){
    return (
      <section>
        <Greting userName="John"/>
        <Greting userName="John"/>
        <Greting userName="John"/>
        <Greting userName="Josn"/>
      </section>
    )
  }
}
export default App;