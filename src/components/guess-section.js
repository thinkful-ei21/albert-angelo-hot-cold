import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm
                setUserGuess={(userGuess) => props.setUserGuess(userGuess)}
                compareGuess={() => props.compareGuess()}
            />
        </section>
    );
}
