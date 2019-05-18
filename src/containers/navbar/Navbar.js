import React from 'react';

import NavButton from '../../components/ui/buttons/NavButton';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <NavButton name="Home" />
                <NavButton name="Resume" />
                <NavButton name="Works" />
                <NavButton name="Podcasts" />
                <NavButton name="Photos" />
                <NavButton name="Design" />
            </div>
        );
    }
}

export default Navbar;