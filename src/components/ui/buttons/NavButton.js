import React from 'react';

import classes from './NavButton.module.css';

const NavButton = (props) => {
    console.log(props);
    return (
        <div className={classes.Button}>
            <a href="#">{props.name}</a>
        </div>
    );
}

export default NavButton;