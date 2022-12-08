import React,{useContext} from "react";
import styles from "./Header.module.css";
import UserMenu from "./UserMenu";
import CONSTANTS from "../../constants";
import { withtTheme } from "../../HOCs/withTheme";
import ThemeContext from "../../contexts/ThemeContext";
const { THEMES } = CONSTANTS;

function Header(props) {
const [theme, setTheme] =useContext(ThemeContext)

    const changeTheme = () => {
        const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        setTheme(newTheme);
    }
    
    return (
        <div className={styles.header}>
            <div style={{ border: '2px solid red' }}>
                LogoText
            </div>
            <button onClick={changeTheme}>Toogle There</button>
            <UserMenu />
        </div>
    );

}

const HeaderwithTheme = withtTheme(Header);
export default HeaderwithTheme;

