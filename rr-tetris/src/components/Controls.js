// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { moveDown, moveLeft, moveRight, rotate } from '../actions';

// export default function Controls(props) {
//     const dispatch = useDispatch();
//     const isRunning = useSelector((state) => state.game.isRunning);
//     const gameOver = useSelector((state) => state.game.gameOver);

//     return (
//         <div className={`controls`}>

//             <button
//                 disabled={!isRunning || gameOver}
//                 className="control-button"
//                 onClick={(e) => {
//                     if (!isRunning || gameOver) { return }
//                     dispatch(moveLeft())
//                 }}>Left</button>


//             <button
//                 disabled={!isRunning || gameOver}
//                 className="control-button"
//                 onClick={(e) => {
//                     if (!isRunning || gameOver) { return }
//                     dispatch(moveRight())
//                 }}>Right</button>


//             <button
//                 disabled={!isRunning || gameOver}
//                 className="control-button"
//                 onClick={(e) => {
//                     if (!isRunning || gameOver) { return }
//                     dispatch(rotate())
//                 }}>Rotate</button>


//             <button
//                 disabled={!isRunning || gameOver}
//                 className="control-button"
//                 onClick={(e) => {
//                     if (!isRunning || gameOver) { return }
//                     dispatch(moveDown())
//                 }}>Down</button>

//         </div>

//     )
// };

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveDown, moveLeft, moveRight, rotate } from '../actions';

export default function Controls(props) {
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.game.isRunning);
    const gameOver = useSelector((state) => state.game.gameOver);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isRunning || gameOver) return;

            switch (e.key) {
                case 'ArrowLeft':
                case 'a':
                    dispatch(moveLeft());
                    break;
                case 'ArrowRight':
                case 'd':
                    dispatch(moveRight());
                    break;
                case 'ArrowUp':
                case 'w':
                    dispatch(rotate());
                    break;
                case 'ArrowDown':
                case 's':
                    dispatch(moveDown());
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [dispatch, isRunning, gameOver]);

    return (
        <div className={`controls`}>
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={() => dispatch(moveLeft())}
            >
                Left
            </button>
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={() => dispatch(moveRight())}
            >
                Right
            </button>
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={() => dispatch(rotate())}
            >
                Rotate
            </button>
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={() => dispatch(moveDown())}
            >
                Down
            </button>
        </div>
    );
}
