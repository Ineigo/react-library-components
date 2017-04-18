import React from 'react';
import ReactDOM from 'react-dom';

//My Components
import Button from './components/Button/Button';

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <Button
            title='Хеллоу'
            type='submit'
            iconStyle='copy'
            loading
            onClick={e => console.log('onClick', e)}
        />
    </div>,
    document.getElementById('root')
);
