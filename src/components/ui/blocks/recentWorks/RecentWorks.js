import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { workSet } from '../../../../constants/globalConstants';

const RecentWorkBlock = () => {
    return (
        <>
            <h3>Recent Works</h3>
            <Container>
                <Row>
                    <RecentWroks workSet={workSet} />
                </Row>
            </Container>
        </>
    );
}

const RecentWroks = ({ workSet }) => {
    return Object.keys(workSet).map(work => {
        let techs = [];
        techs = workSet[work].techs.map(tech => {
            return (
                <Row md="auto" className="border" key={tech.name}>
                    <Col className="text-sm-left">
                        {tech.name}
                    </Col>
                    <Col className="text-sm-left">
                        {tech.items.map(item => <div key={item} className="border">{item}</div>)}
                    </Col>
                </Row>
            );
        });

        return (
            <Col key={work}>
                <Row className="justify-content-center">{work}</Row>
                <Row className="justify-content-center">{workSet[work].des}</Row>
                {techs}
                <Row className="justify-content-center">
                    <a href={workSet[work].link} target="_blank" rel="noopener noreferrer">Link</a>
                </Row>
            </Col >
        );
    });
}

export default RecentWorkBlock;