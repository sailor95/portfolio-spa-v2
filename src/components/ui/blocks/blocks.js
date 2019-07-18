import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Levels from 'react-star-rating-component';

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
            return (
                <Row md="auto" className="border m-0" key={oneTech.tech} >
                    <Col className="text-sm-left">{oneTech.tech}</Col>
                    <Col>
                        <Levels
                            name={oneTech.tech}
                            value={oneTech.level}
                            starCount={5}
                            editing={false}
                        />
                    </Col>
                </Row>
            );
        });
        return (
            <Col key={key}>
                <Row className="justify-content-center">{key}</Row>
                {techs}
            </Col>);
    });
}

export { SkillSetBlock };