import React from 'react';

import BlockIntroDavid from '../../ui/blocks/intro/david/BlockIntroDavid';
import BlockSkills from '../../ui/blocks/skills/BlockSkills';
import BlockWorks from '../../ui/blocks/works/BlockWorks';
import BlockIntroSpa from '../../ui/blocks/intro/spa/BlockIntroSpa';
import classes from './HomePage.module.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className={classes.Layout}>
                <BlockIntroDavid />
                <hr className={classes.Separator} />
                <BlockSkills />
                <hr className={classes.Separator} />
                <BlockWorks />
                <hr className={classes.Separator} />
                <BlockIntroSpa />
            </div>
        );
    }
}

export default HomePage;