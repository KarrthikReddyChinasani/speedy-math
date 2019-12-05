import React, { Component } from 'react';
import './style.css';

class AnswerItem extends Component {

    _handleClick = (e, option) => {
        e.preventDefault();
        const { onOptionPress } = this.props;
        onOptionPress(option);
    }

    render() {
        const { option } = this.props;
        return (
            <li className="answer-item" onClick={(e) => this._handleClick(e, option)}> {option}</li>
        );
    }
}

export default AnswerItem;