import './App.css';
import { useState } from 'react'
import Board from './Board/Board';

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
  
  const [userBoard, setUserBoard] = useState(startingUserBoard);
  const [computerBoard, setComputerBoard] = useState(startingComputerBoard);
  const [probabilityBoard, setProbabilityBoard] = useState(startingProbabilityBoard);
  const [isUserPlacingShips, setIsUserPlacingShips] = useState(true);

  function onDonePlacingShipsClick() {
    placeComputerShips();
    setIsUserPlacingShips(() => false);
  }

  /**
   * Randomly places the computer's ships on the computerBoard
   */
  function placeComputerShips() {
    //TODO: currently we hardcode the ships, we should be randomly place them
    computerBoard[8][1] = 'S';
    computerBoard[8][2] = 'S';
    computerBoard[8][3] = 'S';
    computerBoard[8][4] = 'S';
    computerBoard[8][5] = 'S';

    computerBoard[0][1] = 'S';
    computerBoard[1][1] = 'S';
    computerBoard[2][1] = 'S';
    computerBoard[3][1] = 'S';

    computerBoard[4][4] = 'S';
    computerBoard[4][5] = 'S';
    computerBoard[4][6] = 'S';

    computerBoard[7][9] = 'S';
    computerBoard[8][9] = 'S';
    computerBoard[9][9] = 'S';

    computerBoard[2][7] = 'S';
    computerBoard[1][7] = 'S';
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
    //if the user made a valid move, then the computer can make the next move
    if (makeUserMove(x, y))
      makeComputerMove();
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

    setComputerBoard(board => {
      board[y][x] = nextState;
      return [...board];
    })
    return true;
  }
  
  /**
   * Makes the statistically best move for the computer
   */
  function makeComputerMove() {
    let {x, y} = getBestMove();
    let nextState = getNextCellState(userBoard[y][x]);
    updateProbabilities(x, y, nextState);

    setUserBoard(board => {
      board[y][x] = nextState;
      return [...board];
    });
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
    //since we don't want to make this move again, set the probability to 0
    probabilityBoard[y][x] = 0.0;

    switch (resultingCellState) {
      //miss
      case 'M':
         // TODO: update the probability board after a miss
        break;

      //hit
      case 'H':
        // TODO: update the probability board after a hit
        break;

      default:
        break;
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


  return (
    <>
      <h1 style={{marginTop: 20, marginBottom: 0}}>Battleship</h1>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <div>
          <h2>You</h2>
          <Board board={userBoard} hideShips={false} onCellClick={onUserCellClick}/>
        </div>
        {isUserPlacingShips ? 
        <div style={{textAlign: 'center', width: 30+'vw', margin: 'auto 0'}}>
          <h2>Welcome to Battleship</h2>
          <p>Your goal is to sink all of the AI's ships before it can sink yours.</p>
          <p>To start, place the following ships horizontally or verically by clicking cells on the grid:</p>
          <p>Carrier (5 spaces)</p>
          <p>Battleship (4 spaces)</p>
          <p>Cruiser (3 spaces)</p>
          <p>Submarine (3 spaces)</p>
          <p>Destroyer (2 spaces)</p>
          <button onClick={onDonePlacingShipsClick} className={'button'}>I'm done placing my ships</button>
        </div>
        :
        <div>
          <h2>AI</h2>
          <Board board={computerBoard} hideShips={true} onCellClick={onComputerCellClick}/>
        </div>
        }
      </div>
    </>
  );
}

export default App;
