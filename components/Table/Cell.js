import PropTypes from 'prop-types';
import React from 'react';

class Cell extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.any
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="table_cell" onClick={this.props.onClick}>
                {this.props.children || ''}
            </div>
        );
    }
}
export default Cell;