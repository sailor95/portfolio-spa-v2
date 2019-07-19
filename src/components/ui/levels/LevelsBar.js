import React from 'react';
import PropTypes from 'prop-types';

class LevelsBar extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.number,
        levelCount: PropTypes.number,
        levelColor: PropTypes.string,
        emptyLevelColor: PropTypes.string
    };

    static defaultProps = {
        levelCount: 5,
        levelColor: '#ffb400',
        emptyLevelColor: '#333'
    }

    constructor(props) {
        super();

        this.state = {
            value: props.value
        };
    }

    renderLevels = () => {
        let levelNodes = [];

        const {
            name,
            levelCount,
            levelColor,
            emptyLevelColor
        } = this.props;

        const { value } = this.state;

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

    render() {
        return (
            <div style={{ display: 'inline-block', position: 'relative' }}>
                {this.renderLevels()}
            </div>
        );
    }
}

export default LevelsBar;