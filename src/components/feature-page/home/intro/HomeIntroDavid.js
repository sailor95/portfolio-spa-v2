import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

import { introString } from '../../../../constants/globalConstants';
import HomeSocialLinks from '../social-links/HomeSocialLinks';
import { HomeNextSubjectButton } from '../smooth-scroll-buttons/HomeSmoothScrollButtons';

const HomeIntroDavid = () => {
    return (
        <Container>
            <Row id="homeIntroDavid" className="justify-content-center align-content-center" style={{ height: '75vh' }}>
                <Col className="col-12"><h1 style={{ fontSize: '4rem' }}>I am David Huang</h1></Col>
                <Col className="col-12">{introString}</Col>
                <Col className="col-12"><HomeSocialLinks /></Col>
                <Col><HomeNextSubjectButton subjectId="homeSkills" marginTop="12rem" /></Col>
            </Row>
        </Container>
    );
}

export default HomeIntroDavid;