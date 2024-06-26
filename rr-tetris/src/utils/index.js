export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
};

export const gridDefault = () => {
    const rows = 18
    const cols = 10
    const array = []

    for (let row = 0; row < rows; row += 1) {
        array.push([])
        for (let col = 0; col < cols; col += 1) {
            array[row].push(0)
        }
    }

    return array
};

// BLOCK SHAPES AND THEIR ROTATIONS AS ARRAYS // THIS IS A MESS ! * // 
export const shapes = [
    // EMPTY // 
    [[[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]]],
    // I //
    [[[0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]],

    [[0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]]],

    // T //
    [[[0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]],

    [[0, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]],

    [[0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]],

    [[0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]]],

    // L //
    [[[0, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0]],

    [[1, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]],

    [[0, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]],

    [[0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]]],

    // J //
    [[[1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]],

    [[0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]],

    [[0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]],

    [[0, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]]],

    // Z //
    [[[0, 0, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]],

    [[0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]]],

    // S //
    [[[0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]],

    [[0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]]],

    // O //
    [[[0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]]]
];

// RANDOM SHAPE // 
export const randomShape = () => {
    return random(1, shapes.length - 1)
};

// RETURN TO DEFAULT STATE // 
export const defaultState = () => {
    return {
        // CREATE AN EMPTY GRID // 
        grid: gridDefault(),
        // GET NEW RANDOM SHAPE // 
        shape: randomShape(),
        // SET ROTATION OF SHAPE - 0 // 
        rotation: 0,
        // PLACE SHAPE TOP MIDDLE OF THE GRID //  
        x: 5,
        y: -4,
        // SETS INDEX TO RANDOM SHAPE // 
        nextShape: randomShape(),
        isRunning: true,
        // SET SCORE TO 0 // 
        score: 0,
        // DEFAULT SPEED // 
        speed: 1000,
        // GAME NOT OVER // 
        gameOver: false
    }
};


export const nextRotation = (shape, rotation) => {
    return (rotation + 1) % shapes[shape].length
};

export const canMoveTo = (shape, grid, x, y, rotation) => {
    const currentShape = shapes[shape][rotation]
    // LOOPS THROUGH ALL ROWS & COLUMNS OF THE SHAPE //
    for (let row = 0; row < currentShape.length; row++) {
        for (let col = 0; col < currentShape[row].length; col++) {

            if (currentShape[row][col] !== 0) {

                const proposedX = col + x

                const proposedY = row + y
                if (proposedY < 0) {
                    continue
                }
                // GETS THE ROW OF THE GRID // 
                const possibleRow = grid[proposedY]
                // CHECK IF ROW EXISTS //
                if (possibleRow) {
                    // THIS CHECKS IF THE COLUMN IN THE ROW IS UNDEFINED, OFF THE EDGES, 0 & EMPTY //
                    if (possibleRow[proposedX] === undefined || possibleRow[proposedX] !== 0) {
                        return false
                    }
                } else {
                    return false
                }
            }
        }
    }
    return true
};


export const addBlockToGrid = (shape, grid, x, y, rotation) => {

    let blockOffGrid = false
    const block = shapes[shape][rotation]
    const newGrid = [...grid]
    for (let row = 0; row < block.length; row++) {
        for (let col = 0; col < block[row].length; col++) {
            if (block[row][col]) {
                const yIndex = row + y
                if (yIndex < 0) {
                    blockOffGrid = true
                } else {
                    newGrid[row + y][col + x] = shape
                }
            }
        }
    }
    return { grid: newGrid, gameOver: blockOffGrid }
};


export const checkRows = (grid) => {
    const points = [0, 40, 100, 300, 1200]
    let completedRows = 0
    for (let row = 0; row < grid.length; row++) {

        if (grid[row].indexOf(0) === -1) {
            completedRows += 1

            grid.splice(row, 1)
            grid.unshift(Array(10).fill(0))
        }
    }
    return points[completedRows]
};