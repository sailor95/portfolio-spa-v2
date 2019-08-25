import React from 'react';

import HomeIntroDavid from './intro/HomeIntroDavid';
import HomeSkills from './skills/HomeSkills';
import HomeRecentWorks from './recent-works/HomeRecentWorks';
import HomeIntroSpa from './intro/HomeIntroSpa';
import classes from './HomePage.module.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className={classes.Layout}>
                <HomeIntroDavid />
                <hr className={classes.Separator} />
                <HomeSkills />
                <hr className={classes.Separator} />
                <HomeRecentWorks />
                <hr className={classes.Separator} />
                <HomeIntroSpa />
            </div>
        );
    }
}

export default HomePage;