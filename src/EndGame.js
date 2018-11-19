import React from 'react';
import PropTypes from 'prop-types';
import {getGuaranteedReward} from './helpers';
import {Link} from 'react-router-dom';

const EndGame = props => {
    return (
        <div className="l-end"><p>
            Game Over ! {props.userName}</p>
            <p>{getGuaranteedReward(props.questionNumber)} zł</p>
            <Link className="f-start" to={'/'}>
                Restart
            </Link>
        </div>
    )
};

EndGame.propTypes = {
    questionNumber: PropTypes.number,
};
export default EndGame;