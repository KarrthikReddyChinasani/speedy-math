import React, { Component } from "react";
import Header from "../../organisms/header";
import utils from "../../utils";
import Body from "../../templates/body";
import GameOverPopup from "../../templates/popup";

const TIMER_SECONDS = 1000;
let self;
class BodyWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            question: "",
            answer: 0,
            counter: 5,
            totalTime: 0,
            isGameOver: false
        };
        self = this;
        this.timer = null;
    }

    componentDidMount() {
        this._createQuestion();
    }

    _getOperand = () => {
        const { score } = this.state;
        return score < 5 ?
            utils.fetchRandomNumber(1, 9) :
            score >= 5 && score < 15
                ? utils.fetchRandomNumber(10, 99) :
                utils.fetchRandomNumber(100, 999);
    }

    _createQuestion = () => {
        let question = "";
        let answer = 0;
        const operator = utils.fetchRandomNumber(1, 3);
        const operandA = this._getOperand();
        const operandB = this._getOperand();
        switch (operator) {
            case 1:
                question = `${operandA} + ${operandB}`
                answer = operandA + operandB;
                break;
            case 2:
                question = `${operandA} - ${operandB}`
                answer = operandA - operandB;
                break;
            case 3:
                question = `${operandA} * ${operandB}`
                answer = operandA * operandB;
                break;
            default:
                question = `${operandA} + ${operandB}`
                answer = operandA + operandB;
                break;
        }
        this.setState({
            question,
            answer,
            counter: 5
        });
        this._startInterval();
    }

    _startInterval = () => {
        this.timer = setInterval(() => this.updateTimer(), TIMER_SECONDS);
    }

    updateTimer = async () => {
        const { counter, totalTime } = self.state;
        if (counter === 1) {
            clearInterval(self.timer);
            await self.setState({
                counter: 0,
                totalTime: totalTime + (5 - counter)
            })
            self.setState({
                isGameOver: true,
            })
        } else {
            self.setState({
                counter: counter - 1,
            })
        }
    }

    _onAnswerSelect = (is_correct) => {
        const { counter, totalTime } = this.state;
        if (is_correct) {
            this.setState({
                score: this.state.score + 1,
                totalTime: totalTime + (5 - counter)
            }, () => {
                clearInterval(this.timer);
                this._createQuestion();
            });
        } else {
            this.setState({
                totalTime: totalTime + (5 - counter),
                isGameOver: true
            }, clearInterval(this.timer))
        }
    }

    restartGame = () => {
        self.setState({
            score: 0,
            question: "",
            answer: 0,
            counter: 5,
            totalTime: 0,
            isGameOver: false
        }, this._createQuestion)
    }

    render() {
        const { score, question, answer, counter, totalTime, isGameOver } = this.state;
        return (
            <div>
                <Header score={score} timer={counter} totalTime={totalTime} />
                <Body question={question} answer={answer} onAnswerSelect={this._onAnswerSelect} />
                <GameOverPopup visible={isGameOver} score={score} time={totalTime} handleOk={this.restartGame} handleCancel={this.restartGame} />
            </div>
        );
    }
}

export default BodyWrapper;