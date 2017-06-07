import React from 'react';

import Cell from './Cell.js';
import { observer } from 'mobx-react';

@observer
class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        console.log('Row:componentWillReceiveProps', nextProps);
    }

    render() {
        const cells = [];
        for(let key in this.props.row) {
            console.log(this.props.row[key]);
            cells.push(<Cell key={key} value={this.props.row[key]} />);
        }
        return (
            <div className="table_row">
                {cells}
            </div>
        );
    }
}

export default Row;