import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

function StartButton({ callback }) {
    return (
        <StyledStartButton onclick={callback}>
            Start Game
        </StyledStartButton >
    );
}

export default StartButton;