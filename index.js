import React from 'react';
import ReactDOM from 'react-dom';

//My Components
import MdButton from './components/MdButton/MdButton';

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <MdButton
            title='Хеллоу'
            type='submit'
            iconStyle='copy'
            loading
            onClick={e => console.log('onClick', e)}
        />
    </div>,
    document.getElementById('root')
);
