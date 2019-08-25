import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { skillSet } from '../../../../constants/globalConstants';
import HomeLevelsBar from '../levels-bar/HomeLevelsBar';

const HomeSkills = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center align-content-center" style={{ height: '55vh' }}>
                    <Col className="col-12">
                        <h2 style={{ fontSize: '2rem', margin: '2rem auto' }}>
                            Skills
                        </h2>
                    </Col>
                    <SkillSet skillSet={skillSet} />
                </Row>
            </Container>
        </>
    );
}

const SkillSet = ({ skillSet }) => {
    return Object.keys(skillSet).map(key => {
        let techs = [];
        techs = skillSet[key].map(oneTech => {
            return (
                <Row md="auto" className="border m-0" key={oneTech.tech} >
                    <Col className="text-sm-left">{oneTech.tech}</Col>
                    <Col>
                        <HomeLevelsBar
                            name={oneTech.tech}
                            value={oneTech.level}
                            levelCount={5}
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

export default HomeSkills;