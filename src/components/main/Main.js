import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../ui/navbar/Navbar';
import HomePage from '../feature-page/home/HomePage';
import ResumePage from '../feature-page/resume/ResumePage';
import WorksPage from '../feature-page/works/WorksPage';
import PodcastsPage from '../feature-page/podcasts/PodcastsPage';
import PhotosPage from '../feature-page/photos/PhotosPage';
import DesignPage from '../feature-page/design/DesignPage';

const Main = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/resume" component={ResumePage} />
                <Route exact path="/works" component={WorksPage} />
                <Route exact path="/podcasts" component={PodcastsPage} />
                <Route exact path="/photos" component={PhotosPage} />
                <Route exact path="/design" component={DesignPage} />
            </Switch>
        </>
    );
}

export default Main;