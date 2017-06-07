import React from 'react';
import ReactDOM from 'react-dom';

//My Components

import Table from './components/Table/Table';
import TableStore from './components/Table/TableStore';

const menus = [
    {link: '/home', label: 'Home'},
    {link: '/storyes', label: 'Story'},
    {link: '/contacts', label: 'Contacts'}
]
class Root extends React.Component {
    constructor(props) {
        super(props);
        this.tableStore = new TableStore({
            columns: [
                { key: 'id', title: 'ID' },
                { key: 'name', title: 'Name' },
                { key: 'data', title: 'Дата' },
            ],
            data: [
                { data: '21.03.2015', name: 'test 1', isDone: false, id: 0 },
                { data: '21.03.2016', name: 'test 2', isDone: true, id: 1 }
            ]
        });
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
                <Table data={this.tableStore.data} columns={this.tableStore.columns}/>
            </div>
        );
    }

}
ReactDOM.render(<Root />, document.getElementById('root'));
