import Cell from './Cell';
import React from 'react';
import { observer } from 'mobx-react';

@observer
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.columns = props.columns;
    }
    componentWillReceiveProps(nextProps) {
        console.log('Row:componentWillReceiveProps', nextProps);
    }

    render() {
        const cells = [];
        for(let key in this.props.row) {
            const CurrentCell = this.columns[key].cell || Cell;
            cells.push(<CurrentCell key={key} value={this.props.row[key]} />);
        }
        return (
            <div className="table_row">
                {cells}
            </div>
        );
    }
}

export default Row;