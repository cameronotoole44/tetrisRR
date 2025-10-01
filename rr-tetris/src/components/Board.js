import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveDown } from '../actions';
import GridSquare from './GridSquare';
import { shapes } from '../utils';

export default function Board() {
  const requestRef = useRef(null);
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);

  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { grid, shape, rotation, x, y, isRunning, speed } = game;

  const update = useCallback((time) => {
    requestRef.current = requestAnimationFrame(update);

    if (!isRunning) return;

    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }

    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;

    if (progressTimeRef.current > speed) {
      dispatch(moveDown());
      progressTimeRef.current = 0;
    }

    lastUpdateTimeRef.current = time;
  }, [isRunning, speed, dispatch]);

  useEffect(() => {
    lastUpdateTimeRef.current = 0;
    progressTimeRef.current = 0;

    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [update, isRunning]);

  const block = shapes[shape][rotation];
  const blockColor = shape;

  const gridSquares = grid.map((rowArray, row) =>
    rowArray.map((square, col) => {
      const blockX = col - x;
      const blockY = row - y;
      let color = square;

      if (
        blockX >= 0 && blockX < block.length &&
        blockY >= 0 && blockY < block.length
      ) {
        color = block[blockY][blockX] === 0 ? color : blockColor;
      }

      const k = row * grid[0].length + col;
      return <GridSquare key={k} color={color} />;
    })
  );

  return <div className="board">{gridSquares}</div>;
}
