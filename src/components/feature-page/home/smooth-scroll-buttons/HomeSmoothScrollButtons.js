import React from 'react';

import NextSubjectIcon from '../../../../res/pictures/down-arrow-gray.png';
import ToTopIcon from '../../../../res/pictures/up-arrow-gray.png';

export const HomeNextSubjectButton = ({ subjectId, marginTop }) => {
    return (
        <div>
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
        </div>
    );
};

export const HomeToTopButton = ({ subjectId, marginTop }) => {
    return (
        <div>
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