import React from "react";
import Tree from "./components/Tree";
import UserContext from "./contexts/UserContext";
import Header from "./components/Header";
import ThemeContext from "./contexts/ThemeContext";
import CONSTANTS from "./constants";
 
const {THEMES} = CONSTANTS;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "Jonh",
        lastName: "Doe",
        email: "mail@gmail.com",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmwWQIrVvOza5_9GSFKoc4yGyeW63v5MTwg&usqp=CAU",
      },
      theme:THEMES.LIGHT
    };
  }

  changeThemeCallback=(theme)=>{
    this.setState({
     theme
    })
  }

  logOutCallback = () => {
    this.setState({
      user: {},
    });
  }

  render() {
    const{user,theme} = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.changeThemeCallback]}>
        <UserContext.Provider value={[user, this.logOutCallback]}>
          <Header />
          <Tree />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
