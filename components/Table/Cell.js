import React from 'react';

class Cell extends React.Component {
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