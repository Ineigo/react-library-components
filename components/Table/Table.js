import React from 'react';

import Row from './Row';

import { observer } from 'mobx-react';

@observer
class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('Table:componentWillReceiveProps', nextProps);
    }

    render() {
        return (
            <div>
                <h3>Титле</h3>
                <div className="table_header">
                    {this.props.columns.map((item, i) => <div key={i} className="table_cell">{item.title}</div>)}
                </div>
                {this.props.data.map((item, i) => <Row key={i} row={item} />)}
            </div>
        );
    }
}

export default Table;
