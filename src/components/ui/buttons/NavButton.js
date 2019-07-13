import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavButton.module.css';

const NavButton = (props) => {
    return (
        <div className={classes.Nav}>
            <NavLink exact to={props.url} className={`text-decoration-none text-dark ${classes.Base}`} activeClassName={classes.Selected}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default NavButton;