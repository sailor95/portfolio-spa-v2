import React from 'react';
import PropTypes from 'prop-types';

const HomeLevelsBar = ({
    name,
    levelCount,
    levelColor,
    emptyLevelColor,
    value
}) => {

    const renderLevels = () => {
        let levelNodes = [];

        const levelStyles = (i, value) => ({
            float: 'right',
            cursor: 'default',
            color: value >= i ? levelColor : emptyLevelColor
        });

        for (let i = levelCount; i > 0; i--) {
            const id = `${name}_${i}`;

            const levelNodeLabel = (
                <label
                    key={`label_${id}`}
                    style={levelStyles(i, value)}
                >
                    <i style={{ fontStyle: 'normal' }}>&#9733;</i>
                </label>
            );

            levelNodes.push(levelNodeLabel);
        }
        return levelNodes.length ? levelNodes : null;
    }

    return (
        <div style={{ display: 'inline-block', position: 'relative' }}>
            {renderLevels()}
        </div>
    );
}

HomeLevelsBar.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    levelCount: PropTypes.number,
    levelColor: PropTypes.string,
    emptyLevelColor: PropTypes.string
};

HomeLevelsBar.defaultProps = {
    levelCount: 5,
    levelColor: '#ffb400',
    emptyLevelColor: '#333'
};

export default HomeLevelsBar;