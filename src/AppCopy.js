import React, { useState } from "react";
import Tree from "./components/Tree";
import UserContext from "./contexts/UserContext";
import Header from "./components/Header";
import ThemeContext from "./contexts/ThemeContext";
import CONSTANTS from "./constants";
const {THEMES} = CONSTANTS;

function AppCopy(props){

  const [user, setUser] = useState({
        firstName: "Jonh",
        lastName: "Doe",
        email: "mail@gmail.com",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmwWQIrVvOza5_9GSFKoc4yGyeW63v5MTwg&usqp=CAU",
      })

  const [theme,setTheme] =useState(THEMES.LIGHT)
      

  // const changeThemeCallback=(theme)=>{
  //   setTheme(theme)
  // }

  // const logOutCallback = () => {
  //   setUser ({})
  // }

      return (
      <ThemeContext.Provider value={[theme,setTheme]}>
        <UserContext.Provider value={[user,setUser]}>
          <Header />
          <Tree />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  
}

export default AppCopy;
