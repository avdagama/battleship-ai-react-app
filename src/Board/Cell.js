function Cell({ value, x, y, onCellClick }) {

    var color = 'gray'

    switch (value) {
        case 'W':
            color = 'royalblue'
            break;
        case 'M':
            color = 'black'
            break;
        case 'H':
            color = 'crimson'
            break;
        case 'S':
            color = 'green'
            break;
    }

    return (
      <>
        <div onClick={() => onCellClick(x,y)} style={{height: 3.5+"vw", width: 3.5+"vw", background: color, margin: 1}}></div>
      </>
    );
  }
  
  export default Cell;