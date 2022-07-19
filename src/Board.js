import { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import createBoard from './createBoard'

//The Game Board
//3 props:
//nrows - number of rows, defaults to 3
//ncols - number of cols, defaults to 3
//chanceLightStartsOn - probability on will be set to true, defaults to 0.5
//State:
//in-memory board created by createBoard.create()


function Board({ nrows=3, ncols=3, chanceLightStartsOn=0.5 }) {
  const [board, setBoard] = useState(createBoard.create(nrows, ncols, chanceLightStartsOn));

  //return true when every cell is turned off
  function hasWon() {
    return board.every(row => (
      row.every(cell => cell.on === false)
      ))
  }

  //flip cell.on for the clicked cell and the cell above, below, to the right and to the left
  const flipCellsAround = (coord) => {
    const [y,x] = coord
    function flip(cell) {
      if (cell.on === true) {
        return false
      } else {
        return true
      }
    }
    //create a deep clone of the in-memory board, updating the appropriate cells but keeping everything else the same 
    setBoard(
      board.map(row => (
        row.map(cell => (
          (cell.coord[0] === y && cell.coord[1] === x) ||
          (cell.coord[0] === y+1 && cell.coord[1] === x) || 
          (cell.coord[0] === y && cell.coord[1] === x+1) ||
          (cell.coord[0] === y-1 && cell.coord[1] === x) ||
          (cell.coord[0] === y && cell.coord[1] === x-1) ?
          {...cell, on: flip(cell) } :
          cell
        )
      )))
    )  
  }
 
  //If hasWon() is false render the Board as a table-grid, if hasWon() is true render "You win" message
  return (
    <div className='Board'>
      {hasWon() === true? (
        <h1 className="Board-winText">You Win!</h1>
      ) : (
        <table className='Board-table'>
          <tbody>
            {board.map((row, idx) => (
              <tr key={idx}>
                {row.map(cell => (
                  <Cell key={cell.coord} flipCellsAroundMe={flipCellsAround} isLit={cell.on} coord={cell.coord} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Board;
