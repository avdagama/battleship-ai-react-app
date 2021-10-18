import Cell from "./Cell";

function Board({ board, onCellClick }) {

    var rows = [];
    for (var i = 0; i < board.length; i++) {
        var row = [];
        for (var j = 0; j < board[i].length; j++) {
            row.push(<Cell key={i + ' ' + j} value={board[i][j]} x={j} y={i} onCellClick={onCellClick}/>)
        }
        rows.push(<div key={i} style={{display: 'flex', flexDirection: 'row'}}>{row}</div>);
    }

    return (
      <>
        <div>{rows}</div>
      </>
    );
  }
  
  export default Board;