function Cell({ value, x, y }) {

    var color = 'gray'

    switch (value) {
        case 'W':
            color = 'royalblue'
            break;
        case 'M':
            color = 'black'
            break;
        case 'H':
            color = 'red'
            break;
    }

    return (
      <>
        <div style={{height: 4+"vw", width: 4+"vw", background: color, border: '1px solid gray'}}></div>
      </>
    );
  }
  
  export default Cell;