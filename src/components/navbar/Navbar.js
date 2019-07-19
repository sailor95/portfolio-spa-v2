import React from 'react';

import classes from './Navbar.module.css';
import NavButton from '../ui/buttons/NavButton';

class Navbar extends React.Component {
    render() {
        return (
            <div className={classes.Navbar}>
                <NavButton name="Home" url={"/"} />
                <NavButton name="Resume" url={"/resume"} />
                <NavButton name="Works" url={"/works"} />
                <NavButton name="Podcasts" url={"/podcasts"} />
                <NavButton name="Photos" url={"/photos"} />
                <NavButton name="Design" url={"/design"} />
            </div>
        );
    }
}

export default Navbar;