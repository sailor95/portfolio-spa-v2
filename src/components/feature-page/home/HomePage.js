import React from 'react';

import DavidIntroBlock from '../../ui/blocks/intro-blocks/DavidIntroBlock';
import SkillSetBlock from '../../ui/blocks/skills/SkillSetBlock';
import RecentWorkBlock from '../../ui/blocks/recentWorks/RecentWorks';
import SpaIntroBlock from '../../ui/blocks/intro-blocks/SpaIntroBlock';
import classes from './HomePage.module.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className={classes.Layout}>
                <DavidIntroBlock />
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