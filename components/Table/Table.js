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

    render() {
        let data = this.store.sort.key ? this.store.sortedData : this.store.data;
        return (
            <div>
                <h3>Заголовок</h3>
                <div className="table_header">
                    <Row row={this.store.columns} onClickCell={this.store.setSort} />
                </div>
                <div className="table_body">
                    {data.map((item, i) => <Row key={i} row={item} columns={this.store.columns} />)}
                </div>
            </div>
        );
    }
}

export default Table;
