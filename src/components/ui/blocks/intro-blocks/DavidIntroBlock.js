import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import { introString } from '../../../../constants/globalConstants';
import LinkBlock from '../link-blocks/LinkBlock';

const DavidIntroBlock = () => {
    return (
        <Container>
            <Row className="justify-content-center align-content-center" style={{ height: '75vh' }}>
                <Col className="col-12"><h1 style={{ fontSize: '4rem' }}>I am David Huang</h1></Col>
                <Col className="col-12">{introString}</Col>
                <Col className="col-12"><LinkBlock /></Col>
            </Row>
        </Container>
    );
}

export default DavidIntroBlock;