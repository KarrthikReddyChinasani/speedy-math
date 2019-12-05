import React, { Component } from 'react';
import AnswerItem from '../../atoms/answer-item';
import './style.css';

class AnswerWrapper extends Component {

    _getOptionComponents = (options) => {
        let answers = options.map((item, index) => <AnswerItem key={`key-${index}`} onOptionPress={this._onOptionSelect} option={item} />)
        return answers;
    }

    _onOptionSelect = (option) => {
        const { onClick } = this.props;
        onClick(option);
    }

    render() {
        const { options } = this.props;
        const answersComponent = this._getOptionComponents(options);
        return (
            <ul className="answer-wrapper" >
                {answersComponent}
            </ul>
        );
    }
}

export default AnswerWrapper;