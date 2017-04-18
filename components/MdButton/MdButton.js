import React from 'react';
import PropTypes from 'prop-types';
import style from './style.m.less';
import classNames from 'classnames';
import LoaderHelper from '../../helpers/LoaderHelper';

class MdButton extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        title: PropTypes.string,
        iconStyle: PropTypes.string,
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        fontWeight: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        onMouseLeave: PropTypes.func,
        widthStyle: PropTypes.string,
        extraClasses: PropTypes.string
    };

    getLoaderColor() {
        let color = '#000';
        const type = this.props.type;
        if (type === 'submit' || type === 'delete') {
            color = '#fff';
        }
        return color;
    }



    render() {
        const buttonClass = this._getClassNamesForButton();
        const titleSpanClass = this._getClassNamesForTitle();
        const wrapperDivClass = this._getClassNamesForWrapper();
        return (
            <div className={wrapperDivClass}>
                <button className={buttonClass} type='button' onClick={this._onClickButton} onMouseLeave={this._onMouseLeave}>
                    {this.props.loading && LoaderHelper.getSmall(this.getLoaderColor(), style['md-button__loader'])}
                    <span className={titleSpanClass}>{this.props.title}</span>
                </button>
            </div>
        );
    }

    _onClickButton = e => {
        !this.props.disabled && this.props.onClick(e);
    };

    _onMouseLeave = e => {
        if (!this.props.disabled && this.props.onMouseLeave) {
            this.props.onMouseLeave(e);
        }
    };

    _getClassNamesForButton() {
        return classNames(
            style['md-button__body'], {
                [style[`md-button__body--${this.props.type}`]]: this.props.type,
                [style['md-button__body--icon']]: this.props.iconStyle,
                [style['md-button__body--loading']]: this.props.loading,
                [this.props.extraClasses]: this.props.extraClasses
            }
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

export default MdButton;