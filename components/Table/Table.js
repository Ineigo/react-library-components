import { PropTypes as PTMobx, observer } from 'mobx-react';

import Cell from './Cell';
import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';

@observer
class Table extends React.Component {
    static propsType = {
        store: PTMobx.observableObject.isRequired,
        /**
         * @var Функция должна вернуть готовый к рендеру компонент
         * @example (id, item, columns) => <Row2 key={id} row={item} columns={columns} />,
         * // где Row2 instanceof Row !!!
         */
        getRowComponent: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.store = window.t = props.store;
    }

    _getBodyRows() {
        const data = this.store.sort.key ? this.store.sortedData : this.store.data;
        return data.map((item, i) => this._getDefaultRow(item[this.store.idAttribute], item, this.store.columns));
    }

    _getDefaultRow(id, item, columns) {
        let row;
        if (this.props.hasOwnProperty('getRowComponent')) {
            row = this.props.getRowComponent(id, item, columns)
        } else {
            row = <Row key={id} id={id} row={item} columns={columns} />;
        }
        return row;
    }

    render() {
        return (
            <div>
                <h3>Заголовок</h3>
                <div className="table_header">
                    <Row id="header" row={this.store.columns} onClickCell={this.store.setSort} />
                </div>
                <div className="table_body">
                    {this._getBodyRows()}
                </div>
            </div>
        );
    }
}

export default Table;
