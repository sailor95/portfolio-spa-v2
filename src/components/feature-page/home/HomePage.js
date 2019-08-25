import React from 'react';

import IntroBlockDavid from '../../ui/blocks/intro/IntroBlockDavid';
import SkillSetBlock from '../../ui/blocks/skills/SkillSetBlock';
import RecentWorkBlock from '../../ui/blocks/recentWorks/RecentWorks';
import IntroBlockSpa from '../../ui/blocks/intro/IntroBlockSpa';
import classes from './HomePage.module.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className={classes.Layout}>
                <IntroBlockDavid />
                <hr className={classes.Separator} />
                <SkillSetBlock />
                <hr className={classes.Separator} />
                <RecentWorkBlock />
                <hr className={classes.Separator} />
                <IntroBlockSpa />
            </div>
        );
    }
}

export default HomePage;