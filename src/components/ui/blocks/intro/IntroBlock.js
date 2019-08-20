import React from 'react';
import {
    Container,
    Row
} from 'react-bootstrap';

import { introString } from '../../../../constants/globalConstants';

const IntroBlock = () => {
    return (
        <Container>
            <Row className="justify-content-center align-content-center" style={{ height: '75vh' }}>
                <h1 style={{ fontSize: '4rem' }}>I am David Huang</h1>
                {introString}
            </Row>
        </Container>
    );
}

export default IntroBlock;