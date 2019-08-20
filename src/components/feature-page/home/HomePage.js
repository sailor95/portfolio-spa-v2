import React from 'react';

import IntroBlock from '../../ui/blocks/intro/IntroBlock';
import SkillSetBlock from '../../ui/blocks/skills/SkillSetBlock';
import RecentWorkBlock from '../../ui/blocks/recentWorks/RecentWorks';
import SpaIntroBlock from '../../ui/blocks/intro/SpaIntroBlock';
import classes from './HomePage.module.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className={classes.Layout}>
                <IntroBlock />
                <hr className={classes.Separator} />
                <SkillSetBlock />
                <hr className={classes.Separator} />
                <RecentWorkBlock />
                <hr className={classes.Separator} />
                <SpaIntroBlock />
            </div>
        );
    }
}

export default HomePage;