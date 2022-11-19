import React from "react";
// import Container from "./components/Grid/GridContainer";
// import Column from "./components/Grid/Column";
// import Row from "./components/Grid/Row";
// import FlexContainer from "./components/FlexContainer";
// import styles from './App.module.css';
import ImageWrapper from './components/ImageWrapper'


class App extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
    <>
      <ImageWrapper
        width = '200px'
        height = '300px'
        onClick={()=>{console.log('Hello')}}
        >
        <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" width='100%' />
      </ImageWrapper>
      <ImageWrapper
      width = '200px'
      height = '300px'
      title = "My super picture"
        >
      <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" width='100%' />
    </ImageWrapper>
    </>
    )
  }
}

export default App;
