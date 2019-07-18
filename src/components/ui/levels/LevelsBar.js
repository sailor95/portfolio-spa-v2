import React from 'react';
import PropTypes from 'prop-types';

class LevelsBar extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.number,
        levelCount: PropTypes.number,
        levelColor: PropTypes.string,
    };


}