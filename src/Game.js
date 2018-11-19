import React, {Component} from 'react';
import Background from './Background';
import Questions from './Questions';
import SidePanel from './SidePanel';
import {fetchQuestions} from './helpers';
import shuffle from 'lodash/shuffle';
import EndGame from "./EndGame";
import PropTypes from 'prop-types';

class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            currentQuestionNumber: 0,

        };

        this.getQuestions = this.getQuestions.bind(this)
    }

    get currentQuestion() {
        return this.state.questions[this.state.currentQuestionNumber]
    }

    componentDidMount() {
        if (!this.props.hasStarted) {
            this.props.history.replace('/');
            return
        }
        this.getQuestions()
    }

    getQuestions() {
        fetchQuestions(this.props.difficulty).then(data => {
            this.setState({
                questions: data
            })
        })
    }

    checkAnswer = (answer) => {
        return (event) => {
            if (answer === this.currentQuestion.correctAnswer) {
                if (this.state.currentQuestionNumber < 11) {
                    this.setState(prevState => {
                        return {
                            currentQuestionNumber: prevState.currentQuestionNumber + 1
                        }
                    })
                }
                else {
                    this.setState({
                        hasWon: true,
                        isFinished: true
                    })
                }
            } else {
                this.setState({
                    hasWon: false,
                    isFinished: true
                })
            }
        }
    };

    render() {
        const {
            correctAnswer,
            incorrectAnswers = [],
            question
        } = this.currentQuestion || {};

        return this.state.isFinished
            ? <EndGame
                userName={this.props.userName}
                questionNumber={this.props.currentQuestionNumber}
            />
            : (
                <div className='l-game'>
                    <Background>
                        <Questions
                            answers={shuffle([correctAnswer, ...incorrectAnswers])}
                            question={question}
                            onAnswerClick={this.checkAnswer}
                        />
                    </Background>
                    <SidePanel questionNumber={this.state.currentQuestionNumber}/>
                </div>
            )
    }
}

Game.propTypes = {
    userName: PropTypes.string,
    history: PropTypes.object,
    hasStarted: PropTypes.bool,
    difficulty: PropTypes.string
};
export default Game