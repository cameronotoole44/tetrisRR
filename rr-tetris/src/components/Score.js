import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pause, resume, restart } from '../actions';

export default function ScoreBoard(props) {
    const dispatch = useDispatch();
    const game = useSelector((state) => state.game);
    const { score, isRunning, gameOver } = game;

    return (
        <div className="score">
            <div>Score: {score}</div>

            <button
                className="font-mono block py-2.5 px-5 border-2 border-gray-600 rounded bg-tetris-dark text-white text-xl text-center mb-2.5 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700"
                onClick={(e) => {
                    if (gameOver) { return }
                    if (isRunning) {
                        dispatch(pause());
                    } else {
                        dispatch(resume());
                    }
                }}
            >
                {isRunning ? 'Pause' : 'Play'}
            </button>
            <button
                className="font-mono block py-2.5 px-5 border-2 border-gray-600 rounded bg-tetris-dark text-white text-xl text-center mb-2.5 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700"
                onClick={(e) => {
                    dispatch(restart());
                }}
            >
                Restart
            </button>
        </div>
    )
};
