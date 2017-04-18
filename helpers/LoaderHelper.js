import React from 'react';
import Loader from 'react-loader';

export default class LoaderHelper {
    static getSmall(color = '#000', className = '') {
        return (
            <span className={className}>
                <Loader lines={10} length={3} width={2} radius={3} color={color}/>
            </span>
        );
    }
}