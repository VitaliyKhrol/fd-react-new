import React from "react";
import Parent from './Parent';
import styles from './Tree.module.css';
import cx from 'classnames';
import CONSTANTS from "../../constants";
import { withtTheme } from "../../HOCs/withTheme";
import { withtUser } from "../../HOCs/withUser";
const { THEMES } = CONSTANTS;

function Tree(props) {
  const{user,setUser,theme,setTheme} = props;  
  const cn = cx(styles.container, {
                  [styles.darkTheme]: theme === THEMES.DARK,
                  [styles.lightTheme]: theme === THEMES.LIGHT
                })
                return (
                  <div className={cn}>
                    <p>{user.firstName}</p>
                    <p>Tree</p>
                    <Parent />
                  </div>
                )
}

const TreeWithUser= withtUser(Tree);
const TreeWithUserWithTheme = withtTheme(TreeWithUser);
export default TreeWithUserWithTheme;


