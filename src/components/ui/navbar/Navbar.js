import React from 'react';

import classes from './Navbar.module.css';
import NavbarButton from './button/NavbarButton';

class Navbar extends React.Component {
    render() {
        return (
            <div className={classes.Navbar}>
                <NavbarButton name="Home" url={"/"} />
                <NavbarButton name="Resume" url={"/resume"} />
                <NavbarButton name="Works" url={"/works"} />
                <NavbarButton name="Podcasts" url={"/podcasts"} />
                <NavbarButton name="Photos" url={"/photos"} />
                <NavbarButton name="Design" url={"/design"} />
            </div>
        );
    }
}

export default Navbar;