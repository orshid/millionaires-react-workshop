import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Questions extends Component {

    renderAnswer = (answer, index) =>{
        return <li
            key={index}
            className="c-question"
            onClick={this.props.onAnswerClick(answer)}>
            <span className="c-question__label">
                {String.fromCharCode(65 + index)}: {answer}</span>
        </li>
    }

    render() {

        const {
            question,
            answers
        } = this.props;

        return <div className="c-questions">
            <p className="c-questions__title c-question">Pytanie: {question}</p>
            <ul className="c-questions__list">
                {answers.map(this.renderAnswer)}
            </ul>
        </div>

    }
}

Questions.propTypes = {
    answers: PropTypes.array,
    question: PropTypes.string,
    onAnswerClick: PropTypes.func,
};

export default Questions;