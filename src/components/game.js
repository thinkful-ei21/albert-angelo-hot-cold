import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            correctGuess: 90,
            feedback: 'Click +NEW GAME',
            userGuess: 0,
            count: 100,
            guesses: [1,2,3,4]
        };
    }

    startGame() {
        this.setState({
            correctGuess: Math.floor(Math.random()*100),
            feedback: 'Make your guess!',
            guesses: []
        })
    }

    setUserGuess(userGuess) {
        this.setState({
            userGuess: parseInt(userGuess, 10),
        })
    }

    updateGuessList() {
        this.setState({
            guesses: [...this.state.guesses, this.state.userGuess]
        })
    }
    
    compareGuess() {
        // compare this.state.userGuess this.state.correctGuess
        if (this.state.userGuess === this.state.correctGuess) {
            this.setState({
                feedback: 'You won!!!!',
            })
        } else if (this.state.userGuess - this.state.correctGuess < 10 && this.state.userGuess - this.state.correctAnser > 0) {
            this.setState({
                feedback: 'Hot',
            })
        } else if (this.state.correctGuess - this.state.userGuess < 10 && this.state.correctGuess - this.state.userGuess > 0) {
            this.setState({
                feedback: 'Hot',
            })
        } else {
            this.setState({
                feedback: 'Cold',
            })
        }
        this.updateGuessList();
    }

    render() {
        return (
            <div>
                <Header startGame={() => this.startGame()}/>
                <GuessSection
                    setUserGuess={(userGuess) => this.setUserGuess(userGuess)}
                    compareGuess={() => this.compareGuess()}
                    feedback={this.state.feedback} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}
