import Cell from "./Cell";

function Board({ board, onCellClick }) {

    var toRender = [];
    for (var i = 0; i < board.length; i++) {
        var row = [];
        for (var j = 0; j < board[i].length; j++) {
            row.push(<Cell value={board[i][j]} x={j} y={i} onCellClick={onCellClick}/>)
        }
        toRender.push(<div style={{display: 'flex', flexDirection: 'row'}}>{row}</div>);
    }

    return (
      <>
        <div>{toRender}</div>
      </>
    );
  }
  
  export default Board;