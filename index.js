import React from 'react';
import ReactDOM from 'react-dom';

//My Components
import Dropdown from './components/Dropdown';


const menus = [
    {link: '/home', label: 'Home'},
    {link: '/storyes', label: 'Story'},
    {link: '/contacts', label: 'Contacts'}
]

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <Dropdown items={menus}/>
    </div>,
    document.getElementById('root')
);
