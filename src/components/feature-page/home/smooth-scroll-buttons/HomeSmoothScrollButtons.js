import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import NextSubjectIcon from '../../../../res/pictures/down-arrow-gray.png';
import ToTopIcon from '../../../../res/pictures/up-arrow-gray.png';

export const HomeNextSubjectButton = ({ subjectId, marginTop }) => {
    return (
        <div>
            <ScrollLink
                activeClass="active"
                to={subjectId}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <img
                    src={NextSubjectIcon}
                    alt="Next"
                    style={{
                        width: '3rem',
                        height: '3rem',
                        margin: `${marginTop} 1rem 1rem`,
                        opacity: '30'
                    }}
                    title="To next" />
            </ScrollLink>
        </div>
    );
};

export const HomeToTopButton = ({ marginTop }) => {
    return (
        <div onClick={() => scroll.scrollToTop()}>
            <img
                src={ToTopIcon}
                alt="Next"
                style={{
                    width: '3rem',
                    height: '3rem',
                    margin: `${marginTop} 1rem 1rem`,
                    opacity: '30'
                }}
                title="To top" />
        </div>
    );
};