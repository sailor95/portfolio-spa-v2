import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../../containers/navbar/Navbar';
import HomePage from '../../containers/navbar/home/HomePage';
import ResumePage from '../../containers/navbar/resume/ResumePage';
import WorksPage from '../../containers/navbar/works/WorksPage';
import PodcastsPage from '../../containers/navbar/podcasts/PodcastsPage';
import PhotosPage from '../../containers/navbar/photos/PhotosPage';
import DesignPage from '../../containers/navbar/design/DesignPage';

const Main = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/resume" component={ResumePage} />
                <Route exact path="/works" component={WorksPage} />
                <Route exact path="/podcasts" component={PodcastsPage} />
                <Route exact path="/photos" component={PhotosPage} />
                <Route exact path="/design" component={DesignPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Main;