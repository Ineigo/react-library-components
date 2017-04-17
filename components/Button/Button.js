/**
 * Created by Ineigo Kira on 17.04.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.m.less';
import Loader from 'react-loader';
import classNames from 'classnames';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        type: PropTypes.string, // one of: 'submit', 'delete', 'link'
        title: PropTypes.string, // текст кнопки
        iconStyle: PropTypes.string, // one of: 'copy', 'delete', 'turnRight', 'turnLeft', 'scalePlus', 'scaleMinus', 'download', 'upload', 'print', 'send'
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        onClick: PropTypes.func,
        fontWeight: PropTypes.string, // 'normal'
        onMouseLeave: PropTypes.func,
        widthStyle: PropTypes.string, //one of: 'pull'
        extraClasses: PropTypes.string //пользовательский класс
    };

    getLoaderColor() {
        const submitColor = '#fff';
        const type = this.props.type;
        if (type === 'submit' || type === 'delete') {
            return submitColor;
        }
    }
    getLoader() {
        return (
            <span className={style['md-button__loader']}>
                <Loader lines={10} length={3} width={2} radius={3} color={this.getLoaderColor()}/>
            </span>
        );
    }

    render() {
        const buttonClass = this._getClassNamesForButton();
        const titleSpanClass = this._getClassNamesForTitle();
        const wrapperDivClass = this._getClassNamesForWrapper();

        return (
            <div className={wrapperDivClass}>
                <button className={buttonClass} type='button'
                        onClick={e => !this.props.disabled && this.props.onClick(e)}
                        onMouseLeave={e => !this.props.disabled && this.props.onMouseLeave && this.props.onMouseLeave(e)}>
                    {this.props.loading && this.getLoader()}
                    <span className={titleSpanClass}>{this.props.title}</span>
                </button>
            </div>
        );
    }

    _getClassNamesForButton() {
        return classNames(
            style['md-button__body'], {
                [style[`md-button__body--${this.props.type}`]]: this.props.type,
                [style['md-button__body--icon']]: this.props.iconStyle,
                [style['md-button__body--loading']]: this.props.loading,
                [this.props.extraClasses]: this.props.extraClasses
            },
            'js-button'
        );
    }

    _getClassNamesForTitle() {
        return classNames(style['md-button__title'], {
            [style[`md-button__title--${this.props.iconStyle}`]]: this.props.iconStyle,
            [style['md-button__title--normalFont']]: this.props.fontWeight === 'normal'
        });
    }

    _getClassNamesForWrapper() {
        return classNames(style['md-button'], {
            [style[`md-button--${this.props.widthStyle}`]]: this.props.widthStyle,
            [style['md-button--disabled']]: this.props.disabled && !this.props.loading
        });
    }
}

export default Button;