import React from "react";
import "./Cell.css";

//A single cell
//3 props:
//flipCellsAroundMe - passed from <Board/>
//isLit - Booleans that determines the cell's classes
//coord - passed to flipCellsAroundMe(), used to set data-testid

function Cell({ flipCellsAroundMe, isLit, coord }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  return <td data-testid={coord} className={classes} onClick={() => flipCellsAroundMe(coord)}></td>;
}

export default Cell;
