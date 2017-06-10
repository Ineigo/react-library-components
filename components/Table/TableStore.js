import { computed, observable } from "mobx";

class TableStore {
    /**
     * Store для таблицы инициализируется данными(необязательный параметр) и настройкой шапки
     * @param {Array} data Данные которые сопоставятся по ключам с columns (пропущенные в columns не выведутся)
     * @param {Object} columns Описание столбцов. Ключ - связь с данными в data
     * @example { id: { title: 'ID', cell: React.Component } } 
     * @example { id: { title: 'ID' } } -> cell можно не указывать, тогда просто содержимое передастся как текст
     * @example { id: { cell: React.Component } } Преобразуется к виду { id: { title: 'ID', cell: React.Component } } 
     * @example { id: undefined } не отобразится
     * @example { id: 'ID' } Преобразуется к виду { id: { title: 'ID' } }
     */
    constructor({ columns = {}, data = []}) {
        this.columns = this._compileColumns(columns);
        this.data = this.getClearData(data);
    }
    @observable data = [];
    @observable columns = {};
    @observable sort = {
        key: '',
        type: 1
    };

    setSort = (key) => {
        this.sort = { 
            type: this.sort.key === key ? -this.sort.type : this.sort.type,
            key
        };
    }

    getClearData(data = []) {
        return data.map(this.clearDataItem);
    }

    _compileColumns(columns) {
        const res = {};
        for(let key in columns) {
            if(columns[key] instanceof Object) {
                res[key] = Object.assign(columns[key], { title: columns[key].title || key });
            } else {
                res[key] = { title: columns[key] }
            }
        }
        return res;
    }

    clearDataItem = (item) => {
        const newItem = {};
        for(let key in this.columns) {
            newItem[key] = item[key];
        }
        return newItem;
    }

    /**
     * Устанавливает данные с соответствуещей обработкой
     * @param {Array} data Данные которые сопоставятся по ключам с columns (пропущенные в columns не выведутся)
     */
    setData(data) {
        this.data = this.getClearData(data);
    }

    addItemToData(item) {
        this.data.push(this.clearDataItem(item));
    }

    @computed get sortedData() {
        const { key, type } = this.sort;
        return this.data.sort((prev, next) => prev[key] > next[key] ? type : prev[key] < next[key] ? -type : 0 );
    }

}

export default TableStore;