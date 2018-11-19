import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Setup extends Component {
    constructor(props) {
        super(props);

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.redirect = this.redirect.bind(this);

        this.state = {
            name: '',
            difficulty: this.options[0].value
        }

    }

    get options() {
        return [
            {
                value: 'easy',
                label: 'Easy'
            },
            {
                value: 'medium',
                label: 'Medium'
            },
            {
                value: 'hard',
                label: 'Hard'
            }
        ]
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        const {
            name,
            difficulty
        } = this.state;
        if (!name.trim().length) {
            alert('Podaj imię');
        }
        else {
            this.props.onSubmit(name, difficulty, this.redirect)
        }
    };

    redirect() {
        this.props.history.push('/game');
    }

    onChangeHandler = (event) => {
        const {
            name, value
        } = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className="l-centered">
                <form className="f-start" onSubmit={this.onSubmitHandler}>
                    <label htmlFor="name"
                           className="f-start__label">
                        Name:
                    </label>
                    <input value={this.state.name}
                           className="f-start__control"
                           onChange={this.onChangeHandler}
                           name="name"
                           id="name"/>
                    <label
                        className="f-start__label"
                        htmlFor="difficulty">
                        Difficulty:
                    </label>
                    <select name="difficulty"
                            id='difficulty'
                            className="f-start__control"
                            value={this.state.difficulty}
                            onChange={this.onChangeHandler}
                    >
                        {this.options.map(item =>
                            <option key={item.value} value={item.value}> {item.label}</option>)}
                    </select>
                    <button className="f-start__action">Submit</button>
                </form>
            </div>
        )
    }
}

Setup.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default Setup;