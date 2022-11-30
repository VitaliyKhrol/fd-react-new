import { render } from "@testing-library/react";
import React from "react";
import ThemeContext from "../contexts/ThemeContext";

// export const withtTheme = (Component) =>{
//     return (
//         <ThemeContext.Consumer>
//             {([theme, setTheme]) => {
//                 return <Component  theme ={theme} setTheme={setTheme}/>
//                 }
//             }
//         </ThemeContext.Consumer>
//     );
//   }

// Классова HOC
export const withtTheme = (Component) => {
    return class extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {([theme, setTheme]) => {
                        return <Component theme={theme} setTheme={setTheme} {...this.props}/>;
                    }}
                </ThemeContext.Consumer>
            );
        }
    };
};
