import { PropTypes, observer } from 'mobx-react';

import Cell from './Cell';
import React from 'react';
import Row from './Row';

@observer
class Table extends React.Component {
    static propsType = {
        store: PropTypes.observableObject.isRequired
    }

    constructor(props) {
        super(props);
        this.store = window.t = props.store;
    }

    componentWillReceiveProps(nextProps) {
        console.log('Table:componentWillReceiveProps', nextProps);
    }

    render() {
        const headers = [];
        for(let key in this.store.columns) {
            let title = this.store.columns[key].title || this.store.columns[key];
            headers.push(<Cell key={key} className="table_cell" value={title} />);
        }
        return (
            <div>
                <h3>Титле</h3>
                <div className="table_header">
                    {headers}
                </div>
                {this.store.data.map((item, i) => <Row key={i} row={item} columns={this.store.columns} />)}
            </div>
        );
    }
}

export default Table;
