import Cell from "./Cell";

function Board({ userBoard }) {

    var board = [];
    for (var i = 0; i < userBoard.length; i++) {
        var row = [];
        for (var j = 0; j < userBoard[i].length; j++) {
            row.push(<Cell value={userBoard[i][j]} x={j} y={i}/>)
        }
        board.push(<div style={{display: 'flex', flexDirection: 'row'}}>{row}</div>);
    }

    return (
      <>
        <div>{board}</div>
      </>
    );
  }
  
  export default Board;