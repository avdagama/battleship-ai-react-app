import './Cell.css'

function Cell({ value, x, y, hideShips, onCellClick }) {

    var color;

    switch (value) {
        //water
        case 'W':
            color = 'royalblue'
            break;
        //miss
        case 'M':
            color = 'lightgray'
            break;
        //destroyed
        case 'D':
            color = 'black'
            break;
        //hit
        case 'H':
            color = 'crimson'
            break;
        //ship
        case 'S':
            color = (hideShips ? 'royalblue' : 'green');
            break;
        default:
            color = 'white'
    }

    return (
      <>
        <div onClick={() => onCellClick(x,y)} className={'cell'} style={{background: color}}></div>
      </>
    );
  }
  
  export default Cell;