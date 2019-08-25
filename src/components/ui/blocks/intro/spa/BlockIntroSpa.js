import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ReactLogo from '../../../../../res/pictures/react.png';
import AspLogo from '../../../../../res/pictures/aspnetcore.png';
import AzureLogo from '../../../../../res/pictures/azure.png';
import SqlLogo from '../../../../../res/pictures/database.png';
import classes from './BlockIntroSpa.module.css';

const BlockIntroSpa = props => {
    return (
        <Container>
            <Row className="justify-content-center align-content-center" style={{ height: '30vh' }}>
                <div className="border p-4">
                    <h3>This is a SPA made by me, <a href="https://github.com/sailor95/Portfolio-SPA-v2">code & doc</a>.</h3>
                    <div className="d-flex justify-content-around">
                        <div className="border p-3"><img className={classes.Logo} src={ReactLogo} alt="React/Redux" /> React/Redux</div>
                        <div className="border p-3"><img className={classes.Logo} src={AspLogo} alt="ASP.NET Core" /> ASP.NET Core</div>
                        <div className="border p-3"><img className={classes.Logo} src={AzureLogo} alt="Azure" />Azure</div>
                        <div className="border p-3"><img className={classes.Logo} src={SqlLogo} alt="MSSQL/EF Core" />MSSQL/EF Core</div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default BlockIntroSpa;