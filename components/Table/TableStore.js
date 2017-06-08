import { computed, observable } from "mobx";

class TableStore {
    constructor({ columns = {}, data = []}) {
        this.columns = this.filterColumns(columns);
        this.data = this.getClearData(data);
    }
    @observable data = [];
    @observable columns = {};

    getClearData(data = []) {
        return data.map(this.clearDataItem);
    }

    filterColumns(columns) {
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
        // this.columns.forEach(col => newItem[col.key] = item[col.key]);
        for(let key in this.columns) {
            newItem[key] = item[key];
        }
        return newItem;
    }

    updateData(data) {
        this.data = this.getClearData(data);
    }

    addItemToData(item) {
        this.data.push(this.clearDataItem(item));
    }

    // @computed get sort(key) {
    //     return this.data.sort(() => key);
    // }

}

export default TableStore;