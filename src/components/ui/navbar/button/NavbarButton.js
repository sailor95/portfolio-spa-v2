import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavbarButton.module.css';

const NavbarButton = (props) => {
    return (
        <div className={classes.Nav}>
            <NavLink exact to={props.url} className={`text-decoration-none text-dark ${classes.Base}`} activeClassName={classes.Selected}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default NavbarButton;