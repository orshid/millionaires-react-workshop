import React, {Component} from 'react';
import {questionsList} from "./helpers";
import PropTypes from 'prop-types';

class SidePanel extends Component {
    get lastQuestionIndex() {
        return questionsList.length - 1
    }

    renderItem = ({price, isGuaranteed}, index) => {
        const {
            questionNumber
        } = this.props;

        const isCurrent = questionNumber === (this.lastQuestionIndex - index);
        const isAnswered = questionNumber > (this.lastQuestionIndex - index);

        const className = `c-status__item${isCurrent ? ' is-active' : ''} ${isAnswered ? ' is-done' : ''} ${isGuaranteed ? ' is-special' : ''}`;

        return (
            <li key={price}
                className={className}>
                <span className='c-status__indicator'>
                    { questionsList.length  - index}
                </span>
                <span className="c-status__value">
                    {price}
                </span>
            </li>
        )
    };

    render() {
        return (
            <div className="c-side">
                <ul className='c-status'>
                    {questionsList.map(this.renderItem)}
                </ul>
            </div>

        )
    }
}

SidePanel.propTypes = {
    questionNumber: PropTypes.number
};
export default SidePanel;