import React from 'react';

import linkedInIcon from '../../../../res/pictures/linkedin-logo-64px.png';
import gitHubIcon from '../../../../res/pictures/GitHub-Mark-64px.png';
import mediumIcon from '../../../../res/pictures/medium-size.png';
import classes from './BlockLinks.module.css';

const BlockLink = () => {
    return (
        <>
            <a href="https://github.com/sailor95" target="_blank" rel="noopener noreferrer"><img className={classes.Icon} src={gitHubIcon} alt="GitHub Link" /></a>
            <a href="https://www.linkedin.com/in/tsung-wei-huang-217561179" target="_blank" rel="noopener noreferrer"><img className={classes.Icon} src={linkedInIcon} alt="LinkedIn Link" /></a>
            <a href="https://medium.com/sailor-spaceship" target="_blank" rel="noopener noreferrer"><img className={classes.Icon} src={mediumIcon} alt="Medium Link" /></a>
        </>
    );
};

export default BlockLink;