import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { workSet } from '../../../../constants/globalConstants';
import RecentWorks from './RecentWorks';

const RecentWorkBlock = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center align-content-center" style={{ height: '55vh' }}>
                    <Col className="col-12">
                        <h2 style={{ fontSize: '2rem', margin: '2rem auto' }}>
                            Recent Works
                        </h2>
                    </Col>
                    <RecentWorks workSet={workSet} />
                </Row>
            </Container>
        </>
    );
}

export default RecentWorkBlock;