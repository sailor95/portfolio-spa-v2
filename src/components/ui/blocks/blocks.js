import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { skillSet } from '../../../constants/globalConstants';

const SkillSetBlock = () => {
    return (
        <>
            <h3>Skill Set</h3>
            <Container>
                <Row>
                    <SkillBlock skillSet={skillSet} />
                </Row>
            </Container>
        </>
    );
}

const SkillBlock = ({ skillSet }) => {
    return Object.keys(skillSet).map(key => {
        let techs = [];
        techs = skillSet[key].map(oneTech => {
            return (<Row key={oneTech.tech}>{oneTech.tech}: {oneTech.level}</Row>);
        });
        return (
            <Col key={key}>
                <Row>{key}</Row>
                {techs}
            </Col>);
    });
}

export { SkillSetBlock };