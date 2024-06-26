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

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { moveDown, moveLeft, moveRight, rotate } from '../actions';

// export default function Controls(props) {
//     const dispatch = useDispatch();
//     const isRunning = useSelector((state) => state.game.isRunning);
//     const gameOver = useSelector((state) => state.game.gameOver);

//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (!isRunning || gameOver) return;

//             switch (e.key) {
//                 case 'ArrowLeft':
//                 case 'a':
//                     dispatch(moveLeft());
//                     break;
//                 case 'ArrowRight':
//                 case 'd':
//                     dispatch(moveRight());
//                     break;
//                 case 'ArrowUp':
//                 case 'w':
//                     dispatch(rotate());
//                     break;
//                 case 'ArrowDown':
//                 case 's':
//                     dispatch(moveDown());
//                     break;
//                 default:
//                     break;
//             }
//         }; // KEYBOARD CONTROLS //

//         window.addEventListener('keydown', handleKeyDown);

//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [dispatch, isRunning, gameOver]);

//     return (
//         <div className={`controls`}>
//             <button
//                 disabled={!isRunning || gameOver}
//                 className="control-button"
//                 onClick={() => dispatch(moveLeft())}
//             >
//                 Left
//             </button>
//             <button
//                 disabled={!isRunning || gameOver}
//                 className="control-button"
//                 onClick={() => dispatch(moveRight())}
//             >
//                 Right
//             </button>
//             <button
//                 disabled={!isRunning || gameOver}
//                 className="control-button"
//                 onClick={() => dispatch(rotate())}
//             >
//                 Rotate
//             </button>
//             <button
//                 disabled={!isRunning || gameOver}
//                 className="control-button"
//                 onClick={() => dispatch(moveDown())}
//             >
//                 Down
//             </button>
//         </div>
//     )
// }; // BUTTON CONTROLS //

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
        }; // KEYBOARD CONTROLS //

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [dispatch, isRunning, gameOver]);

    return (
        <div className="flex flex-row">
            <button
                disabled={!isRunning || gameOver}
                className="font-mono w-15 h-15 flex justify-center items-center border-2 border-gray-600 rounded bg-tetris-dark text-white text-lg m-1 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700"
                onClick={() => dispatch(moveLeft())}
            >
                Left
            </button>
            <button
                disabled={!isRunning || gameOver}
                className="font-mono w-15 h-15 flex justify-center items-center border-2 border-gray-600 rounded bg-tetris-dark text-white text-lg m-1 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700"
                onClick={() => dispatch(moveRight())}
            >
                Right
            </button>
            <button
                disabled={!isRunning || gameOver}
                className="font-mono w-15 h-15 flex justify-center items-center border-2 border-gray-600 rounded bg-tetris-dark text-white text-lg m-1 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700"
                onClick={() => dispatch(rotate())}
            >
                Rotate
            </button>
            <button
                disabled={!isRunning || gameOver}
                className="font-mono w-15 h-15 flex justify-center items-center border-2 border-gray-600 rounded bg-tetris-dark text-white text-lg m-1 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-700"
                onClick={() => dispatch(moveDown())}
            >
                Down
            </button>
        </div>
    )
};
