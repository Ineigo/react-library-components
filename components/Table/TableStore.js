import { observable, computed } from "mobx";

class TableStore {
    constructor({ columns = [], data = []}) {
        this.columns = columns;
        this.data = this.getClearData(data);
    }
    @observable data = [];
    @observable columns = [];

    getClearData(data = []) {
        return data.map(this.clearDataItem);
    }

    clearDataItem = (item) => {
        const newItem = {};
        this.columns.forEach(col => newItem[col.key] = item[col.key]);
        return newItem;
    }

    addItemToData(item) {
        this.data.push(this.clearDataItem(item));
    }

    // @computed get upid(i) {
    //     this.data(i).id += 1;
    // }

}

export default TableStore;