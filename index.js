import Cell from './components/Table/Cell';
import Dropdown from './components/Dropdown';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table/Table';
import TableStore from './components/Table/TableStore';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.tableStore = new TableStore({
            columns: {
                id: 'ID',
                data: { title: 'Data', preRenderCell: (value) => {
                    return value + ' чт';
                }},
                name: 'Name',
                isDone: { title: 'готово?', preRenderCell: value => {
                    return <input type="checkbox" checked={value} onClick={console.log} />
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
        this.tableStore.addItemToData({ 
            data: '21.03.2015', 
            name: 'test 1', 
            isDone: false, 
            id: 0 
        });
    }
    render() {
        return(
            <div>
                <button onClick={this.editData}>Обновить Id первой строки</button>
                <button onClick={this.addRow}>Добавить строку</button>
                <Table store={this.tableStore} />
            </div>
        );
    }

}
ReactDOM.render(<Root />, document.getElementById('root'));
