import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toogleState = () => this.setState({ isOpened: !this.state.isOpened });

    render() {
        let dropdownText = '';
        if (this.state.isOpened) {
            dropdownText = this.props.items.map((item, indx) => {
                return <li key={indx}><a href='{item.link}'>{item.label}</a></li>
            });
        }
        return (
            <ul onClick={this.toogleState}>
                <li>text</li>
                {dropdownText}
            </ul>
        );
    }
}

export default Dropdown;
