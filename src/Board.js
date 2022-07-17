import { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import createBoard from './createBoard'

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/


function Board({ nrows=3, ncols=3, chanceLightStartsOn=0.5 }) {
  const [board, setBoard] = useState(createBoard.create(nrows, ncols));

  // TODO: check the board in state to determine whether the player has won.\
  function hasWon() {
    let isWinner = false;
    board.every(row => (
      row.every(
        cell => cell.on === false) ? isWinner = true : isWinner = false
      )
    )
    return isWinner 
  }

  // TODO: Make a (deep) copy of the oldBoard
  // TODO: in the copy, flip this cell and the cells around it
  // TODO: return the copy
  const flipCellsAround = (coord) => {
    const [y,x] = coord
    function flip(cell) {
      if (cell.on === true) {
        return false
      } else {
        return true
      }
    }
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

  // TODO
  // if the game is won, just show a winning msg & render nothing else
  // make table board
  let winner = hasWon()
 
  return (
    <div className='Board'>
      {winner === true? (
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
