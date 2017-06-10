import Cell from './components/Table/Cell';
import Dropdown from './components/Dropdown';
import React from 'react';
import ReactDOM from 'react-dom';
import Row from './components/Table/Row';
import Table from './components/Table/Table';
import TableStore from './components/Table/TableStore';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.tableStore = new TableStore({
            idAttribute: 'id',
            columns: {
                id: 'ID',
                data: { title: 'Data', preRenderCell: (value, id) => {
                    return `${value} чт`;
                }},
                name: 'Name',
                isDone: { title: 'готово?', preRenderCell: (value, id) => {
                    const row = this.tableStore.getRowById(id);
                    return <input type="checkbox" checked={value} onChange={() => row.isDone = !value} />
                }}
            }
        });
        this.tableStore.setData([
            { data: '21.03.2015', name: 'test 2', isDone: false, id: 0 },
            { data: '21.03.2016', name: 'test 1', isDone: true, id: 1 }
        ]);
    }
    editData = () => {
        this.tableStore.data[0].id += 1;
        console.log('edited', this.tableStore.data);
    }
    addRow = () => {
        const nextId = this.tableStore.data.length;
        this.tableStore.addItemToData({ 
            data: (new Date()).toLocaleDateString(), 
            name: `test ${nextId}`, 
            isDone: false, 
            id: nextId
        });
    }
    getRow = (id, item, columns) => <Row2 key={id} id={id} row={item} columns={columns} />;
    render() {
        return(
            <div>
                <button onClick={this.editData}>Обновить Id первой строки</button>
                <button onClick={this.addRow}>Добавить строку</button>
                <Table store={this.tableStore} getRowComponent={this.getRow}/>
            </div>
        );
    }

}

/**
 * Строки можно переопределять простым наследованием
 */
class Row2 extends Row { render = () => <div>{this.getCells()}<hr /></div>; }

ReactDOM.render(<Root />, document.getElementById('root'));
