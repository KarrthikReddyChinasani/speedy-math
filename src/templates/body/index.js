import React, { PureComponent } from 'react';
import './style.css';
import QuestionWrapper from '../../atoms/question';
import AnswerWrapper from '../../organisms/answer';
import utils from '../../utils/index';

class Body extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _getOptions(answer) {
        let options = [];
        const random = utils.fetchRandomNumber(0, 3);
        for (var i = 0; i < 4; i++) {
            if (random === i) {
                options[i] = answer;
            } else {
                const data = answer.toString();
                if(data.length > 2) {
                    const randomIndex = utils.fetchRandomNumber(0, data.toString().length - 1);
                    const randomNumber = utils.fetchRandomNumber(0, 9);
                    options[i] = data.substring(0, randomIndex) + `${randomNumber}`+data.substring(randomIndex + 1)
                } else {
                    options[i] = i !== 0 ? i * 0.5 + answer : answer + 2
                }
            }
        }
        return options;
    }

    _handleClick = (selectedAnswer) => {
        let { onAnswerSelect, answer } = this.props;
        onAnswerSelect(selectedAnswer === answer);
    }

    render() {
        const { question, answer } = this.props;
        const options = this._getOptions(answer);

        return (
            <div className="question-body-wrapper">
                <div className="question-body">
                    <QuestionWrapper question={question} />
                    <AnswerWrapper options={options} onClick={this._handleClick} />
                </div>
            </div>
        );
    }
}

export default Body;