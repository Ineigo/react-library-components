import Cell from './Cell';
import React from 'react';
import { observer } from 'mobx-react';

@observer
class Row extends React.Component {
    constructor(props) {
        super(props);
        this.columns = props.columns || null;
    }

    getCurrentView(value, key) {
        if (!this.columns) return value.title || key;
        let CurrentCell;
        if (this.columns[key].cell instanceof React.Component) {
             const obj = this.columns[key].cell;
             CurrentCell = <obj value={value} />
         } else {
             CurrentCell = new String(value);
         }
        return CurrentCell;
    }

    getCells() {
        const cells = [];
        for (let key in this.props.row) {
            const CurrentCell = this.getCurrentView(this.props.row[key], key);
            cells.push(<Cell key={key} onClick={() => this.props.onClickCell && this.props.onClickCell(key)}>{this.getCurrentView(this.props.row[key], key)}</Cell>);
        }
        return cells;
    }

    render() {
        const cells = this.getCells();
        return (
            <div className="table_row">
                {cells}
            </div>
        );
    }
}

export default Row;