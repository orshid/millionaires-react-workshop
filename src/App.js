import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Setup from './Setup';
import Game from './Game';

class App extends Component {

    constructor() {
        super();
        this.state = {
            hasStarted: false,
            name: '',
            difficulty: ''
        };

        this.setupGame = this.setupGame.bind(this)
    }


    setupGame(name, difficulty, callback) {
        this.setState({
            name,
            difficulty,
            hasStarted: true,
        },callback);

    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/"
                           exact
                           render={(props) => <Setup
                               onSubmit={this.setupGame}
                               history={props.history}
                           />}/>
                    <Route path="/game"
                           exact
                           render={({history}) => <Game
                               hasStarted={this.state.hasStarted}
                               history={history}
                               userName={this.state.name}
                               difficulty={this.state.difficulty}
                           />}/>
                </Switch>
            </BrowserRouter>

        );
    }
}

export default App;
