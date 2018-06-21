import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    if (props.helpMode) {
        return (
            <header>
                <TopNav
                    startGame={() => props.startGame()}
                    toggleHelpMode={(helpMode) => props.toggleHelpMode(helpMode)}
                />
                < InfoModal
                    toggleHelpMode={(helpMode) => props.toggleHelpMode(helpMode)}
                />
                <h1>HOT or COLD</h1>
            </header>
        );
    }
    return (
        <header>
            <TopNav
                startGame={() => props.startGame()}
                toggleHelpMode={(helpMode) => props.toggleHelpMode(helpMode)}
            />
            <h1>HOT or COLD</h1>
        </header>
    );
};
