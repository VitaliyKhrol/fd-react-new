import React,{useState} from "react";
import Calendar from "./components/Calendar";
import { addDays, parse } from 'date-fns';
import UserDashboard from "./components/UserDashboard";
import LoginForm from './components/LoginForm';
import SignUpForm from "./components/SignInForm";
import Squadhelp from "./components/Squadhelp/Login";
import MouseTracker from "./components/MouseTracker";
import WindowSizer2 from "./components/WindowSizer2";
import Timer2 from "./components/Timer2";
import UserDashboard2 from "./components/UserDashboard2";

function App(props){
  const[isVisible,setVisible] = useState(true)
  
return (
    <>
     {isVisible && <UserDashboard2/> }
    </>
)

}
export default App;
