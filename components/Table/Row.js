import { PropTypes as PTMobx, observer } from 'mobx-react';

import Cell from './Cell';
import PropTypes from 'prop-types';
import React from 'react';

@observer
class Row extends React.Component {
    static propTypes = {
        columns: PTMobx.observableObject,
        row: PTMobx.observableObject.isRequired,
        id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
        onClickCell: PropTypes.func,
        onClickRow: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.columns = props.columns || null;
    }

    getCurrentView(value, key) {
        if (!this.columns) return value.title || key;
        let CurrentCell;
        if (this.columns[key].preRenderCell instanceof Function) {
             CurrentCell = this.columns[key].preRenderCell(value, this.props.id);
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