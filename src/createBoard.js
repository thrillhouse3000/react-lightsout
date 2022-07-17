/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
// TODO: create array-of-arrays of true/false values
const createBoard = {
    create(rows, cols) {
        let initialBoard = [];
        let values = [true, false]
        for (let i = 0; i < rows; i++) {
            let row = []
            for (let j = 0; j < cols; j++ ) {
                row.push({on: values[Math.floor(Math.random() * values.length)], coord: [i, j]})
            }
            initialBoard.push(row)
        }
        return initialBoard;
    }
}

export default createBoard;