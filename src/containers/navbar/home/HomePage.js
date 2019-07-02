import React from 'react';

import IntroBlock from '../../../components/ui/intro/IntroBlock';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <IntroBlock />
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