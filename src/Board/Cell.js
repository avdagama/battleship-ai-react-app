import './Cell.css'

function Cell({ value, x, y, onCellClick }) {

    var color = 'white'

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
            color = 'green'
            break;
    }

    return (
      <>
        <div onClick={() => onCellClick(x,y)} className={'cell'} style={{background: color}}></div>
      </>
    );
  }
  
  export default Cell;