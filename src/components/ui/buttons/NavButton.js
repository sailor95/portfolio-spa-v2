import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavButton.module.css';

const NavButton = (props) => {
    console.log(props);
    return (
        <div className={classes.Nav}>
            <NavLink exact to={props.url} className={classes.Base} activeClassName={classes.Selected}>{props.name}</NavLink>
        </div>
    );
}

export default NavButton;