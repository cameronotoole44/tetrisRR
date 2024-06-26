import React from 'react';
import { useSelector } from 'react-redux';

// MESSAGE DISPLAY //
export default function MessagePopup(props) {
    const isRunning = useSelector((state) => state.game.isRunning);
    const gameOver = useSelector((state) => state.game.gameOver);

    let message = '';
    let isHidden = 'hidden';

    if (gameOver) {
        message = 'Game Over';
        isHidden = '';
    } else if (!isRunning) {
        message = 'Paused';
        isHidden = '';
    }

    return (
        <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50 bg-white/80 text-center ${isHidden}`}>
            <h1>{message}</h1>
        </div>
    )
};
