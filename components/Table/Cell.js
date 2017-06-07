import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props.value);
    }

    componentWillReceiveProps(nextProps) {
        console.log('Cell:componentWillReceiveProps', nextProps);
    }

    render() {
        return (
            <div className="table_cell">
                {new String(this.props.value)}
            </div>
        );
    }
}
export default Cell;