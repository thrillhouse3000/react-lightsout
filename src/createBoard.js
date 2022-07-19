//create in-memory board. An array of arrays of Cell objects with chance probability that on is true
//[[{on: true, coord: [0,0]},{on: false, coord: [0,1]}],
// [{on: true, coord: [0,0]},{on: true, coord: [0,0]}]]
const createBoard = {
    create(rows, cols, chance) {
        let initialBoard = [];
        for (let i = 0; i < rows; i++) {
            let row = []
            for (let j = 0; j < cols; j++ ) {
                row.push({on: Math.random() < chance? true : false, coord: [i, j]})
            }
            initialBoard.push(row)
        }
        return initialBoard;
    }
}

export default createBoard;