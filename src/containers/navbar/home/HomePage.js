import React from 'react';

import IntroBlock from '../../../components/ui/intro/IntroBlock';
import { LinkBlock } from '../../../components/ui/links/LinkBlock';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <IntroBlock />
                <LinkBlock />
                <hr />
                <h3>Skill Set</h3>
                <h5>Skill blocks UI</h5>
                <hr />
                <p>Recent works</p>
                <p>work 1 | work 2 | work 3</p>
                <hr />
                <p>linkedin | GitHub | Medium</p>
                <br />
                <p>This SPA is made by me, code & doc.</p>
            </div>
        );
    }
}

export default HomePage;