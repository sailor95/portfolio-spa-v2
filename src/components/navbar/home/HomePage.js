import React from 'react';

import IntroBlock from '../../ui/blocks/intro/IntroBlock';
import LinkBlock from '../../ui/blocks/links/LinkBlock';
import SkillSetBlock from '../../ui/blocks/skills/SkillSetBlock';
import classes from './HomePage.module.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className={classes.Layout}>
                <IntroBlock />
                <LinkBlock />
                <hr className={classes.Separator} />
                <SkillSetBlock />
                <hr className={classes.Separator} />
                <p>Recent works</p>
                <p>work 1 | work 2 | work 3</p>
                <hr className={classes.Separator} />
                <br />
                <p>This SPA is made by me, code & doc.</p>
            </div>
        );
    }
}

export default HomePage;