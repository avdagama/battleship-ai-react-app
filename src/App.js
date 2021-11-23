import './App.css';
import { useState } from 'react'
import WinLose from './WinLose';
import Board from './Board/Board';
import Directions from './Directions';

function App() {
  const startingUserBoard = Array.from(Array(10), _ => Array(10).fill('W'));
  const startingComputerBoard = Array.from(Array(10), _ => Array(10).fill('W'));
  const startingProbabilityBoard = [
    [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    [0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.8, 0.8, 0.8, 0.8, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.8, 0.9, 0.9, 0.8, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.8, 0.9, 0.9, 0.8, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.8, 0.8, 0.8, 0.8, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5],
    [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
  ]

  //checker board pdf 
  // const startingProbabilityBoard = [
  //   [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
  //   [0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5],
  //   [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.6, 0.5],
  //   [0.5, 0.6, 0.7, 0.8, 0.8, 0.8, 0.8, 0.7, 0.6, 0.5],
  //   [0.5, 0.6, 0.7, 0.8, 0.9, 0.9, 0.8, 0.7, 0.6, 0.5],
  //   [0.5, 0.6, 0.7, 0.8, 0.9, 0.9, 0.8, 0.7, 0.6, 0.5],
  //   [0.5, 0.6, 0.7, 0.8, 0.8, 0.8, 0.8, 0.7, 0.6, 0.5],
  //   [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.6, 0.5],
  //   [0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5],
  //   [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
  // ]

  
  const [userBoard, setUserBoard] = useState(startingUserBoard);
  const [computerBoard, setComputerBoard] = useState(startingComputerBoard);
  const [probabilityBoard, setProbabilityBoard] = useState(startingProbabilityBoard);
  const [isUserPlacingShips, setIsUserPlacingShips] = useState(true);
  const [didUserWin, setDidUserWin] = useState(null);

  function onDonePlacingShipsClick() {
    placeComputerShips();
    setIsUserPlacingShips(() => false);
  }

  /**
 * 
 * @param {int} min - the min value used 
 * @param {int} max - the max value to be found -1
 * @returns {int} - value that randomly chosen between min and max -1
 */
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  /**
   * Places ship in random location
   * @param {int} ship - size of ship 
   */
  function placeShip (ship) {
    let x, y, direction

    //checks to see if ship is already placed around random generated location dependent on ship size
    //facing -> 0 (vertical) | 1 (horizontal)
    while (true){
      x = getRandom(0,10);
      let tempX = x;
      y = getRandom(0,10);
      let tempY = y;
      direction = getRandom(0,2);

      if (direction === 0) {
        if (y < 5) {
          //check if we can place the ship
          let canPlaceShip = true;
          for (let i = 0; i < ship + 1; i++) {
            if (computerBoard[tempX][tempY++] !== 'W') {
              canPlaceShip = false;
              break;
            }
          }
          //place the ship
          if (canPlaceShip) {
            for (let i = 0; i < ship; i++) {
              //change said location to a 'ship' block
              computerBoard[x][y++] = 'S';
            }
            break;
          }
        }
        else{
          //check if we can place the ship
          let canPlaceShip = true;
          for (let i = 0; i < ship + 1; i++) {
            if (computerBoard[tempX][tempY--] !== 'W') {
              canPlaceShip = false;
              break;
            }
          }
          //place the ship
          if (canPlaceShip) {
            for (let i = 0; i < ship; i++) {
              //change said location to a 'ship' block
              computerBoard[x][y--] = 'S';
            }
            break;
          }
        }
      }
      else if (direction === 1){
        if (x < 5) {
          //check if we can place the ship
          let canPlaceShip = true;
          for (let i = 0; i < ship + 1; i++) {
            if (computerBoard[tempX++][tempY] !== 'W') {
              canPlaceShip = false;
              break;
            }
          }
          //place the ship
          if (canPlaceShip) {
            for (let i = 0; i < ship; i++) {
              //change said location to a 'ship' block
              computerBoard[x++][y] = 'S';
            }
            break;
          }
        } 
        else {
          //check if we can place the ship
          let canPlaceShip = true;          
          for (let i = 0; i < ship + 1; i++) {
            if (tempX < 0)
              continue;
            if (computerBoard[tempX--][tempY] !== 'W') {
              canPlaceShip = false;
              break;
            }
          }
          //place the ship
          if (canPlaceShip) {
            for (let i = 0; i < ship; i++) {
              //change said location to a 'ship' block
              computerBoard[x--][y] = 'S';
            }
            break;
          }
        }
      }
    }
  }
  
  /**
   * Randomly places the computer's ships on the computerBoard
   */
  function placeComputerShips() {
    //carrier ship
    placeShip(5);

    //battleship
    placeShip(4);

    //cruiser
    placeShip(3);

    //submarine
    placeShip(3);

    //destroyer
    placeShip(2);
  }


  /**
   * Handles when a user clicks on their own cell
   * @param {int} x - the x coordinate 
   * @param {int} y - the y coordinate
   */
  function onUserCellClick(x, y) {
    //only react if the user is still placing their ships
    if (isUserPlacingShips) {
      setUserBoard(prevBoard => {
        let newBoard = prevBoard.map(inner => inner.slice())
        //clicking a cell switches it between water and a ship
        newBoard[y][x] = (newBoard[y][x] === 'S' ? 'W' : 'S');
        return newBoard;
      })
    }
  }

  /**
   * Handles when a user clicks on a computer's cell
   * @param {int} x - the x coordinate 
   * @param {int} y - the y coordinate
   */
  function onComputerCellClick(x, y) {
    //make sure no one won yet
    if (didUserWin != null)
      return

    //only continue if the user made a valid move
    if (makeUserMove(x, y) === false)
      return

    //check if the user won
    if (isAllShipsSunken(computerBoard)) {
      setDidUserWin(true);
      return;
    }

    makeComputerMove();

    //check if the computer won
    if (isAllShipsSunken(userBoard))
      setDidUserWin(false);
  }

  /**
   * Resets all the states to start a new game
   */
  function resetGame() {
    setUserBoard(startingUserBoard);
    setComputerBoard(startingComputerBoard);
    setProbabilityBoard(startingProbabilityBoard);
    setIsUserPlacingShips(true);
    setDidUserWin(null);
  }

  /**
   * Attempts to make a move for the user at computerBoard[y][x]
   * @param {int} x - the x coordinate 
   * @param {int} y - the y coordinate
   * @returns {boolean} if the user made a valid move
   */
  function makeUserMove(x, y) {
    let nextState = getNextCellState(computerBoard[y][x]);
    if (nextState == null)
      return false;

    computerBoard[y][x] = nextState;
    setComputerBoard(board => [...board]);
    return true;
  }
  
  /**
   * Makes the statistically best move for the computer
   */
  function makeComputerMove() {
    let {x, y} = getBestMove();
    let nextState = getNextCellState(userBoard[y][x]);
    updateProbabilities(x, y, nextState);

    userBoard[y][x] = nextState;
    setUserBoard(board => [...board]);
  }

  /**
   * Gets the move with the highest probability on the probabilityBoard
   * @returns {x, y} the best move
   */
  function getBestMove() {
      let bestMove;
      let maxProbability = 0;
      for(let y = 0; y < probabilityBoard.length; y++) {
        for (let x = 0; x < probabilityBoard[y].length; x++) {
          if (probabilityBoard[y][x] > maxProbability) {
            maxProbability = probabilityBoard[y][x];
            bestMove = {x, y};
          }
        }
      }
      return bestMove;
  }

  /**
   * Updates the probability board given the result of the computer's move
   * @param {int} x - the x coordinate of the computer's last move
   * @param {int} y - the y coordinate of the computer's last move
   * @param {string} resultingCellState The resulting state of the cell at userBoard[y][x]
   */
  function updateProbabilities(x, y, resultingCellState) {

    //set the proability of the current move to 0 so we don't try it again
    probabilityBoard[y][x] = 0.0;

    switch (resultingCellState) {
      //miss
      case 'M':
        //lesses the probabilties of the surrounding area
        updateProbabilitiesAroundCoordinate(y, x, false)
        break;

      //hit
      case 'H':
        //increase the probabilties of the surrounding area
        updateProbabilitiesAroundCoordinate(y, x, true)
        break;

      default:
        break;
    }
  }

  /**
   * Updates the proababilties around the coordinates in a tapered cross
   * @param {int} x - the x coordinate
   * @param {int} y - the y coordinate
   */
   function updateProbabilitiesAroundCoordinate(y, x, isHit) {
      let probabilityFactor = isHit ? .8 : .4
      
      for(let i = 0; i < 3; i++) {
        let probabiltiyChange = isHit ? 1+probabilityFactor : 1-probabilityFactor;

        //up
        if (inBounds(y-i, x))
          probabilityBoard[y-i][x] *= probabiltiyChange

        //right
        if (inBounds(y, x+i))
          probabilityBoard[y][x+i] *= probabiltiyChange

        //down
        if (inBounds(y+i, x))
          probabilityBoard[y+i][x] *= probabiltiyChange

        //left
        if (inBounds(y, x-i))
          probabilityBoard[y][x-i] *= probabiltiyChange

        //taper the probabilitiy as it gets farther from the coordinate
        probabilityFactor -= 0.1
      }
  }
  
  
  /**
   * Checks if the coordinates are in the range of the board
   * @param {int} x - the x coordinate
   * @param {int} y - the y coordinate
   * @returns A boolean representing if the coordinates are in range.
   */
  const maxArrayIndex = 10; 
  const minArrayIndex = 0; 
  function inBounds(y , x){
      if( minArrayIndex <= x && x < maxArrayIndex){
        if( minArrayIndex <= y && y < maxArrayIndex){
            return true; 
        }
      }
  }


  /**
   * Determines the new state for a cell based on its existing state
   * @param {string} prevState - the existing state of the cell
   * @returns The next state, or null if no next state exists
   */
  function getNextCellState(prevState) {
    switch (prevState) {
      //water -> miss
      case 'W':
        return 'M'
      //ship -> hit
      case 'S':
        return 'H';
      default:
        return null;
    }
  }

  /**
   * Checks to see if a board contains no ships
   * @param {string[][]} board 
   * @returns {boolean} If the board contains no ships
   */
  function isAllShipsSunken(board) {
    for(let y = 0; y < board.length; y++)
      for (let x = 0; x < board[y].length; x++)
        if (board[y][x] === 'S')
          return false;
    return true;
  }

  return (
    <>
      <header>
        <h1>BATTLESHIP AI</h1>
      </header>
      {didUserWin != null && <WinLose didUserWin={didUserWin} onPlayAgainClick={resetGame}/>}
      <div className={'game'}>
        <div>
          <h2>You</h2>
          <Board board={userBoard} hideShips={false} onCellClick={onUserCellClick}/>
        </div>
        {isUserPlacingShips ? 
          <Directions onDonePlacingShipsClick={onDonePlacingShipsClick} />
        :
          <div>
            <h2>AI</h2>
            <Board board={computerBoard} hideShips={true} onCellClick={onComputerCellClick}/>
          </div>
        }
      </div>
      <footer>
        <a href={'https://github.com/avdagama/battleship-ai-react-app'}>View project on GitHub</a>
      </footer>
    </>
  );
}

export default App;
